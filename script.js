const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const success = form.querySelector('.form-success');
  success.textContent = 'Thanks — your enquiry is on its way. We’ll be in touch soon.';
  form.reset();
});

const languageToggle = document.querySelector('.language-toggle');
const translations = {
  en: {
    '.nav a:nth-child(1)': 'Our work', '.nav a:nth-child(2)': 'Services', '.nav a:nth-child(3)': 'About', '.nav-cta': 'Book a shoot <span>↗</span>',
    '.hero .eyebrow': '<span class="eyebrow-line"></span> Visuals for places worth staying', '.hero h1': 'Make your property <em>impossible</em> to scroll past.',
    '.hero-lede': 'We turn hotel spaces into stay-worthy stories — with cinematic drone films, high-end photography and 360° virtual tours that help guests book with confidence.', '.hero .button': 'Plan your shoot <span>↗</span>', '.hero .text-link': 'See selected work <span>↓</span>',
    '.trust-row p': 'Trusted to tell the story of', '.service-ticker>div': '<span>360° TOURS</span><b>✦</b><span>HOTEL PHOTOGRAPHY</span><b>✦</b><span>DRONE FILMS</span><b>✦</b><span>DIRECT BOOKINGS</span><b>✦</b><span>360° TOURS</span><b>✦</b><span>HOTEL PHOTOGRAPHY</span><b>✦</b>', '.work .eyebrow': '<span class="eyebrow-line"></span> Selected work', '.work h2': 'Spaces that feel like<br><em>somewhere else.</em>', '.section-intro>p:last-of-type': 'From the first impression to the final detail, we make every frame do more work for your brand.', '.work .section-cta .button': 'Get a project quote <span>↗</span>', '.work .section-cta .text-link': 'See a real 360 tour <span>↓</span>',
    '.services-heading .eyebrow': '<span class="eyebrow-line"></span> What we do', '.services-heading h2': 'Give guests a reason<br>to say <em>“let’s go.”</em>', '.services-cta span': 'Ready to make your property stand out?', '.services-cta a': 'Book a shoot <span>↗</span>',
    '.tour .eyebrow': '<span class="eyebrow-line"></span> Real project · Maxis Penthouse', '.tour h2': 'Step inside<br><em>before you arrive.</em>', '.tour-copy>p:not(.eyebrow)': 'One of the 360° room tours we built for a real hospitality space. Drag around and explore the room from every angle.', '.tour .button': 'Open full-screen tour <span>↗</span>',
    '.statement .eyebrow': '<span class="eyebrow-line"></span> Our point of view', '.statement blockquote': '“The best hotel marketing doesn’t just show a place. It lets you <em>feel</em> yourself there.”', '.signature': '— Neo Media studio', '.statement-cta': 'Let’s create something guests remember <span>↗</span>', '.contact .eyebrow': '<span class="eyebrow-line"></span> Start a conversation', '.contact h2': 'Have a place<br>in <em>mind?</em>', '.contact-note': 'Typically replies within 1 business day.', '.contact-form label:nth-child(1)': 'Your name <input name="name" type="text" placeholder="Alex Morgan" required>', '.contact-form label:nth-child(2)': 'Work email <input name="email" type="email" placeholder="alex@hotel.com" required>', '.contact-form label:nth-child(3)': 'What can we help with? <select name="service" required><option value="" disabled selected>Select a service</option><option>360° virtual tour</option><option>Hotel photography</option><option>Drone video & aerials</option><option>A combination</option></select>', '.contact-form label:nth-child(4)': 'Tell us about the project <textarea name="message" rows="4" placeholder="Property, location, timeline..."></textarea>', '.contact-form .button': 'Send enquiry <span>↗</span>', '.footer p': 'Visual stories for places worth staying.'
  },
  sl: {
    '.nav a:nth-child(1)': 'Naše delo', '.nav a:nth-child(2)': 'Storitve', '.nav a:nth-child(3)': 'O nas', '.nav-cta': 'Rezerviraj snemanje <span>↗</span>',
    '.hero .eyebrow': '<span class="eyebrow-line"></span> Vizualne zgodbe za posebne kraje', '.hero h1': 'Naj bo vaša nastanitev <em>nepozabna.</em>',
    '.hero-lede': 'Hotelske prostore spreminjamo v zgodbe, ki vabijo k bivanju — s filmskimi posnetki iz zraka, vrhunsko fotografijo in 360° virtualnimi ogledi.', '.hero .button': 'Načrtuj snemanje <span>↗</span>', '.hero .text-link': 'Oglej si naše delo <span>↓</span>',
    '.trust-row p': 'Zgodbe pripovedujemo za', '.service-ticker>div': '<span>360° OGLEDI</span><b>✦</b><span>HOTELSKA FOTOGRAFIJA</span><b>✦</b><span>VIDEO IZ ZRAKA</span><b>✦</b><span>VEČ REZERVACIJ</span><b>✦</b><span>360° OGLEDI</span><b>✦</b><span>HOTELSKA FOTOGRAFIJA</span><b>✦</b>', '.work .eyebrow': '<span class="eyebrow-line"></span> Izbrani projekti', '.work h2': 'Prostori, ki vas<br><em>odpeljejo drugam.</em>', '.section-intro>p:last-of-type': 'Od prvega vtisa do zadnje podrobnosti poskrbimo, da vsak kader dela za vašo blagovno znamko.', '.work .section-cta .button': 'Pridobi ponudbo <span>↗</span>', '.work .section-cta .text-link': 'Oglej si 360° ogled <span>↓</span>',
    '.services-heading .eyebrow': '<span class="eyebrow-line"></span> Kaj ponujamo', '.services-heading h2': 'Gostom dajmo razlog,<br>da rečejo <em>»gremo«.</em>', '.service:nth-child(1) p': 'Naj bodo sobe, apartmaji in skupni prostori dostopni bodočim gostom še pred prihodom. Gladki virtualni ogledi spremenijo radovednost v zaupanje.', '.service:nth-child(2) p': 'Vrhunske fotografije z občutkom za toplino, podrobnosti in vzdušje vašega objekta — pripravljene za vse prodajne kanale.', '.service:nth-child(3) p': 'Pokažite okolico, razsežnost in občutek kraja. Filmski posnetki iz zraka, ki vaši destinaciji dajo uvodni prizor, ki si ga zasluži.', '.services-cta span': 'Ste pripravljeni izstopati?', '.services-cta a': 'Rezerviraj snemanje <span>↗</span>',
    '.tour .eyebrow': '<span class="eyebrow-line"></span> Resnični projekt · Maxis Penthouse', '.tour h2': 'Vstopite v prostor<br><em>še pred prihodom.</em>', '.tour-copy>p:not(.eyebrow)': 'Eden od 360° virtualnih ogledov, ki smo ga ustvarili za pravi turistični objekt. Povlecite in raziščite prostor iz vsakega kota.', '.tour .button': 'Odpri celozaslonski ogled <span>↗</span>',
    '.statement .eyebrow': '<span class="eyebrow-line"></span> Naš pogled', '.statement blockquote': '»Najboljši hotelski marketing ne pokaže le prostora. Omogoči vam, da se tam <em>začutite.</em>«', '.signature': '— Studio Neo Media', '.statement-cta': 'Ustvarimo zgodbo, ki si jo gostje zapomnijo <span>↗</span>', '.contact .eyebrow': '<span class="eyebrow-line"></span> Začnimo pogovor', '.contact h2': 'Imate projekt<br><em>v mislih?</em>', '.contact-note': 'Običajno odgovorimo v enem delovnem dnevu.', '.contact-form label:nth-child(1)': 'Vaše ime <input name="name" type="text" placeholder="Ana Novak" required>', '.contact-form label:nth-child(2)': 'E-pošta <input name="email" type="email" placeholder="ana@hotel.si" required>', '.contact-form label:nth-child(3)': 'Kako vam lahko pomagamo? <select name="service" required><option value="" disabled selected>Izberite storitev</option><option>360° virtualni ogled</option><option>Hotelska fotografija</option><option>Video in posnetki iz zraka</option><option>Kombinacija storitev</option></select>', '.contact-form label:nth-child(4)': 'Povejte nam o projektu <textarea name="message" rows="4" placeholder="Objekt, lokacija, časovnica..."></textarea>', '.contact-form .button': 'Pošlji povpraševanje <span>↗</span>', '.footer p': 'Vizualne zgodbe za kraje, vredne obiska.'
  }
};
let currentLanguage = 'en';
function setLanguage(language) {
  currentLanguage = language;
  Object.entries(translations[language]).forEach(([selector, value]) => document.querySelectorAll(selector).forEach((element) => { element.innerHTML = value; }));
  languageToggle.textContent = language === 'en' ? 'SL' : 'EN';
  languageToggle.setAttribute('aria-label', language === 'en' ? 'Preklopi v slovenščino' : 'Switch to English');
  document.documentElement.lang = language === 'sl' ? 'sl' : 'en';
}
languageToggle?.addEventListener('click', () => setLanguage(currentLanguage === 'en' ? 'sl' : 'en'));

const revealItems = document.querySelectorAll('.section-intro, .services-heading, .service, .work-card, .tour-copy, .tour-frame, .statement-inner, .contact-copy, .contact-form');
revealItems.forEach((item, index) => { item.classList.add('reveal'); if (index % 3) item.classList.add(`reveal-delay-${index % 3}`); });
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, { threshold: 0.12 });
revealItems.forEach((item) => revealObserver.observe(item));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');
const lightboxCaption = lightbox?.querySelector('p');
const closeLightbox = () => { lightbox?.classList.remove('open'); lightbox?.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; };
document.querySelectorAll('.work-card').forEach((card) => card.addEventListener('click', () => {
  const image = card.querySelector('img');
  if (!image || !lightbox) return;
  lightboxImage.src = image.src; lightboxImage.alt = image.alt; lightboxCaption.textContent = card.querySelector('figcaption')?.textContent || '';
  lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
}));
lightbox?.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox(); });

