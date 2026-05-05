import './App.css'

const partners = [
  'SEPHORA',
  'france billet',
  'Etam',
  'fever',
  'ba&sh',
  'RITUALS',
]

const needs = [
  {
    title: 'Se retrouver',
    text: 'Reprendre confiance apres une periode difficile.',
  },
  {
    title: 'Sortir plus facilement',
    text: 'Trouver rapidement des activites et experiences adaptees.',
  },
  {
    title: 'Avancer a son rythme',
    text: 'Beneficier d’un parcours simple, et pense pour ce moment de vie.',
  },
]

const offers = [
  {
    title: 'Activites a la carte',
    text: 'pour reserver uniquement une activite, de facon flexible et rapide.',
    price: '40 EUR',
    unit: '/ les 2h',
    button: 'Decouvrir nos activites',
    bullets: ['Activites', 'Choix libre horaires'],
    image: '/images/prototype_demo.png',
  },
  {
    title: 'Pack tout compris',
    text: 'pour profiter d’une experience complete, avec plusieurs services regroupes.',
    price: '299 EUR',
    unit: '/ la journee',
    button: 'Decouvrir nos Packs',
    bullets: ['Activites', 'Soirees', 'Choix libre horaires', 'Priorites'],
    image: '/images/prototype_demo2.png',
    featured: true,
    badge: 'Le plus populaire',
  },
  {
    title: 'Soirees a la carte',
    text: 'pour choisir une soiree precise selon ses envies du moment.',
    price: '280 EUR',
    unit: '/ la soiree',
    button: 'Decouvrir nos soirees',
    bullets: ['Soirees', 'Choix libre horaires'],
    image: '/images/prototype_demo2.png',
  },
]

const testimonials = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur. Aliquam eget ac ac neque condimentum etiam. Scelerisque id in vulputate neque tincidunt sollicitudin mus.',
    author: 'Hugo',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur. Aliquam eget ac ac neque condimentum etiam. Scelerisque id in vulputate neque tincidunt sollicitudin mus.',
    author: 'Hugo',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur. Aliquam eget ac ac neque condimentum etiam. Scelerisque id in vulputate neque tincidunt sollicitudin mus.',
    author: 'Hugo',
  },
]

const steps = [
  {
    number: '1',
    title: 'Choisissez votre formule',
    text: 'Selectionnez une soiree a la carte, une activite a la carte ou un pack tout compris selon vos envies.',
  },
  {
    number: '2',
    title: 'Reservez en quelques clics',
    text: 'Consultez les details, ajoutez votre selection au panier et validez facilement votre reservation.',
  },
  {
    number: '3',
    title: 'Vivez l’experience',
    text: 'Profitez d’un moment pense pour vous faire du bien, sortir de la routine et avancer a votre rythme.',
  },
]

const features = [
  {
    title: 'Plus de liberte',
    text: 'Choisissez entre soiree a la carte, activite seule ou pack complet selon votre envie du moment.',
  },
  {
    title: 'Plus de simplicite',
    text: 'Consultez les offres, ajoutez au panier et reservez rapidement depuis une interface claire.',
  },
  {
    title: 'Plus de reassurance',
    text: 'Retrouvez toutes vos informations dans l’app, avec suivi, notifications et acces a votre compte.',
  },
]

