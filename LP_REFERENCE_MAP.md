# LP_REFERENCE_MAP.md

Complete reference map for the current `季節のことわり` landing page implementation.

Source files referenced:

- `index.html`
- `css/style.css`
- `css/watercolor-deco.css`
- `js/main.js`
- `images/`
- `assets/`

This document records the current implementation only. It does not include critique or redesign recommendations.

---

# PART 1 - CONTENT INVENTORY

## Global / Document Head

- HTML language: `ja`
- Page title: `季節のことわり｜日本の四季と食から学ぶアーユルヴェーダ`
- Meta description:
  - `インドで学んだアーユルヴェーダ医師・村越シッダールタ悟と、料理家 YUKARI. が贈る、日本の四季・二十四節気・旬の食材から学ぶオンライン食養生講座。梅干し、味噌、薬味、旬野菜——日本の食卓に息づく知恵を、アーユルヴェーダの視点で読み解きます。`
- Meta keywords:
  - `アーユルヴェーダ,二十四節気,日本の食養生,季節の養生,旬の食材,発酵食品,梅干し,味噌,薬味,オンライン講座`
- OGP:
  - `og:title`: `季節のことわり`
  - `og:description`: `アーユルヴェーダを、日本の暮らしへ。二十四節気と旬の食材から学ぶ、一年の食養生講座。`
  - `og:type`: `website`
  - `og:image`: not present

## Section 0 - Header

- HTML element: `header`
- HTML ID: `site-header`
- Internal class names:
  - `site-header`
  - `header-logo`
  - `header-cta`
- Visible text:
  - Logo: `日本の四季と食から学ぶアーユルヴェーダ`
  - Header CTA: `講座の詳細を見る`
- CTA destination:
  - HTML href: `#section-cta`
  - JS reinforces href as `#section-cta`

## Section 1 - Hero

- HTML element: `section`
- HTML ID: `hero`
- Internal class names:
  - `hero`
  - `hero-bg`
  - `hero-deco`
  - `hero-deco--circle1`
  - `hero-deco--circle2`
  - `hero-watercolor`
  - `hero-content`
  - `hero-eyebrow`
  - `hero-title`
  - `line-jp`
  - `hero-divider`
  - `hero-subtitle`
  - `hero-badges`
  - `hero-badge`
  - `hero-cta-group`
  - `btn-primary`
  - `btn-secondary`
  - `hero-scroll`
  - `hero-scroll-line`
- Section label:
  - `Ayurveda for Japanese Seasons`
- Main heading:
  - `アーユルヴェーダを、`
  - `日本の暮らしへ。`
- Formal course title:
  - `日本の四季と食から学ぶアーユルヴェーダ`
- Intro / subtitle text:
  - `二十四節気と旬の食材から学ぶ、`
  - `一年の食養生講座。`
  - `梅干し。味噌。薬味。旬の野菜。`
  - `日本人が昔から大切にしてきた食の知恵を、`
  - `アーユルヴェーダの視点から読み解きます。`
  - `インドの知識をそのまま学ぶのではなく、`
  - `日本の気候、日本の食文化、日本の暮らしに寄り添った形でお届けするオンライン講座です。`
  - `村越シッダールタ悟 × YUKARI.`
  - `2026年 7月・8月・10月｜オンライン開催`
- Badges:
  - `🌿 オンライン開催`
  - `📹 アーカイブあり`
  - `🏛 BAMS取得医師が登壇`
  - `🎁 特典講座つき`
- CTA blocks:
  - Primary button: `全講座で学ぶ`
  - Secondary button: `講座内容を見る`
- Scroll indicator:
  - `Scroll`
- Images / decorative elements:
  - `images/hero.jpg`
  - `assets/arrangements/hero-main.svg`
  - inline SVG wave/circle line art
  - JS-injected hero particles

## Section 2 - Sympathy

- HTML element: `section`
- HTML ID: `section-sympathy`
- Internal class names:
  - `section-sympathy`
  - `sympathy-deco`
  - `container`
  - `section-kamon`
  - `section-title`
  - `text-center`
  - `section-divider`
  - `sympathy-intro`
  - `fade-in-up`
  - `checklist`
  - `checklist-item`
  - `checklist-icon`
  - `checklist-text`
  - `sympathy-close`
- Section label:
  - `Seasonal Feeling`
- Main heading:
  - `季節が変わるたびに、`
  - `身体も少しずつ変わります。`
- Intro text:
  - `梅雨になると重だるい。`
  - `夏は食欲が落ちる。`
  - `秋になると乾燥が気になる。`
  - `冬は冷えやすい。`
  - `そんな季節ごとの身体の変化を、`
  - `「仕方ないこと」として過ごしていませんか。`
- Checklist list items:
  - `梅雨になると、身体が重く感じる`
  - `夏は冷たいものが増えて、胃腸が疲れやすい`
  - `季節の変わり目に体調が揺らぎやすい`
  - `肌や髪の乾燥が気になる季節がある`
  - `旬のものが身体に良い理由を知りたい`
  - `健康情報が多すぎて、何を選べばよいか迷う`
- Quote:
  - `身体は、季節に反応しています。`
  - `その反応を知ることは、`
  - `自分を責めることではなく、`
  - `自分の身体をより丁寧に扱うための第一歩です。`
- Images / decorative elements:
  - `assets/wanpoint/19-aoba-leaves.svg`

## Section 3 - Problem

- HTML element: `section`
- HTML ID: `section-problem`
- Internal class names:
  - `section-problem`
  - `container`
  - `section-kamon`
  - `problem-heading`
  - `problem-subtext`
  - `problem-cards`
  - `problem-card`
  - `problem-card-num`
  - `problem-card-text`
  - `problem-answer`
  - `problem-answer-q`
  - `problem-answer-a`
- Section label:
  - `The Real Question`
- Main heading:
  - `35歳を過ぎた頃から、`
  - `季節の変化が身体に出やすくなることがあります。`
- Subheading:
  - `けれど、それは年齢だけのせいとは限りません。季節、消化力、食べ方、日々のリズムの影響を、身体は静かに受けています。`
- Cards:
  - Card 01 number: `01`
    - `季節によって、消化力は変わります。`
    - `夏に胃が重い。冬に食欲が増す。`
    - `それは身体が自然のリズムに反応しているサインかもしれません。`
  - Card 02 number: `02`
    - `日本の気候は、とても繊細です。`
    - `梅雨、高温多湿、台風、寒暖差。`
    - `インドとも欧米とも違う環境の中で、私たちは暮らしています。`
  - Card 03 number: `03`
    - `身体に良いものも、季節や量で変わります。`
    - `胡瓜、トマト、スイカ、そうめん。`
    - `夏の定番にも、食べ方の知恵があります。`
- Answer box:
  - Question:
    - `毎日の食卓を、`
    - `もう少し深く見つめてみませんか。`
  - Answer:
    - `日本には昔から、季節に合わせた食べ方がありました。`
    - `その知恵をアーユルヴェーダの視点で読み解くと、`
    - `何気ない食卓の中に、身体を整えるヒントが見えてきます。`

## Section 4 - Why / Food Wisdom

- HTML element: `section`
- HTML ID: `section-why`
- Internal class names:
  - `section-why`
  - `why-deco`
  - `why-deco--1`
  - `why-deco--2`
  - `why-deco--3`
  - `container`
  - `section-kamon`
  - `section-title`
  - `section-divider`
  - `why-prose`
  - `why-keywords`
  - `why-body`
  - `why-body--question`
  - `why-examples`
  - `why-conclusion`
  - `why-conclusion-text`
- Section label:
  - `Japan × Ayurveda`
- Main heading:
  - `季節とともに暮らす知恵は、`
  - `今も食卓の中に残っています。`
- Keywords:
  - `梅干し、味噌汁、薬味、旬の野菜。`
- Body text:
  - `私たちが何気なく口にしているものの中には、先人たちが積み重ねてきた知恵が息づいています。`
  - `この講座は、`
  - `新しい健康法を外から持ち込むためのものではありません。`
  - `むしろ、`
  - `日本の暮らしの中で受け継がれてきた知恵を、`
  - `もう一度見つめ直すための講座です。`
- Example box:
  - `夏に梅を干す。`
  - `冷奴に生姜を添える。`
  - `胡瓜に紫蘇や茗荷を合わせる。`
  - `味噌汁を毎日いただく。`
- Question line:
  - `なぜ、そうしてきたのでしょう。`
- Body text after examples:
  - `その理由を、`
  - `アーユルヴェーダという視点を通して読み解いていきます。`
- Conclusion:
  - `アーユルヴェーダを、`
  - `日本の暮らしの言葉で語り直す。`
  - `それが、この講座の大切なテーマです。`
- Images / decorative elements:
  - `assets/wanpoint/01-umeboshi.svg`
  - `assets/wanpoint/02-shiso.svg`
  - `assets/wanpoint/05-inaho.svg`

## Section 5 - Nijuushi

- HTML element: `section`
- HTML ID: `section-nijuushi`
- Internal class names:
  - `section-nijuushi`
  - `container--wide`
  - `nijuushi-intro`
  - `nijuushi-visual`
  - `nijuushi-circle`
  - `nijuushi-circle-inner`
  - `nijuushi-center-text`
  - `nijuushi-center-kanji`
  - `nijuushi-center-en`
  - `season-dot`
  - `nijuushi-text-block`
  - `section-label`
  - `section-title`
  - `nijuushi-desc`
  - `nijuushi-quote`
- Visual center text:
  - `二十四`
  - `節気`
  - `The 24 Solar Terms`
- Season dots:
  - `春`
  - `夏`
  - `秋`
  - `冬`
- Section label:
  - `Seasonal Map`
- Main heading:
  - `二十四節気は、`
  - `季節を細やかに感じるための地図です。`
- Body text:
  - `立春、清明、小満、夏至、白露、霜降。`
  - `二十四節気は、約15日ごとに移り変わる自然のリズムを表した暦です。`
  - `この講座では、二十四節気を暗記する必要はありません。`
  - `日本の季節を理解するための「地図」として使います。`
  - `その地図の上に、アーユルヴェーダの視点を重ねることで、`
  - `旬の食材や昔ながらの食べ方の意味が、`
  - `より立体的に見えてきます。`
