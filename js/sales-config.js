/*
  Sales display settings for this static LP.

  Date strings must include the Japan offset, for example:
  2026-07-15T00:00:00+09:00

  This site is static, so automatic phase switching uses the visitor's
  device clock. The explicit +09:00 offset keeps phase boundaries anchored
  to Japan time when Date.parse() compares the ISO 8601 values.
*/
window.SALES_CONFIG = {
  timezone: 'Asia/Tokyo',
  manualOverride: null,

  evergreenProduct: {
    id: 'all-course',
    title: '全部受講',
    label: 'Recommended',
    description: '第1回はアーカイブ動画からご受講いただけます。',
    price: 114000,
    priceNote: '講座3回＋特典合計 ¥150,000相当',
    valueTags: ['BAMS医師', 'YUKARI.', '二十四節気', '日本の食文化', 'アーカイブ', '特典6講座'],
    features: [
      '第1回講座（アーカイブ動画）',
      '第2回・第3回ライブ講座',
      '全回アーカイブ動画',
      'ライブ当日のチャット質問',
      '特典6講座つき（緑茶講座を含む）'
    ],
    url: 'https://viorto.shop/items/6a2bd3f1ea71f300c11b0b59',
    buttonLabel: '全部受講で申し込む',
    finalButtonLabel: '全部受講で申し込む（¥114,000）',
    finalPriceNote: '税込｜第1回アーカイブ＋第2回・第3回講座＋特典6講座つき',
    finalValueLines: [
      '第1回から順に学んでいただけるよう、アーカイブ動画をご用意しています。',
      'BAMS医師とYUKARI.から、二十四節気と日本の食文化を学ぶ',
      'アーユルヴェーダ基礎・緑茶・醤油味噌・塩・米・甘味料'
    ]
  },

  phases: [
    {
      id: 'green-tea',
      enabled: false,
      disabled: true,
      startAt: '2026-07-09T00:00:00+09:00',
      endAt: '2026-07-15T00:00:00+09:00',
      secondaryProduct: {
        id: 'green-tea-single',
        title: '緑茶講座だけ受講',
        label: 'Green Tea Course',
        description: '緑茶講座のみご受講いただけます。',
        price: 5000,
        priceNote: '緑茶講座のみ',
        features: ['緑茶講座', 'アーカイブ動画', '季節のお茶の楽しみ方'],
        url: 'https://viorto.shop/items/6a4db71827d5b26ff2cde05a',
        buttonLabel: '緑茶講座に申し込む',
        finalButtonLabel: '緑茶講座に申し込む（¥5,000）'
      }
    },
    {
      id: 'soy-sauce-miso',
      enabled: true,
      startAt: '2026-07-15T15:46:16+09:00',
      endAt: '2026-08-05T00:00:00+09:00',
      secondaryProduct: {
        id: 'soy-sauce-miso-single',
        title: '醤油・味噌ミニ講座',
        label: 'Soy Sauce & Miso Course',
        description: '醤油・味噌ミニ講座のみご受講いただけます。',
        price: 5000,
        priceNote: '醤油・味噌ミニ講座のみ',
        features: ['醤油・味噌ミニ講座', 'アーカイブ動画', '発酵と養生の視点'],
        url: 'https://viorto.shop/items/6a56fc8eb456382e09964d0e',
        buttonLabel: '醤油・味噌ミニ講座に申し込む',
        finalButtonLabel: '醤油・味噌ミニ講座に申し込む（¥5,000）'
      }
    },
    {
      id: 'august-25',
      enabled: true,
      disabled: false,
      startAt: '2026-08-06T00:00:00+09:00',
      endAt: '2026-08-25T22:00:00+09:00',
      secondaryProduct: {
        id: 'august-25-single',
        title: '8月25日講座単発受講',
        label: 'August 25 Course',
        description: '夏から秋へ\n夏の疲れを秋に残さない食養生',
        price: 38000,
        priceNote: '8月25日講座単発受講',
        features: ['夏から秋へ', '夏の疲れを秋に残さない食養生', 'オンライン開催', 'アーカイブ動画'],
        url: 'https://viorto.shop/items/6a72f2f7b90fcc0089f65848',
        buttonLabel: '8月25日講座に申し込む',
        finalButtonLabel: '8月25日講座に申し込む（¥38,000）'
      }
    }
  ],

  futurePhaseTemplates: [
    {
      id: 'next-mini-course',
      enabled: false,
      disabled: true,
      startAt: null,
      endAt: null,
      product: {
        title: '',
        description: '',
        price: null,
        url: '',
        buttonLabel: ''
      }
    },
    {
      id: 'august-main-session',
      enabled: false,
      disabled: true,
      startAt: null,
      endAt: '2026-08-26T00:00:00+09:00',
      product: {
        title: '',
        description: '',
        price: null,
        url: '',
        buttonLabel: ''
      }
    },
    {
      id: 'ingredients-bundle',
      enabled: false,
      disabled: true,
      startAt: null,
      endAt: null,
      product: {
        title: '',
        description: '',
        price: null,
        url: '',
        buttonLabel: ''
      }
    }
  ]
};
