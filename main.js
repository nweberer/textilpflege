const app = document.getElementById('app');

const pages = {
  home: {
    title: 'Willkommen',
    content: `
      <div class="hero">
        <div class="hero-content">
          <img src="/ChatGPT Image 7. Okt. 2025, 11_36_09.png" alt="TEXTILPFLEGE GmbH AUERBACH" class="hero-logo" />
          <p>Ihr zuverlässiger Partner für textile Vollversorgung</p>
          <a href="#produkte" class="cta-button">Unsere Leistungen</a>
        </div>
      </div>
      <div class="container">
        <h2 class="section-title">Willkommen bei Textilpflege Auerbach</h2>
        <div class="content-section">
          <p>Die Textilpflege Auerbach ist tätig in der textilen Vollversorgung von Kliniken und Pflegeheimen. Mit langjähriger Erfahrung und modernster Technik garantieren wir höchste Qualität und Zuverlässigkeit.</p>
        </div>
        <div class="info-grid">
          <div class="info-card">
            <h3>Qualität</h3>
            <p>Höchste Standards in der Textilpflege und Hygiene</p>
          </div>
          <div class="info-card">
            <h3>Zuverlässigkeit</h3>
            <p>Pünktliche Lieferung und verlässlicher Service</p>
          </div>
          <div class="info-card">
            <h3>Erfahrung</h3>
            <p>Langjährige Expertise im Gesundheitswesen</p>
          </div>
        </div>
      </div>
    `
  },
  produkte: {
    title: 'Produkte',
    content: `
      <div class="container">
        <h2 class="section-title">Unsere Leistungen</h2>
        <div class="products-grid">
          <div class="product-card">
            <h3>Krankenhaus-Vollversorgung</h3>
            <p>Komplette textile Versorgung für Krankenhäuser und Kliniken. Von Bettwäsche über OP-Textilien bis hin zu Berufskleidung – wir bieten alles aus einer Hand.</p>
          </div>
          <div class="product-card">
            <h3>Alten- und Pflegeheim-Vollversorgung</h3>
            <p>Spezialisierte Textilversorgung für Alten- und Pflegeheime. Wir sorgen für hygienisch einwandfreie und komfortable Textilien für Ihre Bewohner.</p>
          </div>
          <div class="product-card">
            <h3>Mietberufskleidung</h3>
            <p>Professionelle Berufskleidung im Mietservice. Immer sauber, immer gepflegt, immer passend – für Ihr gesamtes Team.</p>
          </div>
          <div class="product-card">
            <h3>Lohnwäsche</h3>
            <p>Zuverlässiger Wäscheservice für Unternehmen und Einrichtungen. Wir waschen, pflegen und liefern Ihre Textilien termingerecht.</p>
          </div>
          <div class="product-card">
            <h3>Aufbereitung für Antithrombosestrümpfe</h3>
            <p>Fachgerechte Wiederaufbereitung von Antithrombosestrümpfen nach höchsten hygienischen Standards.</p>
          </div>
        </div>
      </div>
    `
  },
  unternehmen: {
    title: 'Unternehmen',
    content: `
      <div class="container">
        <h2 class="section-title">Über uns</h2>
        <div class="content-section">
          <h3>TEXTILPFLEGE GmbH AUERBACH</h3>
          <p>Die Textilpflege Auerbach ist ein etabliertes Unternehmen im Bereich der textilen Vollversorgung von Kliniken und Pflegeheimen. Mit modernster Technik und einem erfahrenen Team garantieren wir höchste Qualität und Zuverlässigkeit.</p>
          <p>Unser Unternehmen steht für professionelle Textildienstleistungen, die den hohen Anforderungen des Gesundheitswesens gerecht werden. Wir verstehen die besonderen Bedürfnisse unserer Kunden und bieten maßgeschneiderte Lösungen.</p>
        </div>
        <div class="info-grid">
          <div class="info-card">
            <h3>Unsere Mission</h3>
            <p>Höchste Qualität in der Textilpflege für das Gesundheitswesen</p>
          </div>
          <div class="info-card">
            <h3>Unsere Werte</h3>
            <p>Qualität, Zuverlässigkeit und Kundenzufriedenheit</p>
          </div>
          <div class="info-card">
            <h3>Unsere Stärke</h3>
            <p>Langjährige Erfahrung und modernste Technologie</p>
          </div>
        </div>
      </div>
    `
  },
  umwelt: {
    title: 'Umwelt',
    content: `
      <div class="container">
        <h2 class="section-title">Umwelt & Nachhaltigkeit</h2>
        <div class="content-section">
          <p>Umweltschutz und Nachhaltigkeit sind für uns nicht nur Schlagworte, sondern gelebte Praxis. Wir setzen auf moderne, umweltschonende Technologien und ressourcenschonende Verfahren.</p>
          <p>Bei der Textilpflege Auerbach achten wir auf einen verantwortungsvollen Umgang mit Wasser, Energie und Waschmitteln. Durch den Einsatz modernster Anlagen und optimierter Prozesse minimieren wir unseren ökologischen Fußabdruck.</p>
        </div>
        <div class="info-grid">
          <div class="info-card">
            <h3>Wassersparende Technologie</h3>
            <p>Moderne Waschmaschinen mit optimiertem Wasserverbrauch</p>
          </div>
          <div class="info-card">
            <h3>Energieeffizienz</h3>
            <p>Energiesparende Prozesse und Anlagen</p>
          </div>
          <div class="info-card">
            <h3>Umweltfreundliche Waschmittel</h3>
            <p>Einsatz biologisch abbaubarer Reinigungsmittel</p>
          </div>
        </div>
      </div>
    `
  },
  kontakt: {
    title: 'Kontakt',
    content: `
      <div class="container">
        <h2 class="section-title">Kontakt</h2>
        <div class="content-section">
          <p>Nehmen Sie Kontakt mit uns auf. Wir beraten Sie gerne und erstellen Ihnen ein individuelles Angebot.</p>
        </div>
        <div class="info-grid" style="margin-bottom: 3rem;">
          <div class="info-card">
            <h3>Adresse</h3>
            <p>TEXTILPFLEGE GmbH AUERBACH<br>
            Auerbach</p>
          </div>
          <div class="info-card">
            <h3>Telefon</h3>
            <p>Kontaktieren Sie uns telefonisch</p>
          </div>
          <div class="info-card">
            <h3>E-Mail</h3>
            <p>Schreiben Sie uns eine Nachricht</p>
          </div>
        </div>
        <form class="contact-form" id="contactForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">E-Mail</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="subject">Betreff</label>
            <input type="text" id="subject" name="subject" required>
          </div>
          <div class="form-group">
            <label for="message">Nachricht</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" class="submit-button">Nachricht senden</button>
        </form>
      </div>
    `
  }
};