- Quote:
  - `なぜ夏に梅干しなのか。`
  - `なぜ冬に味噌汁がしみるのか。`
  - `なぜ季節が変わると、食べたいものも変わるのか。`
  - `その理由を、季節と身体の両方から読み解きます。`

## Section 6 - Learn / Course Contents

- HTML element: `section`
- HTML ID: `section-learn`
- Internal class names:
  - `section-learn`
  - `container--wide`
  - `section-kamon`
  - `section-label`
  - `section-title`
  - `section-lead`
  - `learn-grid`
  - `learn-card`
  - `learn-card-deco`
  - `learn-card-season`
  - `learn-card-num`
  - `learn-card-title`
  - `learn-card-list`
  - `gold-line`
  - `gold-line-symbol`
- Section label:
  - `What You'll Learn`
- Subheading / label:
  - `3回シリーズの構成`
- Main heading:
  - `季節の移り変わりに合わせて、`
  - `身体と食を学びます。`
- Intro text:
  - `レシピを覚えるだけではなく、`
  - `「なぜその食べ方が身体に合うのか」を学びます。`
  - `考え方が身につくと、`
  - `毎日の買い物、料理、外食の選び方まで変わっていきます。`
- Course cards:
  - Session 01:
    - Season/date label: `Session 01 ｜ 2026.7.7`
    - Number: `01`
    - Title:
      - `梅雨から夏へ`
      - `湿気と暑さを味方にする食養生`
    - List:
      - `梅雨に身体が重くなる理由`
      - `夏に向けて消化力を守る食べ方`
      - `胡瓜、トマト、スイカとの付き合い方`
      - `そうめんでも夏バテは解消されない理由`
      - `薬味、酸味、発酵食品の夏の役割`
      - `冷たいものを摂りすぎた時の身体の反応`
    - Image: `assets/wanpoint/04-kyuri.svg`
  - Session 02:
    - Season/date label: `Session 02 ｜ 2026.8.25`
    - Number: `02`
    - Title:
      - `夏から秋へ`
      - `夏の疲れを秋に残さない食養生`
    - List:
      - `夏の消耗が秋に出やすい理由`
      - `乾燥が始まる季節の身体の変化`
      - `新米、柿、かぼちゃ、芋類の活かし方`
      - `秋に甘いものが欲しくなる理由`
      - `発酵食品が秋に大切になる理由`
      - `冷えと乾燥に備える食べ方`
    - Image: `assets/wanpoint/05-inaho.svg`
  - Session 03:
    - Season/date label: `Session 03 ｜ 2026.10.20`
    - Number: `03`
    - Title:
      - `秋から冬へ`
      - `温める力と保存の知恵`
    - List:
      - `冬へ向かう身体の整え方`
      - `味噌、醤油、漬物のアーユルヴェーダ的解釈`
      - `米、塩、甘味料の選び方`
      - `冬至、大寒に向けた過ごし方`
      - `冬の冷えに備える食べ方`
    - Image: `assets/wanpoint/07-miso-bowl.svg`
- Gold line:
  - `◆ ◆ ◆`
- Closing text:
  - `各回約2時間。オンラインで開催します。`
  - `当日参加できない方には、アーカイブ動画をご用意します。`
  - `視聴期間の詳細は、お申込み前にご案内します。`
  - `講座はライブ形式のため、当日の質問も歓迎します。`

## Section 7 - Examples

- HTML element: `section`
- HTML ID: `section-examples`
- Internal class names:
  - `section-examples`
  - `examples-scatter`
  - `examples-scatter--1`
  - `examples-scatter--2`
  - `examples-scatter--3`
  - `examples-scatter--4`
  - `container--wide`
  - `section-kamon`
  - `section-label`
  - `section-title`
  - `examples-grid`
  - `example-card`
  - `example-card-q`
  - `example-card-a`
  - `examples-outro`
  - `examples-outro-text`
- Section label:
  - `Food Wisdom`
- Subheading / label:
  - `昔の人はなぜ、そう食べていたのか`
- Main heading:
  - `知ると、`
  - `いつもの食卓が違って見えてきます。`
- Intro text:
  - `冷奴に生姜。`
  - `胡瓜に薬味。`
  - `夏に梅干し。`
  - `冬に味噌汁。`
  - `当たり前だと思っていた食べ方には、`
  - `身体を整えるための理由があります。`
- Example Q&A cards:
  - Q: `なぜ胡瓜には薬味を添えるのでしょう？`
    - A: `講座では、この食べ合わせを季節・消化力・身体の状態から読み解きます。いつもの薬味が、少し違って見えてきます。`
  - Q: `なぜ冷奴には生姜を添えるのでしょう？`
    - A: `涼やかな食材に、なぜ香りや辛味を添えるのか。講座では、夏の定番料理に隠れた食べ合わせの意味を見ていきます。`
  - Q: `なぜスイカは単独で食べる方がよいのでしょう？`
    - A: `夏に身近な果物にも、食べるタイミングや組み合わせの考え方があります。講座では、消化の視点から読み解きます。`
  - Q: `なぜそうめんだけでは足りないのでしょう？`
    - A: `食べやすいはずのそうめんが、なぜ夏の疲れと関係するのか。講座では、夏バテと食べ方の意外な関係を扱います。`
  - Q: `なぜ夏に酸味を活用するのでしょう？`
    - A: `梅干し、酢、柑橘。夏の食卓に残る酸味の知恵を、季節と身体の両方から読み解きます。`
  - Q: `なぜトマトは食べすぎに注意なのでしょう？`
    - A: `身体に良いとされる食材も、季節や量で意味が変わります。講座では、夏野菜との付き合い方を具体的に考えます。`
- Outro:
  - `「なんとなく食べる」から、`
  - `「意味を知って選ぶ」へ。`
  - `その視点が身につくと、`
  - `スーパーに並ぶ食材も、`
  - `毎日の食卓も、少し違って見えてきます。`
- Images / decorative elements:
  - `assets/wanpoint/04-kyuri.svg`
  - `assets/wanpoint/02-shiso.svg`
  - `assets/wanpoint/01-umeboshi.svg`
  - `assets/wanpoint/03-myoga.svg`

## Section 8 - Instructor Profiles

- HTML element: `section`
- HTML ID: `section-instructor`
- Internal class names:
  - `section-instructor`
  - `container`
  - `section-kamon`
  - `section-title`
  - `instructor-block`
  - `instructor-photo`
  - `instructor-photo-frame`
  - `instructor-photo-placeholder`
  - `instructor-photo-label`
  - `instructor-info`
  - `instructor-tag`
  - `instructor-name-en`
  - `instructor-name-jp`
  - `instructor-desc`
  - `instructor-credentials`
  - `instructor-rare`
- Section label:
  - `About the Instructors`
- Main heading:
  - `インドの知恵と、`
  - `日本の台所をつなぐ二人。`
- Instructor 1:
  - Photo label: `Lead Instructor`
  - Tag: `アーユルヴェーダ医師 ｜ BAMS`
  - English name: `Siddhartha Satoru Murakoshi`
  - Japanese name: `村越 シッダールタ 悟`
  - Body text:
    - `アーユルヴェーダ医師（BAMS）。`
    - `インドで学び、日本で暮らし、日本人に教える。`
    - `インド国立アーユルヴェーダ大学でアーユルヴェーダ医学を学び、現在は日本を拠点に講演、教育、コンサルテーションを行っている。`
    - `二つの文化の間に立つからこそ見える視点から、日本の気候・食文化・生活習慣に合わせたアーユルヴェーダを伝えている。`
    - `本講座では、教科書の知識を覚えることよりも、`
    - `「日本でどう活かすか」を大切にします。`
    - `季節によってなぜ体調が変わるのか。`
    - `なぜ昔の日本人はその季節にその食材を食べていたのか。`
    - `それをアーユルヴェーダではどう理解できるのか。`
    - `四季と食を通して、自分の身体と自然とのつながりを見つめ直していきます。`
  - Image: `images/siddharth.jpg`
  - Image alt: `村越シッダールタ悟`
- Instructor 2:
  - Photo label: `暮らしの案内人`
  - Tag: `料理家｜viorto! 主宰`
  - English name: `YUKARI.`
  - Japanese name: `YUKARI.`
  - Credentials:
    - `東京都出身`
    - `香港キャセイパシフィック航空 客室乗務員として6年間香港在住`
    - `イタリア各地で家庭料理を学ぶ`
    - `2010年より料理家として活動`
    - `岡山市に料理教室「viorto!」を主宰`
    - `NHK岡山、FM岡山などメディア出演多数`
  - Highlight box:
    - `「五感で料理する」を大切にする料理家。`
    - `旬の食材、発酵食品、調味料、日本の家庭料理に深い関心を持ち、レシピに頼りすぎず、食材と向き合う料理のあり方を伝えている。`
  - Body text:
    - `本講座では、アーユルヴェーダの理論を、日々の台所でどう活かすかを担当。特別な料理ではなく、毎日の食卓の中で無理なく続けられる知恵をお届けします。`
  - Links:
    - `📷 @viorto`
    - `🌿 viorto.com`
  - Image: `https://viorto.com/wp-content/uploads/2024/05/about_prof3.jpg`
  - Image alt: `YUKARI.（viorto! 主宰）プロフィール写真`

## Section 9 - Instructor Roles

- HTML element: `section`
- HTML ID: none
- Inline section style:
  - `background-color:#faf7f2;padding:80px 0 0;`
- Internal class names:
  - `container`
  - `text-center`
  - `section-label`
  - `section-title`
  - `instructor-roles`
  - `instructor-role-col`
  - `instructor-role-label`
  - `instructor-role-axis`
  - `instructor-role-list`
- Section label:
  - `ふたりの役割`
- Main heading:
  - `理論と実践が、`
  - `ひとつの食卓で出会います。`
- Intro text:
  - `村越シッダールタ悟は、身体と季節の関係をアーユルヴェーダの視点から読み解きます。`
  - `YUKARI. は、それを日本の台所でどう活かすかを伝えます。`
  - `医学と料理。インドと日本。理論と暮らし。`
  - `その二つが交わることで、知識が日常の食卓に根づいていきます。`
