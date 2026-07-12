(function initSalesController() {
  const config = window.SALES_CONFIG;
  if (!config) {
    console.warn('[KisetsuSales] SALES_CONFIG is missing. Showing evergreen product only.');
    return;
  }

  const selectors = {
    evergreen: '[data-sales-product="evergreen"]',
    secondary: '[data-sales-product="secondary"]',
    finalSecondaryButton: '[data-sales-final-secondary-button]',
    mobile: '[data-sales-mobile]',
    final: '[data-sales-final]'
  };

  function formatYen(price) {
    if (typeof price !== 'number') return '';
    return `¥${price.toLocaleString('ja-JP')}`;
  }

  function parseIsoTime(value, fieldName) {
    if (!value) return null;
    const timestamp = Date.parse(value);
    if (Number.isNaN(timestamp)) {
      console.warn(`[KisetsuSales] Invalid ${fieldName}: ${value}`);
      return null;
    }
    return timestamp;
  }

  function enabledPhases() {
    return (config.phases || []).filter((phase) => phase && phase.enabled === true && phase.disabled !== true);
  }

  function phaseHasUsableProduct(phase) {
    return Boolean(phase && phase.secondaryProduct && phase.secondaryProduct.title);
  }

  function findPhaseById(id) {
    return enabledPhases().find((phase) => phase.id === id);
  }

  function resolvePhase(now) {
    const override = config.manualOverride;

    if (override === 'evergreen-only') return null;

    if (override) {
      const overridePhase = findPhaseById(override);
      if (!overridePhase || !phaseHasUsableProduct(overridePhase)) {
        console.warn(`[KisetsuSales] Unknown or disabled manualOverride: ${override}. Showing evergreen product only.`);
        return null;
      }
      return overridePhase;
    }

    const nowMs = now instanceof Date ? now.getTime() : Date.now();
    return enabledPhases().find((phase) => {
      if (!phaseHasUsableProduct(phase)) return false;
      const start = parseIsoTime(phase.startAt, `${phase.id}.startAt`);
      const end = parseIsoTime(phase.endAt, `${phase.id}.endAt`);
      if (start === null || end === null) return false;
      return nowMs >= start && nowMs < end;
    }) || null;
  }

  function setText(root, selector, text) {
    const el = root.querySelector(selector);
    if (el) el.textContent = text || '';
  }

  function setHtmlLines(root, selector, lines) {
    const el = root.querySelector(selector);
    if (!el) return;
    el.textContent = '';
    (lines || []).forEach((line, index) => {
      if (index > 0) el.appendChild(document.createElement('br'));
      el.appendChild(document.createTextNode(line));
    });
  }

  function renderList(root, selector, items) {
    const list = root.querySelector(selector);
    if (!list) return;
    list.textContent = '';
    (items || []).forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
  }

  function configureButton(button, product, label) {
    if (!button) return false;

    if (!product || !product.url) {
      button.hidden = true;
      button.removeAttribute('href');
      button.removeAttribute('target');
      button.removeAttribute('rel');
      button.setAttribute('aria-hidden', 'true');
      button.setAttribute('tabindex', '-1');
      if (product && product.title) {
        console.warn(`[KisetsuSales] URL is missing for ${product.title}. Button hidden.`);
      }
      return false;
    }

    const buttonLabel = label || product.buttonLabel || product.title;
    button.hidden = false;
    button.textContent = buttonLabel;
    button.href = product.url;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.setAttribute('aria-label', `${product.title}の詳細へ進む`);
    button.removeAttribute('aria-hidden');
    button.removeAttribute('tabindex');
    return true;
  }

  function renderEvergreen(product) {
    const card = document.querySelector(selectors.evergreen);
    if (card && product) {
      setText(card, '[data-sales-label]', product.label);
      setText(card, '[data-sales-title]', product.title);
      setText(card, '[data-sales-description]', product.description);
      setText(card, '[data-sales-price]', formatYen(product.price));
      setText(card, '[data-sales-price-note]', product.priceNote);
      renderList(card, '[data-sales-value-tags]', product.valueTags);
      renderList(card, '[data-sales-features]', product.features);
      configureButton(card.querySelector('[data-sales-button]'), product, product.buttonLabel);
    }

    const final = document.querySelector(selectors.final);
    if (final && product) {
      setText(final, '[data-sales-final-title]', product.title);
      setText(final, '[data-sales-final-price]', formatYen(product.price));
      setText(final, '[data-sales-final-price-note]', product.finalPriceNote);
      setHtmlLines(final, '[data-sales-final-value]', product.finalValueLines);
      configureButton(final.querySelector('[data-sales-final-main-button]'), product, product.finalButtonLabel);
    }

    const mobile = document.querySelector(selectors.mobile);
    if (mobile && product) {
      setText(mobile, '[data-sales-mobile-title]', product.title);
      setText(mobile, '[data-sales-mobile-price]', `${formatYen(product.price)}（税込）`);
      const mobileButton = mobile.querySelector('[data-sales-mobile-button]');
      if (mobileButton) mobileButton.textContent = product.buttonLabel;
    }
  }

  function hideSecondary() {
    const card = document.querySelector(selectors.secondary);
    if (card) {
      if (card.parentElement) card.parentElement.classList.add('pricing-grid--single');
      card.hidden = true;
      card.setAttribute('aria-hidden', 'true');
      card.querySelectorAll('a, button, input, select, textarea, [tabindex]').forEach((el) => {
        el.setAttribute('tabindex', '-1');
        if (el.tagName === 'A') el.removeAttribute('href');
      });
    }

    const finalButton = document.querySelector(selectors.finalSecondaryButton);
    if (finalButton) {
      finalButton.hidden = true;
      finalButton.removeAttribute('href');
      finalButton.setAttribute('aria-hidden', 'true');
      finalButton.setAttribute('tabindex', '-1');
    }
  }

  function renderSecondary(product) {
    if (!product || !product.url) {
      if (product && product.title) {
        console.warn(`[KisetsuSales] URL is missing for ${product.title}. Secondary product hidden.`);
      }
      hideSecondary();
      return;
    }

    const card = document.querySelector(selectors.secondary);
    if (card) {
      if (card.parentElement) card.parentElement.classList.remove('pricing-grid--single');
      card.hidden = false;
      card.removeAttribute('aria-hidden');
      setText(card, '[data-sales-label]', product.label);
      setText(card, '[data-sales-title]', product.title);
      setText(card, '[data-sales-description]', product.description);
      setText(card, '[data-sales-price]', formatYen(product.price));
      setText(card, '[data-sales-price-note]', product.priceNote);
      renderList(card, '[data-sales-features]', product.features);
      card.setAttribute('aria-label', `${product.title}の内容`);
      configureButton(card.querySelector('[data-sales-button]'), product, product.buttonLabel);
    }

    configureButton(
      document.querySelector(selectors.finalSecondaryButton),
      product,
      product.finalButtonLabel || product.buttonLabel
    );
  }

  function render(now) {
    const evergreen = config.evergreenProduct;
    const phase = resolvePhase(now);
    const secondary = phase ? phase.secondaryProduct : null;

    renderEvergreen(evergreen);
    if (secondary) {
      renderSecondary(secondary);
    } else {
      hideSecondary();
    }

    return [evergreen && evergreen.title, secondary && secondary.title].filter(Boolean);
  }

  let renderedProducts = render();
  document.documentElement.setAttribute('data-sales-ready', 'true');

  const isLocalhost = ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);
  if (isLocalhost) {
    window.KisetsuSalesPreview = {
      renderAt(isoDateTime) {
        const timestamp = parseIsoTime(isoDateTime, 'preview date');
        if (timestamp === null) return [];
        const products = render(new Date(timestamp));
        renderedProducts = products;
        console.info(`[KisetsuSales] ${isoDateTime}: ${products.join(' / ') || 'No products'}`);
        return products;
      },
      currentProducts() {
        return renderedProducts.slice();
      }
    };
  }
})();