function renderPage(pageKey) {
  const page = pages[pageKey];
  app.innerHTML = page.content;

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === pageKey) {
      link.classList.add('active');
    }
  });

  if (pageKey === 'kontakt') {
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.');
        form.reset();
      });
    }
  }

  window.scrollTo(0, 0);
}

function initApp() {
  const header = document.createElement('header');
  header.innerHTML = `
    <nav>
      <div class="logo" data-page="home">
        <img src="/ChatGPT Image 7. Okt. 2025, 11_36_09.png" alt="TEXTILPFLEGE AUERBACH" />
      </div>
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="nav-links">
        <li><a href="#produkte" data-page="produkte">Produkte</a></li>
        <li><a href="#unternehmen" data-page="unternehmen">Unternehmen</a></li>
        <li><a href="#umwelt" data-page="umwelt">Umwelt</a></li>
        <li><a href="#kontakt" data-page="kontakt">Kontakt</a></li>
      </ul>
    </nav>
  `;

  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>&copy; ${new Date().getFullYear()} TEXTILPFLEGE GmbH AUERBACH</p>
    <p>Alle Rechte vorbehalten</p>
  `;

  document.body.insertBefore(header, app);
  document.body.appendChild(footer);

  const logo = header.querySelector('.logo');
  logo.addEventListener('click', () => {
    renderPage('home');
    window.location.hash = '';
  });

  const hamburger = header.querySelector('.hamburger');
  const navLinks = header.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  header.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      renderPage(page);
      navLinks.classList.remove('active');
    });
  });

  const hash = window.location.hash.substring(1);
  if (hash && pages[hash]) {
    renderPage(hash);
  } else {
    renderPage('home');
  }

  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash.substring(1);
    if (newHash && pages[newHash]) {
      renderPage(newHash);
    }
  });
}

initApp();