- Role column 1:
  - Label: `Lead Instructor`
  - Axis:
    - `村越シッダールタ悟`
    - `身体と季節の「なぜ」を読み解く`
  - List:
    - `アーユルヴェーダから季節と身体を解説`
    - `消化力、食材の性質、季節変化の関係`
    - `インドの医学知識を日本の暮らしに翻訳`
    - `食材の組み合わせや食べ方の考え方`
- Role column 2:
  - Label: `Co-Instructor`
  - Axis:
    - `YUKARI.`
    - `日本の台所で実践に落とし込む`
  - List:
    - `旬の食材、調味料、発酵食品の実践知`
    - `家庭で無理なく続けられる食べ方`
    - `五感を使って食材と向き合う料理`
    - `先人の知恵を日常に取り入れる工夫`

## Section 10 - Testimonials / Voice

- HTML element: `section`
- HTML ID: `section-voice`
- Internal class names:
  - `section-voice`
  - `container`
  - `section-kamon`
  - `section-label`
  - `section-title`
  - `voice-grid`
  - `voice-card`
  - `voice-card-text`
  - `voice-card-meta`
  - `voice-note`
- Section label:
  - `Voices`
- Subheading / label:
  - `前回講座・Instagramライブに寄せられた声`
- Main heading:
  - `受け取った方からの、`
  - `うれしい言葉。`
- Testimonial cards:
  - Voice 01:
    - Text: `「日本の食材で説明してもらえて、アーユルヴェーダが初めて身近に感じられました。梅干しや薬味にこんな意味があったとは驚きでした。」`
    - Meta: `30代｜料理好き`
  - Voice 02:
    - Text: `「ただの健康情報ではなく、"なぜそうするのか"がわかるのが面白かったです。自分で考えて食事を選べる感覚がありました。」`
    - Meta: `40代｜会社員`
  - Voice 03:
    - Text: `「コーヒーのライブがとても良くて、日常の飲み物にもこんなに理由があるのかと思いました。もっと深く学びたいです。」`
    - Meta: `50代｜自然療法・ハーブに関心`
  - Voice 04:
    - Text: `「季節ごとの不調が、自分だけではないとわかって安心しました。梅雨の重だるさにも理由があったんですね。」`
    - Meta: `40代｜ヨガ・食養生に関心`
- Note:
  - `※ Instagramライブ・過去のセミナーに寄せられた感想をもとに掲載しています。`

## Section 11 - Fit Check

- HTML element: `section`
- HTML ID: `section-fitcheck`
- Internal class names:
  - `section-fitcheck`
  - `container`
  - `section-kamon`
  - `section-label`
  - `section-title`
  - `fitcheck-grid`
  - `fitcheck-col`
  - `fitcheck-col--yes`
  - `fitcheck-col--no`
  - `fitcheck-col-title`
  - `fitcheck-list`
- Section label:
  - `For You`
- Subheading / label:
  - `参加前にご確認ください`
- Main heading:
  - `この講座は、`
  - `こんな方におすすめです。`
- Yes column title:
  - `✦ こんな方に向いています`
- Yes list:
  - `季節ごとに体調が揺らぎやすい方`
  - `旬の食材をもっと深く知りたい方`
  - `日本の暮らしに合うアーユルヴェーダを学びたい方`
  - `レシピよりも、食の考え方を身につけたい方`
  - `発酵食品、薬味、梅干し、味噌などに興味がある方`
  - `自然療法や食養生を暮らしに取り入れたい方`
  - `自分の身体と丁寧に付き合っていきたい方`
- No column title:
  - `— 向いていない方`
- No list:
  - `即効性のある治療法を求める方`
  - `個別の診断や処方を期待する方`
  - `体質タイプだけを知りたい方`
  - `レシピだけが欲しい方`
  - `専門的な医学講座のみを求める方`
- Medical disclaimer:
  - `※ この講座は医療行為ではありません。`
  - `疾患の診断・治療・処方は行いません。`
  - `食と季節についての教育的な内容をお届けします。`

## Section 12 - Future / Outcomes

- HTML element: `section`
- HTML ID: `section-future`
- Internal class names:
  - `section-future`
  - `container`
  - `section-kamon`
  - `section-title`
  - `section-divider`
  - `future-grid`
  - `future-card`
  - `future-card-icon`
  - `future-card-title`
  - `future-card-desc`
- Section label:
  - `After the Course`
- Main heading:
  - `この講座を通じて、`
  - `日々の食卓が変わります。`
- Cards:
  - Card 01:
    - Icon: `🛒`
    - Title: `スーパーでの買い物が変わる`
    - Text: `旬の野菜を見たときに、今の季節と自分の身体を思い浮かべられるようになります。`
  - Card 02:
    - Icon: `🍽️`
    - Title: `毎日の食事に意味が生まれる`
    - Text: `「なんとなく食べる」から、「今の身体に合うものを選ぶ」へ変わっていきます。`
  - Card 03:
    - Icon: `🌿`
    - Title: `季節の不調との向き合い方が変わる`
    - Text: `梅雨の重だるさ、夏の疲れ、秋の乾燥、冬の冷え。理由を知ることで、できることが見えてきます。`
  - Card 04:
    - Icon: `📚`
    - Title: `健康情報に振り回されにくくなる`
    - Text: `「これが身体に良い」という情報を、季節・体質・食べ方の視点から考えられるようになります。`
  - Card 05:
    - Icon: `🫖`
    - Title: `日本の食文化がもっと好きになる`
    - Text: `味噌、醤油、梅干し、日本茶、薬味。先人の知恵の深さに気づくと、食卓が豊かに見えてきます。`
  - Card 06:
    - Icon: `🌸`
    - Title: `一年を通じた養生の軸ができる`
    - Text: `春夏秋冬、それぞれの季節にどう食べ、どう過ごすか。自分の中に、暮らしの軸が生まれます。`

## Section 13 - Schedule

- HTML element: `section`
- HTML ID: `section-schedule`
- Internal class names:
  - `section-schedule`
  - `container`
  - `section-kamon`
  - `section-title`
  - `section-divider`
  - `schedule-list`
  - `schedule-item`
  - `schedule-deco`
  - `schedule-num`
  - `schedule-info`
  - `schedule-date`
  - `schedule-season`
  - `schedule-detail`
  - `schedule-badge`
- Section label:
  - `Schedule`
- Main heading:
  - `講座スケジュール`
- Schedule rows:
  - Session 01:
    - Number block: `Session` / `01`
    - Date: `2026年 7月7日（火）`
    - Title: `梅雨から夏へ　湿気と暑さを味方にする食養生`
    - Detail: `開催時間：19:00〜21:00　オンライン開催｜アーカイブあり`
    - Badges:
      - `オンライン`
      - `アーカイブあり`
    - Image: `assets/arrangements/season-1-tsuyu-natsu.svg`
  - Session 02:
    - Number block: `Session` / `02`
    - Date: `2026年 8月25日（火）`
    - Title: `夏から秋へ　夏の疲れを秋に残さない食養生`
    - Detail: `開催時間：決定次第ご案内します　オンライン開催｜アーカイブあり`
    - Badges:
      - `オンライン`
      - `アーカイブあり`
    - Image: `assets/arrangements/season-2-natsu-aki.svg`
  - Session 03:
    - Number block: `Session` / `03`
    - Date: `2026年 10月20日（火）`
    - Title: `秋から冬へ　温める力と保存の知恵`
    - Detail: `開催時間：決定次第ご案内します　オンライン開催｜アーカイブあり`
    - Badges:
      - `オンライン`
      - `アーカイブあり`
    - Image: `assets/arrangements/season-3-aki-fuyu.svg`
- Notes:
  - `◆ 各回約2時間を予定しています。`
  - `◆ アーカイブ動画をご用意します。視聴期間の詳細は、お申込み前にご案内します。`
  - `◆ 3回を通じて学ぶことで、季節の流れがより深く理解できます。`
  - `◆ 第1回は 19:00〜21:00 に開催します。第2回・第3回の開催時間は、決定次第ご案内します。`

## Section 14 - Pricing

- HTML element: `section`
- HTML ID: `section-pricing`
- Internal class names:
  - `section-pricing`
  - `container`
  - `section-kamon`
  - `section-title`
  - `pricing-grid`
  - `pricing-card`
  - `pricing-card--recommended`
  - `pricing-recommend-badge`
  - `pricing-card-label`
  - `pricing-card-name`
  - `pricing-card-price`
  - `pricing-price-amount`
  - `pricing-price-tax`
  - `pricing-price-per`
  - `pricing-features`
  - `pricing-total-value`
  - `pricing-total-value-label`
  - `pricing-total-value-num`
  - `btn-pricing`
  - `btn-pricing--secondary`
  - `btn-pricing--primary`
  - `pricing-note`
- Section label:
  - `Pricing`
- Main heading:
  - `受講プラン`
- Intro text:
  - `この講座は、3回を通じて一年の季節の流れを学ぶ設計です。`
  - `深く学びたい方には、全講座受講コースをおすすめします。`
- Pricing card 1:
  - Label: `Single Session`
  - Title:
    - `単発受講`
    - `気になる回から参加したい方へ`
  - Price:
    - `¥38,000`
    - `（税込）`
    - `1回あたり`
  - Features:
    - `選んだ1回分の講座（約2時間）`
    - `アーカイブ動画の視聴（詳細はお申込み前にご案内します）`
    - `ライブ当日のチャット質問`
  - Button:
    - `1回から参加する`
- Pricing card 2:
  - Recommend badge: `✦ 深く学びたい方へ ✦`
  - Label: `Recommended`
  - Title:
    - `全講座受講コース`
    - `3回講座＋特典6講座つき`
  - Price:
    - `¥114,000`
    - `（税込）`
    - `講座3回＋特典合計 ¥150,000相当`
  - Features:
    - `全3回の講座（各約2時間 × 3回）`
    - `全3回のアーカイブ動画（詳細はお申込み前にご案内します）`
    - `ライブ当日のチャット質問（全3回）`
    - `アーユルヴェーダ基礎講座（録画＋PDF）｜通常11,000円`
    - `日本茶と季節の講座 ｜通常5,000円`
    - `醤油・味噌と発酵の講座 ｜通常5,000円`
    - `塩の選び方と使い方講座 ｜通常5,000円`
    - `米と消化力の講座 ｜通常5,000円`
    - `甘味料の選び方講座 ｜通常5,000円`
  - Total value block:
    - `特典6講座の合計価値`
    - `¥36,000以上`
    - `が含まれます`
  - Button:
    - `全講座で学ぶ →`
