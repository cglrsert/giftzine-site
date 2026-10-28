// English / Turkish for the GiftZine site. Elements with data-t get their text from STRINGS; blocks with
// data-lang-block="en|tr" are shown for their language only. The choice follows ?lang=, then the visitor's
// last pick, then the browser language.
const STRINGS = {
  en: {
    nav_features: "Features", nav_support: "Support", nav_privacy: "Privacy", nav_contact: "Contact", nav_home: "Home",
    hero_kicker: "The gift they'll keep",
    hero_title: "Your photos,<br>made into a magazine",
    hero_lede: "Pick who it's for, add your photos and type their name. GiftZine designs a complete, personal magazine in seconds — cover, stories and a letter written for them.",
    cta_store: "View on the App Store", cta_price: "One purchase · Unlimited magazines · No subscription",
    stat_collections: "collections", stat_layouts: "page layouts", stat_modes: "story modes", stat_looks: "photo looks",
    sound_on: "Sound on", sound_off: "Sound off",
    wall_kicker: "75 collections", wall_title: "Every one completely different",
    wall_text: "Couture and film, tabloid and storybook, vintage, pop art and 24 designs for Christmas — each with its own typography, palette, covers and pages.",
    f1_t: "Made for the one you love", f1_p: "Partner, husband or wife, best friend, Mom, Dad, the whole family — or the dog. Over 3,500 original headlines, stories and letters, written for each relationship and occasion.",
    f2_t: "Every word is about them", f2_p: "Add a nickname, the traits that sound like them, a true fact or a memory. Your own words are printed exactly as you wrote them; nothing is invented.",
    f3_t: "15 story modes", f3_p: "Tell the same photos as love letters, a romantic novel, a fairytale, a film, a diary, a celebrity feature or a year in review.",
    f4_t: "34 photo looks", f4_p: "Golden Christmas, 35 mm, Polaroid, film noir, soft couture, pop art — for one photo or the whole magazine, always reversible.",
    f5_t: "Print-ready PDF", f5_p: "A 6 × 9 in PDF with vector type, every photo checked for 240 dpi. Print it, wrap it, give it.",
    f6_t: "Instagram carousel", f6_p: "Every page becomes a 4:5 slide in reading order, and Instagram opens on a new post with the cover chosen.",
    f7_t: "Buy once, unlimited magazines", f7_p: "One purchase includes every collection and feature. Make as many magazines as you like, for everyone you love.",
    f8_t: "Private by design", f8_p: "Everything happens on your iPhone. No account, no uploads, no ads, no tracking, no watermark.",
    shots_kicker: "Inside the app", shots_title: "Designed in seconds, yours to change",
    faq_title: "Questions",
    q1: "What do I need?", a1: "An iPhone with iOS 17 or later and 5 to 20 photos. Magazines are 8 to 20 pages.",
    q2: "Is there a subscription?", a2: "No. GiftZine is a single purchase with every collection and feature included, and you can make unlimited magazines.",
    q3: "Where do my photos go?", a3: "Nowhere. Photos are analyzed and stored on your iPhone and never uploaded. Nothing leaves the device unless you export it.",
    q4: "Can I print it?", a4: "Yes. Export a print-ready 6 × 9 in PDF and print it at home or with any print shop.",
    q5: "Which languages?", a5: "The app and every magazine are available in English and Turkish.",
    fine: "App Store is a service mark of Apple Inc. Instagram is a trademark of Instagram, LLC; GiftZine is not affiliated with Instagram.",
  },
  tr: {
    nav_features: "Özellikler", nav_support: "Destek", nav_privacy: "Gizlilik", nav_contact: "İletişim", nav_home: "Ana sayfa",
    hero_kicker: "Saklanacak bir hediye",
    hero_title: "Fotoğrafların<br>gerçek bir dergi oluyor",
    hero_lede: "Kime hazırladığını seç, fotoğraflarını ekle, adını yaz. GiftZine saniyeler içinde eksiksiz, kişiye özel bir dergi tasarlar: kapak, hikâyeler ve ona yazılmış bir mektup.",
    cta_store: "App Store’da gör", cta_price: "Tek satın alma · Sınırsız dergi · Abonelik yok",
    stat_collections: "koleksiyon", stat_layouts: "sayfa düzeni", stat_modes: "hikâye modu", stat_looks: "fotoğraf görünümü",
    sound_on: "Sesi aç", sound_off: "Sesi kapat",
    wall_kicker: "75 koleksiyon", wall_title: "Her biri bambaşka",
    wall_text: "Couture ve sinema, magazin ve masal kitabı, vintage, pop art ve 24 yılbaşı tasarımı — her biri kendi tipografisi, renkleri, kapakları ve sayfalarıyla.",
    f1_t: "Sevdiğin kişiye özel", f1_p: "Sevgilin, eşin, en yakın arkadaşın, annen, baban, tüm aile — ya da can dostun. Her ilişki ve özel gün için yazılmış 3.500’ü aşkın özgün başlık, hikâye ve mektup.",
    f2_t: "Her kelimesi onu anlatır", f2_p: "Bir lakap, ona benzeyen özellikler, gerçek bir bilgi ya da bir anı ekle. Yazdıkların tam olarak yazdığın gibi basılır; hiçbir şey uydurulmaz.",
    f3_t: "15 hikâye modu", f3_p: "Aynı fotoğrafları aşk mektupları, romantik roman, masal, film, günlük, ünlü portresi ya da yılın özeti olarak anlat.",
    f4_t: "34 fotoğraf görünümü", f4_p: "Altın Yılbaşı, 35 mm, Polaroid, film noir, yumuşak couture, pop art — tek fotoğrafa ya da tüm dergiye, istediğin an geri alınabilir.",
    f5_t: "Baskıya hazır PDF", f5_p: "Vektörel yazılı 6 × 9 inç PDF; her fotoğraf 240 dpi için kontrol edilir. Bastır, paketle, hediye et.",
    f6_t: "Instagram karuseli", f6_p: "Her sayfa okuma sırasıyla 4:5 slayt olur; Instagram kapak seçili yeni bir gönderiyle açılır.",
    f7_t: "Bir kez al, sınırsız dergi", f7_p: "Tek satın alma ile tüm koleksiyonlar ve özellikler senin. Sevdiğin herkes için dilediğin kadar dergi hazırla.",
    f8_t: "Gizlilik esaslı", f8_p: "Her şey iPhone’unda gerçekleşir. Hesap yok, yükleme yok, reklam yok, takip yok, filigran yok.",
    shots_kicker: "Uygulamanın içinden", shots_title: "Saniyeler içinde tasarlanır, istediğin gibi değişir",
    faq_title: "Sık sorulanlar",
    q1: "Neye ihtiyacım var?", a1: "iOS 17 ya da sonrası yüklü bir iPhone ve 5 ile 20 arası fotoğraf. Dergiler 8 ile 20 sayfa arasıdır.",
    q2: "Abonelik var mı?", a2: "Hayır. GiftZine tek seferlik bir satın almadır; tüm koleksiyonlar ve özellikler dahildir, sınırsız dergi hazırlayabilirsin.",
    q3: "Fotoğraflarım nereye gidiyor?", a3: "Hiçbir yere. Fotoğraflar iPhone’unda analiz edilir ve saklanır, asla yüklenmez. Sen dışa aktarmadıkça hiçbir şey cihazdan çıkmaz.",
    q4: "Bastırabilir miyim?", a4: "Evet. Baskıya hazır 6 × 9 inç PDF’i dışa aktar; evde ya da herhangi bir matbaada bastır.",
    q5: "Hangi diller var?", a5: "Uygulama ve tüm dergiler Türkçe ve İngilizce hazırlanabilir.",
    fine: "App Store, Apple Inc.’in hizmet markasıdır. Instagram, Instagram, LLC’nin ticari markasıdır; GiftZine Instagram ile bağlantılı değildir.",
  },
};

const GZ = {
  lang: "en",
  t(key) { return (STRINGS[this.lang] || STRINGS.en)[key] || STRINGS.en[key] || ""; },
  pick() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "tr" || q === "en") return q;
    try { const s = localStorage.getItem("gz-lang"); if (s === "tr" || s === "en") return s; } catch (e) {}
    return (navigator.language || "en").toLowerCase().startsWith("tr") ? "tr" : "en";
  },
  apply(lang, onChange) {
    this.lang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-t]").forEach(el => { const v = this.t(el.dataset.t); if (v) el.innerHTML = v; });
    document.querySelectorAll("[data-lang-block]").forEach(el => { el.hidden = el.dataset.langBlock !== lang; });
    document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
    const title = document.querySelector(`meta[name="title-${lang}"]`);
    if (title) document.title = title.content;
    try { localStorage.setItem("gz-lang", lang); } catch (e) {}
    if (onChange) onChange(lang);
  },
  init(onChange) {
    document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => this.apply(b.dataset.lang, onChange)));
    this.apply(this.pick(), onChange);
  },
};