function App() {
  return (
    <div className="page" id="top">
      <header className="topbar">
        <div className="brand">Dump Party</div>
        <nav className="topnav" aria-label="Navigation principale">
          <a href="#blog">Blog</a>
          <a href="#faq">FAQ</a>
          <span className="account-text">Deja un compte ?</span>
          <a className="nav-login" href="#signin">
            Se connecter
          </a>
          <button className="lang-button" type="button">
            FR
          </button>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Tourner la page, un moment a la fois.</h1>
              <p>
                Dump Party vous aide a retrouver du lien, reserver des activites
                et/ou soirees adaptees et vivre une experience pensee pour vous
                faire du bien.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#offers">
                  Decouvrir l&apos;app
                </a>
                <a className="button button-secondary" href="#offers">
                  Voir les packs
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-phone">
                <img
                  src="/images/prototype_demo2.png"
                  alt="Apercu mobile de l application Dump Party"
                />
              </div>
              <div className="store-badges">
                <a className="store-badge" href="#appstore">
                  <span>Telecharger dans</span>
                  <strong>l&apos;App Store</strong>
                </a>
                <a className="store-badge" href="#googleplay">
                  <span>Disponible sur</span>
                  <strong>Google Play</strong>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="partners-strip" aria-label="Marques partenaires">
          <div className="partners-track">
            {partners.map((partner) => (
              <span key={partner}>{partner}</span>
            ))}
          </div>
        </section>

        <section className="section" id="need">
          <div className="container">
            <div className="section-heading section-heading-left">
              <h2>Quand avancer seul devient plus difficile</h2>
              <p>
                Apres une rupture, il n’est pas toujours facile de retrouver un
                rythme, de sortir ou simplement de savoir par ou recommencer.
                Beaucoup de personnes ressentent le besoin de se changer les
                idees, de reprendre confiance et de vivre de nouvelles
                experiences positives, mais sans savoir vers qui se tourner ni
                comment s’organiser.
              </p>
            </div>

            <div className="need-grid">
              {needs.map((item) => (
                <article className="need-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="center-cta">
              <a className="button button-primary compact" href="#offers">
                Decouvrir l&apos;app
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="offers">
          <div className="container">
            <div className="section-heading section-heading-left">
              <h2>Trois facons de vivre l&apos;experience</h2>
              <p>
                Dump Party propose plusieurs facons d’avancer selon ses envies
                et son budget : choisir une soiree a la carte, opter pour un
                pack tout compris ou reserver seulement une activite.
                L’utilisateur garde ainsi la liberte de vivre l’experience a son
                rythme, avec une offre simple et claire.
              </p>
            </div>

            <div className="offers-grid">
              {offers.map((offer) => (
                <article
                  className={`offer-card${offer.featured ? ' featured' : ''}`}
                  key={offer.title}
                >
                  {offer.badge ? <div className="offer-badge">{offer.badge}</div> : null}

                  <div className="offer-image">
                    <img src={offer.image} alt="" />
                  </div>

                  <div className="offer-content">
                    <h3>{offer.title}</h3>
                    <p>{offer.text}</p>
                    <div className="offer-price">
                      <span>A partir de</span>
                      <div>
                        <strong>{offer.price}</strong>
                        <small>{offer.unit}</small>
                      </div>
                    </div>

                    <a className="offer-button" href="#newsletter">
                      {offer.button}
                    </a>

                    <ul className="offer-list">
                      {offer.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials-section" id="testimonials">
          <div className="container">
            <div className="section-heading section-heading-left">
              <h2>Ils ont fait leur Dump Party</h2>
            </div>

            <div className="testimonials-row">
              <button className="arrow-button" type="button" aria-label="Temoignage precedent">
                ‹
              </button>

              <div className="testimonials-grid">
                {testimonials.map((item, index) => (
                  <article className="testimonial-card" key={`${item.author}-${index}`}>
                    <div className="stars">★★★★★</div>
                    <p>{item.text}</p>
                    <strong>{item.author}</strong>
                  </article>
                ))}
              </div>

              <button className="arrow-button" type="button" aria-label="Temoignage suivant">
                ›
              </button>
            </div>
          </div>
        </section>

        <section className="how-section" id="how">
          <div className="container">
            <div className="section-heading section-heading-left light-heading">
              <h2>Comment ca marche ?</h2>
            </div>

            <div className="how-grid">
              {steps.map((step, index) => (
                <article className="how-card" key={step.number}>
                  <div className="how-topline">
                    <span className="how-number">{step.number}</span>
                    {index < steps.length - 1 ? <span className="how-line" /> : null}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section features-section" id="features">
          <div className="container">
            <div className="section-heading section-heading-left">
              <h2>Tout ce qu&apos;il faut pour passer a autre chose</h2>
              <p>
                Dump Party ne propose pas seulement des reservations, mais une
                experience pensee pour simplifier l’apres-rupture. L’application
                aide l’utilisateur a trouver facilement ce qui lui correspond, a
                reserver sans friction et a vivre un moment positif dans un
                cadre clair et rassurant.
              </p>
            </div>

            <div className="features-layout">
              <div className="feature-side left">
                <article>
                  <h3>{features[0].title}</h3>
                  <p>{features[0].text}</p>
                </article>
                <article>
                  <h3>{features[2].title}</h3>
                  <p>{features[2].text}</p>
                </article>
              </div>

              <div className="feature-arrow" aria-hidden="true">
                <span className="feature-arrow-top" />
                <span className="feature-arrow-body" />
                <span className="feature-arrow-tip" />
              </div>

              <div className="feature-side right">
                <article>
                  <h3>{features[1].title}</h3>
                  <p>{features[1].text}</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="newsletter-shell" id="newsletter">
          <div className="container newsletter-card">
            <div className="newsletter-illustration" aria-hidden="true">
              <div className="news-badge">NEWS</div>
              <div className="news-envelope">
                <span />
              </div>
            </div>

            <div className="newsletter-copy">
              <h2>Restez informe</h2>
              <p>
                Recevez les nouveautes de Dump Party, nos prochaines experiences
                et les dernieres actualites directement par email.
              </p>
              <form className="newsletter-form">
                <div className="newsletter-input">
                  <span>✉</span>
                  <input type="email" placeholder="Votre adresse email" />
                </div>
                <button type="submit">S&apos;inscrire</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand-block">
            <div className="footer-brand">Dump Party</div>
            <p>
              Des experiences pensees pour avancer, sortir et se reconstruire a
              son rythme.
            </p>
            <div className="footer-stores">
              <a className="store-badge small" href="#appstore">
                <span>Telecharger dans</span>
                <strong>l&apos;App Store</strong>
              </a>
              <a className="store-badge small" href="#googleplay">
                <span>Disponible sur</span>
                <strong>Google Play</strong>
              </a>
            </div>
          </div>

          <div>
            <h3>Navigation</h3>
            <a href="#top">Accueil</a>
            <a href="#need">Le besoin</a>
            <a href="#offers">La solution</a>
            <a href="#testimonials">Temoignages</a>
            <a href="#how">Comment ca marche?</a>
            <a href="#features">Fonctionnalites</a>
          </div>

          <div>
            <h3>Nous contacter</h3>
            <a href="mailto:dumpparty@gmail.com">dumpparty@gmail.com</a>
            <a href="tel:+33640605465">06 40 60 54 65</a>
            <a className="footer-cta" href="#offers">
              Decouvrir l&apos;app
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