- Pricing note:
  - `※ 価格はすべて税込です。`
  - `※ お申込み後のキャンセル・返金は原則として承っておりません。お申込み前に内容を十分ご確認のうえお申込みください。`
  - `※ お申込みは、YUKARI.（viorto!）のSTORES商品ページに移動して行います。`

## Section 15 - Bonus

- HTML element: `section`
- HTML ID: `section-bonus`
- Internal class names:
  - `section-bonus`
  - `container`
  - `section-kamon`
  - `section-title`
  - `section-divider`
  - `bonus-intro`
  - `bonus-intro-text`
  - `bonus-intro-value`
  - `bonus-list`
  - `bonus-item`
  - `bonus-deco`
  - `bonus-item-num`
  - `bonus-item-title`
  - `bonus-item-price`
  - `bonus-item-desc`
  - `bonus-total`
  - `bonus-total-label`
  - `bonus-total-num`
  - `bonus-total-text`
- Section label:
  - `Package Bonus`
- Main heading:
  - `全講座受講コース限定特典`
  - `3回まとめてお申込みいただいた方へ、学びを深める6つの特典講座をお届けします。`
- Intro:
  - `季節の食養生をより深く理解するために、`
  - `土台となる知識を特典講座としてご用意しました。`
  - `特典合計価値 ¥36,000以上`
  - `（全講座受講コースの方に特典としてお届けします）`
- Bonus cards:
  - Bonus 01:
    - Number: `Bonus 01`
    - Title:
      - `🌿 アーユルヴェーダ基礎講座`
      - `（録画動画 ＋ PDF教材）`
    - Price: `通常価格` / `¥11,000` / `特典としてお届け`
    - Description: `体質、消化力、食材の性質など、本講座をより深く理解するための基礎をわかりやすく解説します。`
    - Image: `assets/wanpoint/19-aoba-leaves.svg`
  - Bonus 02:
    - Number: `Bonus 02`
    - Title: `🍵 日本茶と季節の講座`
    - Price: `通常価格` / `¥5,000` / `特典としてお届け`
    - Description: `緑茶、ほうじ茶、抹茶など、日本茶の性質と季節に合わせた飲み方を学びます。`
    - Image: `assets/wanpoint/06-cha-leaf.svg`
  - Bonus 03:
    - Number: `Bonus 03`
    - Title: `🫙 醤油・味噌と発酵の講座`
    - Price: `通常価格` / `¥5,000` / `特典としてお届け`
    - Description: `日本の食卓の要である醤油と味噌を、発酵と養生の視点から読み解きます。`
    - Image: `assets/wanpoint/07-miso-bowl.svg`
  - Bonus 04:
    - Number: `Bonus 04`
    - Title: `🧂 塩の選び方と使い方講座`
    - Price: `通常価格` / `¥5,000` / `特典としてお届け`
    - Description: `料理の土台となる塩。種類、選び方、使い方、身体への影響を学びます。`
    - Image: `assets/wanpoint/08-shio-salt.svg`
  - Bonus 05:
    - Number: `Bonus 05`
    - Title: `🌾 米と消化力の講座`
    - Price: `通常価格` / `¥5,000` / `特典としてお届け`
    - Description: `白米、玄米、もち米など、日本人の主食である米を季節と消化力の視点から考えます。`
    - Image: `assets/wanpoint/09-rice-grains.svg`
  - Bonus 06:
    - Number: `Bonus 06`
    - Title: `🍯 甘味料の選び方講座`
    - Price: `通常価格` / `¥5,000` / `特典としてお届け`
    - Description: `砂糖、はちみつ、黒糖、みりんなど、甘味料の違いと身体への影響を学びます。`
    - Image: `assets/wanpoint/10-nanten.svg`
- Total value block:
  - `Package Total Value`
  - `¥150,000以上相当`
  - `本講座3回 114,000円`
  - `＋ 特典講座 36,000円以上`
  - `全講座受講コースは ¥114,000（税込）でご参加いただけます。`

## Section 16 - FAQ

- HTML element: `section`
- HTML ID: `section-faq`
- Internal class names:
  - `section-faq`
  - `container`
  - `section-kamon`
  - `section-title`
  - `section-divider`
  - `faq-list`
  - `faq-item`
  - `faq-question`
  - `faq-q-text`
  - `faq-icon`
  - `faq-answer`
  - `faq-a-inner`
- Section label:
  - `FAQ`
- Main heading:
  - `よくあるご質問`
- FAQ items:
  - FAQ 1:
    - Q: `アーユルヴェーダをまったく知らなくても参加できますか？`
    - A: `はい、問題ありません。専門用語はできるだけわかりやすく説明します。全講座受講コースの方には、事前に学べる「アーユルヴェーダ基礎講座」も特典としてお届けします。`
  - FAQ 2:
    - Q: `当日参加できない回があっても大丈夫ですか？`
    - A: `はい。各回アーカイブ動画をご用意しますので、ご都合に合わせてご視聴いただけます。視聴期間の詳細は、お申込み前にご案内します。`
  - FAQ 3:
    - Q: `単発で1回だけ受講することはできますか？`
    - A: `はい、可能です。ただし、3回を通じて季節の流れを学ぶ設計のため、全講座受講コースをおすすめしています。`
  - FAQ 4:
    - Q: `レシピは教えてもらえますか？`
    - A: `具体的な食材や食べ方の例は豊富に取り上げます。ただし、この講座の中心はレシピを覚えることではなく、「なぜその食べ方が身体に合うのか」を学ぶことです。`
  - FAQ 5:
    - Q: `アーユルヴェーダをすでに学んでいても楽しめますか？`
    - A: `はい。日本の気候、二十四節気、日本の食材にアーユルヴェーダを応用する視点は、経験者の方にも新しい発見がある内容です。`
  - FAQ 6:
    - Q: `特典の講座はいつ受け取れますか？`
    - A: `全講座受講コースの方へ、順次ご案内いたします。詳細なお届け時期は、お申込み前にご確認いただけるようご案内します。`
  - FAQ 7:
    - Q: `お申込みはどこで行いますか？`
    - A: `お申込みは、YUKARI.（viorto!）のSTORES商品ページに移動して行います。お支払い方法やお手続きの詳細は、STORESの商品ページでご確認ください。`

## Section 17 - Final CTA

- HTML element: `section`
- HTML ID: `section-cta`
- Internal class names:
  - `section-cta`
  - `container`
  - `section-kamon`
  - `cta-title`
  - `cta-subtitle`
  - `cta-price-display`
  - `cta-price-label`
  - `cta-price-num`
  - `cta-price-tax`
  - `cta-value-note`
  - `cta-btn-group`
  - `btn-cta-main`
  - `btn-cta-single`
  - `cta-guarantee`
- Section label:
  - `Join Us`
- Main heading:
  - `季節を知ることは、`
  - `自分の身体を知ること。`
- Subtitle:
  - `村越シッダールタ悟 × YUKARI.`
  - `2026年7月・8月・10月｜オンライン開催`
- Price block:
  - `全講座受講コース`
  - `¥114,000`
  - `税込｜全3回＋特典6講座つき`
  - `特典講座 36,000円以上相当が含まれます`
  - `アーユルヴェーダ基礎・日本茶・醤油味噌・塩・米・甘味料`
- CTA buttons:
  - `全講座で学ぶ（¥114,000）`
  - `1回から参加する（¥38,000）`
- STORES transition note:
  - `お申込みは、YUKARI.（viorto!）のSTORES商品ページに移動して行います。`
- Guarantee line:
  - `オンライン開催｜アーカイブ付き｜全講座受講コースは特典6講座つき`
- Message label:
  - `Message`
- Closing quote:
  - `日本の季節は、`
  - `春夏秋冬だけではありません。`
  - `約15日ごとに移り変わる二十四節気のリズムの中で、`
  - `私たちの身体も少しずつ変化しています。`
  - `日本の食卓に息づく知恵を、`
  - `アーユルヴェーダの視点で一緒に読み解いていきましょう。`
  - `— 村越シッダールタ悟 ＆ YUKARI.`

## Section 18 - Footer

- HTML element: `footer`
- HTML ID: none
- Internal class names:
  - `site-footer`
  - `footer-logo`
  - `footer-en`
  - `footer-divider`
  - `footer-copy`
- Visible text:
  - `季節のことわり`
  - `Ayurveda for Japanese Seasons`
  - Footer nav:
    - `この講座について`
    - `講座内容`
    - `講師紹介`
    - `料金`
    - `よくある質問`
  - Copyright:
    - `© 2026 村越シッダールタ悟 ＆ YUKARI.（viorto!） ｜ All Rights Reserved.`

## Section 19 - Mobile Sticky CTA

- HTML element: `div`
- HTML ID: `sticky-cta`
- Internal class names:
  - `sticky-cta`
  - `sticky-cta-text`
  - `sticky-cta-price`
  - `sticky-cta-btn`
- Visible text:
  - `全講座受講コース`
  - `¥114,000（税込）`
  - Button: `全講座で学ぶ`

---

# PART 2 - BUTTON INVENTORY

| Button | Exact text | href destination | Section location | Visual style class | Button color | Text color | Hover behavior |
|---|---|---|---|---|---|---|---|
| Header CTA | `講座の詳細を見る` | `#section-pricing` | Header | `header-cta` | transparent, border `rgba(107,127,73,0.55)` | `#6b7f49` | background `#6b7f49`, text `#fbf8f3` |
| Hero primary | `全講座で学ぶ` | `#section-cta` | Hero | `btn-primary` | linear gradient `#b8975a` to `#d4b07a` | `#1a1612` | translateY(-2px), stronger shadow |
| Hero secondary | `講座内容を見る` | `#section-learn` | Hero | `btn-secondary` | transparent, border `rgba(60,51,40,0.28)` | `#4a3728` | background `rgba(60,51,40,0.06)`, darker border |
| YUKARI Instagram | `📷 @viorto` | `https://www.instagram.com/viorto/` | Instructor profile | inline style only | transparent, border `#e8e2d8` | `#746656` | inline JS changes border/text to `#b8975a` |
| YUKARI website | `🌿 viorto.com` | `https://viorto.com/` | Instructor profile | inline style only | transparent, border `#e8e2d8` | `#746656` | inline JS changes border/text to `#b8975a` |
| Pricing single | `1回から参加する` | `#section-cta` | Pricing | `btn-pricing btn-pricing--secondary` | transparent, border `rgba(60,51,40,0.28)` | `#4a3728` | background `rgba(60,51,40,0.06)`, border `rgba(60,51,40,0.48)` |
| Pricing package | `全講座で学ぶ →` | `#section-cta` | Pricing | `btn-pricing btn-pricing--primary` | linear gradient `#b8975a` to `#d4b07a` | `#1a1612` | translateY(-2px), stronger shadow |
| FAQ question rows | FAQ question text | no href | FAQ | `faq-question` | row background `#f5f0e8` | `#2c2418` | hover background `#ede8df` |
| Final package | `全講座で学ぶ（¥114,000）` | JS `PACKAGE_URL`: `https://viorto.shop/items/6a2bd3f1ea71f300c11b0b59` | Final CTA | `btn-cta-main` | linear gradient `#b8975a` / `#d4b07a` / `#b8975a` | `#1a1612` | background-position shift, translateY(-3px), stronger shadow |
| Final single | `1回から参加する（¥38,000）` | JS `SINGLE_URL`: `https://viorto.shop/items/6a2bd33c1c72b400460c4ab0` | Final CTA | `btn-cta-single` | transparent, border `rgba(60,51,40,0.28)` | `#5c4f3f` | darker border and text `#3d3328` |
| Footer nav 1 | `この講座について` | `#section-sympathy` | Footer | inline style only | transparent | `rgba(240,224,192,0.4)` | inline JS changes text to `var(--color-gold-light)` |
| Footer nav 2 | `講座内容` | `#section-learn` | Footer | inline style only | transparent | `rgba(240,224,192,0.4)` | inline JS changes text to `var(--color-gold-light)` |
| Footer nav 3 | `講師紹介` | `#section-instructor` | Footer | inline style only | transparent | `rgba(240,224,192,0.4)` | inline JS changes text to `var(--color-gold-light)` |
| Footer nav 4 | `料金` | `#section-pricing` | Footer | inline style only | transparent | `rgba(240,224,192,0.4)` | inline JS changes text to `var(--color-gold-light)` |
| Footer nav 5 | `よくある質問` | `#section-faq` | Footer | inline style only | transparent | `rgba(240,224,192,0.4)` | inline JS changes text to `var(--color-gold-light)` |
| Sticky CTA | `全講座で学ぶ` | `#section-cta` | Mobile sticky CTA | `sticky-cta-btn` | linear gradient `#b8975a` to `#d4b07a` | `#2c2418` | no explicit hover rule |

---

# PART 3 - FAQ INVENTORY

FAQ container:

- Section ID: `section-faq`
- List class: `faq-list`
- Item class: `faq-item`
- Question class: `faq-question`
- Question text class: `faq-q-text`
- Icon class: `faq-icon`
- Answer wrapper class: `faq-answer`
- Answer inner class: `faq-a-inner`

Accordion behavior:

- All FAQ answers start closed.
- `.faq-answer` has `max-height: 0; overflow: hidden; transition: max-height 0.5s ease;`.
- Clicking a `.faq-question` toggles the corresponding `.faq-item`.
- Pressing `Enter` or `Space` on `.faq-question` toggles the corresponding item.
- Opening one FAQ closes any other open FAQ.
- Open item gets class `.open`.
- `aria-expanded` changes between `false` and `true`.
- Open state sets answer max-height to `.faq-a-inner.offsetHeight + 'px'`.
- Open state changes icon background/border to `#6b7f49`; plus sign becomes minus via scale.

FAQ items:

| # | Question | Answer |
|---|---|---|
| 1 | `アーユルヴェーダをまったく知らなくても参加できますか？` | `はい、問題ありません。専門用語はできるだけわかりやすく説明します。全講座受講コースの方には、事前に学べる「アーユルヴェーダ基礎講座」も特典としてお届けします。` |
| 2 | `当日参加できない回があっても大丈夫ですか？` | `はい。各回アーカイブ動画をご用意しますので、ご都合に合わせてご視聴いただけます。視聴期間の詳細は、お申込み前にご案内します。` |
| 3 | `単発で1回だけ受講することはできますか？` | `はい、可能です。ただし、3回を通じて季節の流れを学ぶ設計のため、全講座受講コースをおすすめしています。` |
| 4 | `レシピは教えてもらえますか？` | `具体的な食材や食べ方の例は豊富に取り上げます。ただし、この講座の中心はレシピを覚えることではなく、「なぜその食べ方が身体に合うのか」を学ぶことです。` |
| 5 | `アーユルヴェーダをすでに学んでいても楽しめますか？` | `はい。日本の気候、二十四節気、日本の食材にアーユルヴェーダを応用する視点は、経験者の方にも新しい発見がある内容です。` |
| 6 | `特典の講座はいつ受け取れますか？` | `全講座受講コースの方へ、順次ご案内いたします。詳細なお届け時期は、お申込み前にご確認いただけるようご案内します。` |
| 7 | `お申込みはどこで行いますか？` | `お申込みは、YUKARI.（viorto!）のSTORES商品ページに移動して行います。お支払い方法やお手続きの詳細は、STORESの商品ページでご確認ください。` |

---

# PART 4 - VISUAL DESIGN INVENTORY

## Global Design Tokens

Fonts:

- `--font-serif`: `'Noto Serif JP', 'Georgia', 'Times New Roman', serif`
- `--font-sans`: `'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Meiryo', sans-serif`
- `--font-roman`: `'Cormorant Garamond', 'Georgia', serif`

Root font size:

- `html { font-size: 18px; }`

Global body:

- Font family: `Noto Serif JP`
- Text color: `#2c2418`
- Background: `#faf7f2`
- Line height: `2.1`

Color variables:

- `--color-deep`: `#1a1612`
- `--color-ink`: `#2c2418`
- `--color-earth`: `#4a3728`
- `--color-wood`: `#6b5240`
- `--color-gold`: `#b8975a`
- `--color-gold-light`: `#d4b07a`
- `--color-gold-pale`: `#f0e0c0`
- `--color-sage`: `#7a8c6e`
- `--color-cream`: `#faf7f2`
- `--color-warm-white`: `#f5f0e8`
- `--color-paper`: `#ede8df`
- `--color-mist`: `#e8e2d8`
- `--color-text`: `#2c2418`
- `--color-text-light`: `#5c4f3f`
- `--color-text-muted`: `#746656`
- `--color-accent`: `#8b5e3c`
- `--color-matcha`: `#6b7f49`
- `--color-wakakusa`: `#8aab4e`
- `--color-ai`: `#2d4a6b`
- `--color-ume`: `#b55d7a`
- `--color-kaki`: `#c85e2a`
- `--color-washi`: `#f7f3ed`

Shared section typography:

- `.section-kamon span`:
  - Font: Cormorant Garamond
  - Size: `0.8rem` = 14.4px
  - Letter spacing: `0.35em`
  - Color: `#6b7f49`
  - Text transform: uppercase
- `.section-label`:
  - Font: Cormorant Garamond
  - Size: `0.8rem` = 14.4px
  - Letter spacing: `0.5em`
  - Color: `#6b7f49`
  - Text transform: uppercase
- `.section-title`:
  - Font: Noto Serif JP
  - Size: `clamp(1.5rem, 3.2vw, 2.2rem)` = min 27px / max 39.6px
  - Weight: 400
  - Line height: 1.75
  - Letter spacing: `0.04em`
  - Color: `#3d3328`
- `.section-lead`:
  - Font: Noto Sans JP
  - Size: `0.93rem` = 16.74px
  - Weight: 300
  - Line height: 2.2
  - Color: `#5c4f3f`

Container spacing:

- `.container`: max-width 860px, padding `0 32px`
- `.container--wide`: max-width 1100px, padding `0 32px`
- Mobile container padding under 600px: `0 18px`

## Section-Level Visual Inventory

| Section | Background color | Section padding | Dominant text color | Accent / border | Heading typography | Body typography |
|---|---|---|---|---|---|---|
| Header | `rgba(251,248,243,0.92)` | `18px 40px`; scrolled `12px 40px` | `#3d3328` | border-bottom `rgba(0,0,0,0.08)` | logo `0.78rem`, weight 300, spacing `0.18em` | header CTA `0.73rem`, spacing `0.14em` |
| Hero | `#fbf8f3` | content `130px 32px 160px` | `#3d3328`, `#5c4f3f` | gold/matcha accents | title `clamp(1.7rem,4.5vw,3rem)`, weight 300, lh 1.65 | subtitle `clamp(1rem,2vw,1.12rem)`, Sans, weight 300, lh 2.5 |
| Sympathy | `#f5f0e8` | `96px 0` | `#2c2418`, `#5c4f3f` | `#8aab4e`, `#e8e2d8` | shared `.section-title` | intro `clamp(1.1rem,2.2vw,1.5rem)`, close `clamp(1.05rem,2vw,1.22rem)` |
| Problem | `#faf7f2` | `96px 0` | `#2c2418`, `#5c4f3f` | `#8b5e3c`, `rgba(184,151,90,0.18)` | `.problem-heading` `clamp(1.7rem,3.8vw,2.7rem)`, lh 1.75 | card text `1.02rem`, lh 2.3 |
| Why | `#f5f0e8` | `96px 0` | `#2c2418`, `#5c4f3f` | `#8aab4e`, `#8b5e3c` | shared `.section-title`; keywords `clamp(1.5rem,3vw,2.1rem)` | `.why-body` `clamp(1rem,2vw,1.2rem)`, lh 2.5 |
| Nijuushi | `#faf7f2` | `96px 0` | `#2c2418`, `#5c4f3f` | `#8aab4e`, `#f0e0c0` | shared `.section-title` | `.nijuushi-desc` `1.05rem`, lh 2.5 |
| Learn | `#ede8df` | `96px 0` | `#2c2418`, `#5c4f3f` | `#8aab4e`, `#e8e2d8` | shared `.section-title`; card title `1.08rem` | list `1rem`, lh 2.2 |
| Examples | `#f5f0e8` | `96px 0` | `#2c2418`, `#5c4f3f` | `rgba(184,151,90,0.18)` | shared `.section-title`; Q `1.05rem` | answer `1rem`, lh 2.4 |
| Instructor | `#faf7f2` | `96px 0` | `#2c2418`, `#5c4f3f` | `#8aab4e`, `#e8e2d8` | name `clamp(1.6rem,2.8vw,2.2rem)` | desc `1.05rem`, lh 2.5 |
| Instructor Roles | inline `#faf7f2` | inline `80px 0 0` | `#2c2418`, `#5c4f3f` | `rgba(107,127,73,0.12)` | shared `.section-title`; axis `1.05rem` | list `0.82rem`, lh 1.9 |
| Voice | `#faf7f2` | `96px 0` | `#4a3728` | `rgba(184,151,90,0.14)` | shared `.section-title` | card text `0.9rem`, lh 2.1 |
| Fit Check | `#ede8df` | `96px 0` | `#2c2418`, `#5c4f3f` | top borders `#6b7f49`, `#c8bfb4` | shared `.section-title`; col title `1rem` | list `0.84rem`, lh 1.85 |
| Future | `#ede8df` | `96px 0` | `#2c2418`, `#746656` | `#e8e2d8`, `#f0e0c0` | shared `.section-title`; card title `1.05rem` | card desc `0.97rem`, lh 2.3 |
| Schedule | `#f5f0e8` | `96px 0` | `#2c2418`, `#746656` | row left bar `#e8e2d8`, hover `#6b7f49` | shared `.section-title`; season `clamp(1.05rem,2vw,1.3rem)` | detail `0.97rem` |
| Pricing | `#efe7da` | `96px 0` | `#3d3328`, `#5c4f3f` | `#b8975a`, `rgba(0,0,0,0.07)` | shared `.section-title`; price `clamp(2.2rem,4.5vw,3.2rem)` | features `1rem`, lh 2.3 |
| Bonus | `#f5f0e8` | `96px 0` | `#2c2418`, `#746656` | `#b8975a`, `#e8e2d8` | shared `.section-title`; bonus title `1.08rem` | desc `0.97rem`, lh 2.3 |
| FAQ | `#faf7f2` | `96px 0` | `#2c2418`, `#5c4f3f` | `#6b7f49`, `#e8e2d8` | shared `.section-title`; question `1.07rem` | answer `1.05rem`, lh 2.5 |
| Final CTA | `#f6f0e7` | `100px 0` | `#3d3328`, `#5c4f3f` | `#b8975a`, `#6b7f49` | `.cta-title` `clamp(1.5rem,3.8vw,2.5rem)`, lh 1.85 | subtitle `1.02rem`, lh 2.4 |
| Footer | `#2c2418` | `56px 40px` | gold muted tones | `rgba(184,151,90,0.1)` | logo `0.97rem`, spacing `0.28em` | copy `0.7rem` |
| Sticky CTA | `rgba(251,248,243,0.97)` | `12px 18px` | `#5c4f3f`, `#b8975a` | border-top `rgba(184,151,90,0.22)` | n/a | text `0.82rem`, price `0.98rem`, button `0.92rem` |

## Opacity Inventory

- Hero photo image: opacity `0.13`
- Inline hero SVG decorative lines: opacity `0.06`
- Hero watercolor: `calc(.5 * var(--wc-mult))`; mobile `calc(.32 * var(--wc-mult))`
- Hero rings:
  - `hero-deco--circle1` border `rgba(60,51,40,0.07)`
  - `hero-deco--circle2` border `rgba(60,51,40,0.04)`
- Fade-in elements start opacity `0`, visible opacity `1`
- Schedule deco: `calc(.14 * var(--wc-mult))`; mobile `calc(.1 * var(--wc-mult))`
- Examples scatter: `calc(.12 * var(--wc-mult))`
- Bonus deco: `calc(1 * var(--wc-mult))`
- Why decos:
  - `why-deco--1`: `calc(.09 * var(--wc-mult))`
  - `why-deco--2`: `calc(.08 * var(--wc-mult))`
  - `why-deco--3`: `calc(.1 * var(--wc-mult))`
- Sympathy deco: `calc(.1 * var(--wc-mult))`

---

# PART 5 - READABILITY MAP

Notes:

- Root `1rem = 18px`.
- For clamp values, this map records CSS expression and min/max pixel equivalents.
- Contrast relationship is recorded as foreground/background color pairing only.

| Text element group | Font size | Color | Background | Contrast relationship |
|---|---:|---|---|---|
| Body text default | 18px | `#2c2418` | `#faf7f2` | dark brown on cream |
| Section labels / kamon | 14.4px | `#6b7f49` | section background | green on cream/paper/warm white |
| Shared section headings | `clamp(27px, 3.2vw, 39.6px)` | `#3d3328` | section background | dark brown on light warm background |
| Hero eyebrow | 15.48px | `#6b7f49` | `#fbf8f3` | green on hero cream |
| Hero h1 | `clamp(30.6px, 4.5vw, 54px)` | `#3d3328` | `#fbf8f3` | dark brown on hero cream |
| Hero subtitle | `clamp(18px, 2vw, 20.16px)` | `#5c4f3f` | `#fbf8f3` | medium brown on hero cream |
| Hero badges | 15.3px | `#6b7f49` | `rgba(107,127,73,0.06)` over `#fbf8f3` | green on pale green/cream |
| Sympathy intro | `clamp(19.8px, 2.2vw, 27px)` | `#2c2418` | `#f5f0e8` | dark brown on warm white |
| Sympathy checklist | 19.44px | `#5c4f3f` | `#f5f0e8` | medium brown on warm white |
| Sympathy quote | `clamp(18.9px, 2vw, 21.96px)` | `#2c2418` | `#ede8df` | dark brown on paper |
| Problem heading | `clamp(30.6px, 3.8vw, 48.6px)` | `#2c2418`; em `#8b5e3c` | `#faf7f2` | dark/accent brown on cream |
| Problem subtext | 18.36px | `#746656` | `#faf7f2` | muted brown on cream |
| Problem cards | 18.36px | `#5c4f3f` | `#fff` | medium brown on white |
| Problem answer Q | `clamp(17.1px, 1.8vw, 20.7px)` | `#8b5e3c` | `#f0ebe2` | accent brown on pale paper |
| Problem answer A | `clamp(19.8px, 2.5vw, 31.5px)` | `#2c2418` | `#f0ebe2` | dark brown on pale paper |
| Why keywords | `clamp(27px, 3vw, 37.8px)` | `#2c2418` | `#f5f0e8` | dark brown on warm white |
| Why body | `clamp(18px, 2vw, 21.6px)` | `#5c4f3f` | `#f5f0e8` | medium brown on warm white |
| Why examples | `clamp(18.9px, 2vw, 22.5px)` | `#2c2418` | `#ede8df` | dark brown on paper |
| Why conclusion | `clamp(18px, 2.2vw, 25.2px)` | `#2c2418`; em `#8b5e3c` | `#ede8df` | dark/accent brown on paper |
| Nijuushi desc | 18.9px | `#5c4f3f` | `#faf7f2` | medium brown on cream |
| Nijuushi quote | 19.8px | `#2c2418` | `#ede8df` | dark brown on paper |
| Learn lead | 16.74px | `#5c4f3f` | `#ede8df` | medium brown on paper |
| Learn card title | 19.44px | `#2c2418` | `#f5f0e8` | dark brown on warm white |
| Learn card list | 18px | `#5c4f3f` | `#f5f0e8` | medium brown on warm white |
| Examples intro inline text | `clamp(15.12px, 1.5vw, 17.28px)` | `#6b5240` | `#f5f0e8` | wood brown on warm white |
| Example card Q | 18.9px | `#6b5240` | `#fff` | wood brown on white |
| Example card A | 18px | `#5c4f3f` | `#fff` | medium brown on white |
| Examples outro | `clamp(18px, 2.2vw, 25.2px)` | `#2c2418` | `#ede8df` | dark brown on paper |
| Instructor tag | 12.6px | `#6b7f49` | `#faf7f2` | green on cream |
| Instructor names JP | `clamp(28.8px, 2.8vw, 39.6px)` | `#2c2418` | `#faf7f2` | dark brown on cream |
| Instructor credentials | 18.36px | `#5c4f3f` | `#faf7f2` | medium brown on cream |
| Instructor desc | 18.9px | `#5c4f3f` | `#faf7f2` | medium brown on cream |
| Instructor role list | 14.76px | `#5c4f3f` | `#fff` | medium brown on white |
| Voice card text | 16.2px | `#4a3728` | `#fff` | earth brown on white |
| Voice meta | 12.96px | `#6b7f49` | `#fff` | green on white |
| Fitcheck list | 15.12px | `#5c4f3f` | `#fff` | medium brown on white |
| Future card title | 18.9px | `#2c2418` | `#f5f0e8` | dark brown on warm white |
| Future card desc | 17.46px | `#746656` | `#f5f0e8` | muted brown on warm white |
| Schedule date | 16.56px | `#6b7f49` | `#ede8df` | green on paper |
| Schedule title | `clamp(18.9px, 2vw, 23.4px)` | `#2c2418` | `#ede8df` | dark brown on paper |
| Schedule detail | 17.46px | `#746656` | `#ede8df` | muted brown on paper |
| Pricing intro inline text | 15.84px | `#5c4f3f` | `#efe7da` | medium brown on muted pricing background |
| Pricing price | `clamp(39.6px, 4.5vw, 57.6px)` | `#3d3328` | `#fbf8f3` or pale green | dark brown on light card |
| Pricing features | 18px | `#5c4f3f` | card background | medium brown on light card |
| Pricing note | 17.1px | `#746656` | `#efe7da` | muted brown on muted pricing background |
| Bonus intro | `clamp(18.9px, 2vw, 23.4px)` | `#2c2418` | `#ede8df` | dark brown on paper |
| Bonus item title | 19.44px | `#2c2418` | `#f5f0e8` | dark brown on warm white |
| Bonus item desc | 17.46px | `#746656` | `#f5f0e8` | muted brown on warm white |
| FAQ question | 19.26px | `#2c2418` | `#f5f0e8` | dark brown on warm white |
| FAQ answer | 18.9px | `#5c4f3f` | `#f5f0e8` | medium brown on warm white |
| CTA title | `clamp(27px, 3.8vw, 45px)` | `#3d3328`; em `#6b7f49` | `#f6f0e7` | dark brown/green on CTA cream |
| CTA subtitle | 18.36px | `#5c4f3f` | `#f6f0e7` | medium brown on CTA cream |
| CTA price | `clamp(43.2px, 5.5vw, 68.4px)` | `#3d3328` | `#f6f0e7` | dark brown on CTA cream |
| CTA value note | 17.46px | `#746656` | `#f6f0e7` | muted brown on CTA cream |
| Footer logo | 17.46px | `#d4b07a` | `#2c2418` | gold on dark brown |
| Footer copy | 12.6px | `rgba(240,224,192,0.28)` | `#2c2418` | pale gold translucent on dark brown |
| Sticky CTA text | 14.76px | `#5c4f3f` | `rgba(251,248,243,0.97)` | medium brown on translucent cream |
| Sticky CTA button | 16.56px | `#2c2418` | gold gradient | dark brown on gold |

---

# PART 6 - IMAGE INVENTORY

## Local Raster Images

| File | Location | Intrinsic dimensions | Display size / CSS | Section | Alt text |
|---|---|---:|---|---|---|
| `hero.jpg` | `images/hero.jpg` | 1600 x 900 | inline style: absolute full section, width 100%, height 100%, object-fit cover, opacity 0.13 | Hero | empty `alt=""`, `aria-hidden="true"` |
| `siddharth.jpg` | `images/siddharth.jpg` | 719 x 860 | inside `.instructor-photo-frame` aspect ratio 3/4; image width/height 100%, object-fit cover | Instructor profile | `村越シッダールタ悟` |

## External Raster Images

| File / URL | Location | Intrinsic dimensions | Display size / CSS | Section | Alt text |
|---|---|---:|---|---|---|
| `https://viorto.com/wp-content/uploads/2024/05/about_prof3.jpg` | external URL | not measured locally | inside `.instructor-photo-frame` aspect ratio 3/4; image width/height 100%, object-fit cover; `loading="lazy"` | Instructor profile | `YUKARI.（viorto! 主宰）プロフィール写真` |

## Arrangement SVGs

| File | Location | Display size / CSS | Section | Alt text |
|---|---|---|---|---|
| `hero-main.svg` | `assets/arrangements/hero-main.svg` | `.hero-watercolor`: width `min(1200px,96%)`, top 96px, centered; mobile width 150%, top 80px | Hero | empty `alt=""`, `aria-hidden="true"` |
| `season-1-tsuyu-natsu.svg` | `assets/arrangements/season-1-tsuyu-natsu.svg` | `.schedule-deco`: width 42%, max-width 480px; mobile width 80%, right -6% | Schedule row 1 | empty `alt=""`, `aria-hidden="true"` |
| `season-2-natsu-aki.svg` | `assets/arrangements/season-2-natsu-aki.svg` | `.schedule-deco`: width 42%, max-width 480px; mobile width 80%, right -6% | Schedule row 2 | empty `alt=""`, `aria-hidden="true"` |
| `season-3-aki-fuyu.svg` | `assets/arrangements/season-3-aki-fuyu.svg` | `.schedule-deco`: width 42%, max-width 480px; mobile width 80%, right -6% | Schedule row 3 | empty `alt=""`, `aria-hidden="true"` |

## Wanpoint SVGs

| File | Location | Display size / CSS | Section(s) used | Alt text |
|---|---|---|---|---|
| `01-umeboshi.svg` | `assets/wanpoint/01-umeboshi.svg` | Why deco width 130px; examples scatter absolute | Why, Examples | empty `alt=""`, `aria-hidden="true"` |
| `02-shiso.svg` | `assets/wanpoint/02-shiso.svg` | Why deco width 110px; examples scatter absolute | Why, Examples | empty `alt=""`, `aria-hidden="true"` |
| `03-myoga.svg` | `assets/wanpoint/03-myoga.svg` | examples scatter absolute | Examples | empty `alt=""`, `aria-hidden="true"` |
| `04-kyuri.svg` | `assets/wanpoint/04-kyuri.svg` | learn-card deco width 42%; examples scatter absolute | Learn card 1, Examples | empty `alt=""`, `aria-hidden="true"` |
| `05-inaho.svg` | `assets/wanpoint/05-inaho.svg` | Why deco width 140px; learn-card deco width 42% | Why, Learn card 2 | empty `alt=""`, `aria-hidden="true"` |
| `06-cha-leaf.svg` | `assets/wanpoint/06-cha-leaf.svg` | bonus-deco visible icon | Bonus 02 | empty `alt=""`, `aria-hidden="true"` |
| `07-miso-bowl.svg` | `assets/wanpoint/07-miso-bowl.svg` | learn-card deco width 42%; bonus-deco visible icon | Learn card 3, Bonus 03 | empty `alt=""`, `aria-hidden="true"` |
| `08-shio-salt.svg` | `assets/wanpoint/08-shio-salt.svg` | bonus-deco visible icon | Bonus 04 | empty `alt=""`, `aria-hidden="true"` |
| `09-rice-grains.svg` | `assets/wanpoint/09-rice-grains.svg` | bonus-deco visible icon | Bonus 05 | empty `alt=""`, `aria-hidden="true"` |
| `10-nanten.svg` | `assets/wanpoint/10-nanten.svg` | bonus-deco visible icon | Bonus 06 | empty `alt=""`, `aria-hidden="true"` |
| `11-raindrops.svg` | `assets/wanpoint/11-raindrops.svg` | asset present; not referenced in current `index.html` | unused current HTML | n/a |
| `12-susuki.svg` | `assets/wanpoint/12-susuki.svg` | asset present; not referenced in current `index.html` | unused current HTML | n/a |
| `13-tomato.svg` | `assets/wanpoint/13-tomato.svg` | asset present; not referenced in current `index.html` | unused current HTML | n/a |
| `14-nasu-eggplant.svg` | `assets/wanpoint/14-nasu-eggplant.svg` | asset present; not referenced in current `index.html` | unused current HTML | n/a |
| `15-goya.svg` | `assets/wanpoint/15-goya.svg` | asset present; not referenced in current `index.html` | unused current HTML | n/a |
| `16-shoyu.svg` | `assets/wanpoint/16-shoyu.svg` | asset present; not referenced in current `index.html` | unused current HTML | n/a |
| `17-daikon.svg` | `assets/wanpoint/17-daikon.svg` | asset present; not referenced in current `index.html` | unused current HTML | n/a |
| `18-carrot.svg` | `assets/wanpoint/18-carrot.svg` | asset present; not referenced in current `index.html` | unused current HTML | n/a |
| `19-aoba-leaves.svg` | `assets/wanpoint/19-aoba-leaves.svg` | sympathy deco width 150px; bonus-deco visible icon | Sympathy, Bonus 01 | empty `alt=""`, `aria-hidden="true"` |

## Inline / Generated Visuals

- Hero inline SVG:
  - Three curved paths
  - Two circles
  - Stroke `#3d3328`
  - Overall opacity `0.06`
- Hero particles:
  - Generated by `initHeroParticles()`
  - Count: 12 desktop, 6 mobile
  - Small gold circles with random opacity between about 0.05 and 0.35
- Nijuushi CSS visual:
  - Rotating circular frame
  - Inner dashed ring
  - Four season dots
- FAQ icon:
  - CSS plus/minus circle
- Future card icons:
  - emoji: `🛒`, `🍽️`, `🌿`, `📚`, `🫖`, `🌸`

---

# PART 7 - RESPONSIVE INVENTORY

## Under 960px

Defined in `@media (max-width: 960px)`:

- `.nijuushi-intro`: changes to single column.
- `.nijuushi-visual`: hidden with `display: none`.
- `.instructor-block`: changes to single column.
- `.instructor-photo-frame`: max-width 220px and centered.
- `.pricing-grid`: changes to single column.
- `.why-grid`: changes to single column. This class is legacy/not used in current main Why section.
- `.learn-grid`: changes to single column.
- `.examples-grid`: changes to two columns.
- `.future-grid`: changes to two columns.
- `.bonus-list`: changes to two columns.
- `.problem-cards`: changes to single column.

## Under 768px

Defined in `@media (max-width: 768px)`:

- `.sticky-cta`: display flex.
- `.not-recipe-grid`: single column. Legacy class not used in current HTML.
- `.ingredients-grid`: two columns. Legacy class not used in current HTML.
- `.instructor-roles`: single column.
- `.voice-grid`: single column.
- `.fitcheck-grid`: single column.

Defined in `watercolor-deco.css`:

- `.hero-watercolor`: width 150%, opacity `calc(.32 * var(--wc-mult))`, top 80px.
- `.schedule-deco`: width 80%, opacity `calc(.1 * var(--wc-mult))`, right -6%.
- `.examples-scatter`: hidden with `display:none`.
- `.why-deco`: hidden with `display:none`.
- `.sympathy-deco`: hidden with `display:none`.

Sticky CTA JS behavior:

- If viewport width is greater than 768px: sticky CTA hidden and `aria-hidden="true"`.
- If viewport width is 768px or less:
  - Shows when hero bottom is above viewport and final CTA section is not yet visible.
  - Hides while hero is still visible.
  - Hides when final CTA is in view.

## Under 600px

Defined in `@media (max-width: 600px)`:

- `.container`, `.container--wide`: padding changes to `0 18px`.
- `.site-header`: padding changes to `13px 18px`.
- `.site-header.scrolled`: padding changes to `9px 18px`.
- `.hero-content`: padding changes to `110px 18px 70px`.
- `section`: padding changes to `64px 0`.
- Explicit section padding set to `64px 0` for:
  - `.section-sympathy`
  - `.section-problem`
  - `.section-why`
  - `.section-nijuushi`
  - `.section-learn`
  - `.section-examples`
  - `.section-instructor`
  - `.section-future`
  - `.section-schedule`
  - `.section-pricing`
  - `.section-bonus`
  - `.section-faq`
  - `.section-cta`
- `.why-col`, `.pricing-card`: padding `32px 24px`.
- `.problem-card`: padding `28px 22px`.
- `.bonus-item`: padding `26px 22px`.
- `.examples-grid`: single column.
- `.future-grid`: single column.
- `.bonus-list`: single column.
- `.schedule-item`: single column, gap 10px, padding `26px 22px 26px 26px`.
- `.schedule-num`: hidden.
- `.schedule-badge`: row direction, wraps.
- `.btn-cta-main`: padding `18px 36px`, font-size `1.05rem`.
- `.faq-question`: padding `20px 22px`.
- `.faq-a-inner`: padding `0 22px 22px`.
- `.pricing-recommend-badge`: font-size `0.75rem`, padding `5px 16px`.

Defined in `watercolor-deco.css`:

- `.bonus-deco`: width 76px, margin-bottom 14px.

## Reduced Motion

Defined in `@media (prefers-reduced-motion: reduce)`:

- All animations and transitions set to `0.01ms`.

Additional JS reduced-motion handling:

- `.hero-deco--circle1`, `.hero-deco--circle2`: animation set to none.
- `.nijuushi-circle`: animation set to none.

---

# PART 8 - CTA FLOW MAP

## Internal CTA Paths

- Header CTA:
  - `講座の詳細を見る`
  - `#section-cta`
- Hero primary CTA:
  - `全講座で学ぶ`
  - `#section-cta`
- Hero secondary CTA:
  - `講座内容を見る`
  - `#section-learn`
- Pricing single CTA:
  - `1回から参加する`
  - `#section-cta`
- Pricing package CTA:
  - `全講座で学ぶ →`
  - `#section-cta`
- Sticky mobile CTA:
  - `全講座で学ぶ`
  - `#section-cta`
- Footer nav:
  - `この講座について` -> `#section-sympathy`
  - `講座内容` -> `#section-learn`
  - `講師紹介` -> `#section-instructor`
  - `料金` -> `#section-pricing`
  - `よくある質問` -> `#section-faq`

## Final CTA Paths

- Final package CTA:
  - Text: `全講座で学ぶ（¥114,000）`
  - HTML href: `#`
  - JS target: `PACKAGE_URL`
  - Current `PACKAGE_URL`: `https://viorto.shop/items/6a2bd3f1ea71f300c11b0b59`
  - JS sets `target="_blank"`
  - JS sets `rel="noopener noreferrer"`
- Final single CTA:
  - Text: `1回から参加する（¥38,000）`
  - HTML href: `#`
  - JS target: `SINGLE_URL`
  - Current `SINGLE_URL`: `https://viorto.shop/items/6a2bd33c1c72b400460c4ab0`
  - JS sets `target="_blank"`
  - JS sets `rel="noopener noreferrer"`

## External Link Paths

- YUKARI Instagram:
  - Text: `📷 @viorto`
  - URL: `https://www.instagram.com/viorto/`
  - `target="_blank"`
  - `rel="noopener noreferrer"`
- viorto website:
  - Text: `🌿 viorto.com`
  - URL: `https://viorto.com/`
  - `target="_blank"`
  - `rel="noopener noreferrer"`

## Smooth Scroll Behavior

- JS selector: `a[href^="#"]`
- If href is `#`, no smooth-scroll action is applied.
- If target exists, click default is prevented.
- Scroll target y position subtracts header height and 20px.
- Scroll behavior: smooth.

---

# PART 9 - SEARCH INDEX

## Headings

- `アーユルヴェーダを、日本の暮らしへ。`
- `季節が変わるたびに、身体も少しずつ変わります。`
- `35歳を過ぎた頃から、季節の変化が身体に出やすくなることがあります。`
- `季節とともに暮らす知恵は、今も食卓の中に残っています。`
- `二十四節気は、季節を細やかに感じるための地図です。`
- `季節の移り変わりに合わせて、身体と食を学びます。`
- `知ると、いつもの食卓が違って見えてきます。`
- `インドの知恵と、日本の台所をつなぐ二人。`
- `理論と実践が、ひとつの食卓で出会います。`
- `受け取った方からの、うれしい言葉。`
- `この講座は、こんな方におすすめです。`
- `この講座を通じて、日々の食卓が変わります。`
- `講座スケジュール`
- `受講プラン`
- `全講座受講コース限定特典`
- `よくあるご質問`
- `季節を知ることは、自分の身体を知ること。`

## Subheadings / Labels

- `Ayurveda for Japanese Seasons`
- `Seasonal Feeling`
- `The Real Question`
- `Japan × Ayurveda`
- `Seasonal Map`
- `What You'll Learn`
- `3回シリーズの構成`
- `Food Wisdom`
- `昔の人はなぜ、そう食べていたのか`
- `About the Instructors`
- `ふたりの役割`
- `Voices`
- `前回講座・Instagramライブに寄せられた声`
- `For You`
- `参加前にご確認ください`
- `After the Course`
- `Schedule`
- `Pricing`
- `Package Bonus`
- `FAQ`
- `Join Us`
- `Message`

## FAQ Questions

- `アーユルヴェーダをまったく知らなくても参加できますか？`
- `当日参加できない回があっても大丈夫ですか？`
- `単発で1回だけ受講することはできますか？`
- `レシピは教えてもらえますか？`
- `アーユルヴェーダをすでに学んでいても楽しめますか？`
- `特典の講座はいつ受け取れますか？`
- `お申込みはどこで行いますか？`

## CTA Labels

- `講座の詳細を見る`
- `全講座で学ぶ`
- `講座内容を見る`
- `1回から参加する`
- `全講座で学ぶ →`
- `全講座で学ぶ（¥114,000）`
- `1回から参加する（¥38,000）`

## Pricing Titles

- `単発受講`
- `気になる回から参加したい方へ`
- `全講座受講コース`
- `3回講座＋特典6講座つき`
- `Single Session`
- `Recommended`

## Testimonial Names / Metas

- `30代｜料理好き`
- `40代｜会社員`
- `50代｜自然療法・ハーブに関心`
- `40代｜ヨガ・食養生に関心`

## Instructor Names

- `村越 シッダールタ 悟`
- `Siddhartha Satoru Murakoshi`
- `YUKARI.`
- `YUKARI.`

---

# PART 10 - VISUAL ANCHOR MAP

| Section # | Section Name | HTML ID | Main Heading | Primary CTA | Dominant Color | Heading Font Size | Body Font Size |
|---:|---|---|---|---|---|---|---|
| 0 | Header | `site-header` | `日本の四季と食から学ぶアーユルヴェーダ` | `講座の詳細を見る` | `rgba(251,248,243,0.92)` | logo `clamp(10.88px,1.2vw,12.48px)` | CTA 13.14px |
| 1 | Hero | `hero` | `アーユルヴェーダを、日本の暮らしへ。` | `全講座で学ぶ` | `#fbf8f3` | `clamp(30.6px,4.5vw,54px)` | `clamp(18px,2vw,20.16px)` |
| 2 | Sympathy | `section-sympathy` | `季節が変わるたびに、身体も少しずつ変わります。` | none | `#f5f0e8` | `clamp(27px,3.2vw,39.6px)` | intro `clamp(19.8px,2.2vw,27px)` |
| 3 | Problem | `section-problem` | `35歳を過ぎた頃から、季節の変化が身体に出やすくなることがあります。` | none | `#faf7f2` | `clamp(30.6px,3.8vw,48.6px)` | 18.36px |
| 4 | Why | `section-why` | `季節とともに暮らす知恵は、今も食卓の中に残っています。` | none | `#f5f0e8` | `clamp(27px,3.2vw,39.6px)` | `clamp(18px,2vw,21.6px)` |
| 5 | Nijuushi | `section-nijuushi` | `二十四節気は、季節を細やかに感じるための地図です。` | none | `#faf7f2` | `clamp(27px,3.2vw,39.6px)` | 18.9px |
| 6 | Learn | `section-learn` | `季節の移り変わりに合わせて、身体と食を学びます。` | none | `#ede8df` | `clamp(27px,3.2vw,39.6px)` | 16.74px |
| 7 | Examples | `section-examples` | `知ると、いつもの食卓が違って見えてきます。` | none | `#f5f0e8` | `clamp(27px,3.2vw,39.6px)` | card 18px |
| 8 | Instructor | `section-instructor` | `インドの知恵と、日本の台所をつなぐ二人。` | profile links only | `#faf7f2` | `clamp(27px,3.2vw,39.6px)` | 18.9px |
| 9 | Instructor Roles | none | `理論と実践が、ひとつの食卓で出会います。` | none | `#faf7f2` | `clamp(27px,3.2vw,39.6px)` | 14.76px list |
| 10 | Voice | `section-voice` | `受け取った方からの、うれしい言葉。` | none | `#faf7f2` | `clamp(27px,3.2vw,39.6px)` | 16.2px |
| 11 | Fit Check | `section-fitcheck` | `この講座は、こんな方におすすめです。` | none | `#ede8df` | `clamp(27px,3.2vw,39.6px)` | 15.12px |
| 12 | Future | `section-future` | `この講座を通じて、日々の食卓が変わります。` | none | `#ede8df` | `clamp(27px,3.2vw,39.6px)` | 17.46px |
| 13 | Schedule | `section-schedule` | `講座スケジュール` | none | `#f5f0e8` | `clamp(27px,3.2vw,39.6px)` | 17.46px |
| 14 | Pricing | `section-pricing` | `受講プラン` | `全講座で学ぶ →` | `#efe7da` | `clamp(27px,3.2vw,39.6px)` | 18px |
| 15 | Bonus | `section-bonus` | `全講座受講コース限定特典` | none | `#f5f0e8` | `clamp(27px,3.2vw,39.6px)` | 17.46px |
| 16 | FAQ | `section-faq` | `よくあるご質問` | FAQ rows | `#faf7f2` | `clamp(27px,3.2vw,39.6px)` | answer 18.9px |
| 17 | Final CTA | `section-cta` | `季節を知ることは、自分の身体を知ること。` | `全講座で学ぶ（¥114,000）` | `#f6f0e7` | `clamp(27px,3.8vw,45px)` | 18.36px |
| 18 | Footer | none | `季節のことわり` | footer nav links | `#2c2418` | 17.46px | 12.6px |
| 19 | Sticky CTA | `sticky-cta` | `全講座受講コース` | `全講座で学ぶ` | `rgba(251,248,243,0.97)` | n/a | 14.76px |
