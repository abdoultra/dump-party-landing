import { useState } from 'react'
import './App.css'

import appStoreBadge from './assets/images/appstore.png'
import bashLogo from './assets/images/ba&sh.png'
import etamLogo from './assets/images/etam.png'
import franceBilletLogo from './assets/images/fancebillet.png'
import feverLogo from './assets/images/fever.png'
import googlePlayBadge from './assets/images/googleplay.png'
import newsletterImage from './assets/images/new.png'
import phoneImage from './assets/images/phone-cutout.png'
import ritualsLogo from './assets/images/rituals.jpg'
import sephoraLogo from './assets/images/sephora.png'
import activityImage from './assets/images/activity-card.jpg'
import packImage from './assets/images/pack-card.jpg'
import partyImage from './assets/images/party-card.jpg'

const partners = [
  { name: 'Sephora', image: sephoraLogo },
  { name: 'France Billet', image: franceBilletLogo },
  { name: 'Etam', image: etamLogo },
  { name: 'Fever', image: feverLogo },
  { name: 'ba&sh', image: bashLogo },
  { name: 'Rituals', image: ritualsLogo, className: 'partner-rituals' },
]

const needs = [
  {
    title: 'Se retrouver',
    text: 'Reprendre confiance après une période difficile.',
  },
  {
    title: 'Sortir plus facilement',
    text: 'Trouver rapidement des activités et expériences adaptées.',
  },
  {
    title: 'Avancer à son rythme',
    text: 'Bénéficier d’un parcours simple, pensé pour ce moment de vie.',
  },
]

const offers = [
  {
    title: 'Activités à la carte',
    text: 'Pour réserver uniquement une activité, de façon flexible et rapide.',
    price: '40 €',
    unit: '/ les 2 h',
    button: 'Découvrir nos activités',
    bullets: ['Activités', 'Choix libre des horaires'],
    image: activityImage,
  },
  {
    title: 'Pack tout compris',
    text: 'Pour profiter d’une expérience complète, avec plusieurs services regroupés.',
    price: '299 €',
    unit: '/ la journée',
    button: 'Découvrir nos packs',
    bullets: ['Activités', 'Soirées', 'Choix libre des horaires', 'Priorités'],
    image: packImage,
    featured: true,
    badge: 'Le plus populaire',
  },
  {
    title: 'Soirées à la carte',
    text: 'Pour choisir une soirée précise selon ses envies du moment.',
    price: '280 €',
    unit: '/ la soirée',
    button: 'Découvrir nos soirées',
    bullets: ['Soirées', 'Choix libre des horaires'],
    image: partyImage,
  },
]

const testimonials = [
  {
    text: 'Une expérience vraiment bien pensée. J’ai pu réserver facilement et passer un excellent moment sans avoir à tout organiser.',
    author: 'Hugo',
  },
  {
    text: 'Le pack était clair, simple à réserver et l’activité correspondait exactement à ce dont j’avais besoin pour changer d’air.',
    author: 'Naomi',
  },
  {
    text: 'J’ai aimé pouvoir choisir à mon rythme. L’application rassure et toutes les informations utiles sont faciles à retrouver.',
    author: 'Sarah',
  },
]

const steps = [
  {
    number: '1',
    title: 'Choisissez votre formule',
    text: 'Sélectionnez une soirée à la carte, une activité à la carte ou un pack tout compris selon vos envies.',
  },
  {
    number: '2',
    title: 'Réservez en quelques clics',
    text: 'Consultez les détails, ajoutez votre sélection au panier et validez facilement votre réservation.',
  },
  {
    number: '3',
    title: 'Vivez l’expérience',
    text: 'Profitez d’un moment pensé pour vous faire du bien, sortir de la routine et avancer à votre rythme.',
  },
]

const features = [
  {
    title: 'Plus de liberté',
    text: 'Choisissez entre soirée à la carte, activité seule ou pack complet selon votre envie du moment.',
  },
  {
    title: 'Plus de simplicité',
    text: 'Consultez les offres, ajoutez au panier et réservez rapidement depuis une interface claire.',
  },
  {
    title: 'Plus de réassurance',
    text: 'Retrouvez toutes vos informations dans l’app, avec suivi, notifications et accès à votre compte.',
  },
]

function StoreBadges({ small = false }) {
  return (
    <div className={`store-badges${small ? ' store-badges-small' : ''}`}>
      <a href="#appstore" aria-label="Télécharger dans l’App Store">
        <img src={appStoreBadge} alt="Télécharger dans l’App Store" />
      </a>
      <a href="#googleplay" aria-label="Disponible sur Google Play">
        <img src={googlePlayBadge} alt="Disponible sur Google Play" />
      </a>
    </div>
  )
}

function App() {
  const [testimonialOffset, setTestimonialOffset] = useState(0)

  const visibleTestimonials = testimonials.map(
    (_, index) => testimonials[(index + testimonialOffset) % testimonials.length],
  )

  const moveTestimonials = (direction) => {
    setTestimonialOffset(
      (current) => (current + direction + testimonials.length) % testimonials.length,
    )
  }

  return (
    <div className="page" id="top">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Dump Party, accueil">
          Dump Party
        </a>
        <nav className="topnav" aria-label="Navigation principale">
          <a href="#blog">Blog</a>
          <a href="#faq">FAQ</a>
          <span className="account-text">Déjà un compte ?</span>
          <a className="nav-login" href="#signin">
            Se connecter
          </a>
          <button className="lang-button" type="button" aria-label="Langue : français">
            FR <span aria-hidden="true">⌄</span>
          </button>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Tourner la page, un moment à la fois.</h1>
              <p>
                Dump Party vous aide à retrouver du lien, réserver des activités
                et/ou soirées adaptées et vivre une expérience pensée pour vous
                faire du bien.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#offers">
                  Découvrir l’app
                </a>
                <a className="button button-secondary" href="#offers">
                  Voir les packs
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-phone">
                <img
                  src={phoneImage}
                  alt="Aperçu mobile de l’application Dump Party"
                />
              </div>
              <StoreBadges />
            </div>
          </div>
        </section>

        <section className="partners-strip" aria-label="Marques partenaires">
          <div className="partners-track">
            {partners.map((partner) => (
              <div className={`partner-logo ${partner.className || ''}`} key={partner.name}>
                <img src={partner.image} alt={partner.name} />
              </div>
            ))}
          </div>
        </section>

        <section className="section need-section" id="need">
          <div className="container">
            <div className="section-heading section-heading-left">
              <h2>Quand avancer seul devient plus difficile</h2>
              <p>
                Après une rupture, il n’est pas toujours facile de retrouver un
                rythme, de sortir ou simplement de savoir par où recommencer.
                Beaucoup de personnes ressentent le besoin de se changer les
                idées, de reprendre confiance et de vivre de nouvelles
                expériences positives, sans savoir vers qui se tourner ni
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
                Découvrir l’app
              </a>
            </div>
          </div>
        </section>

        <section className="section offers-section" id="offers">
          <div className="container">
            <div className="section-heading section-heading-left">
              <h2>Trois façons de vivre l’expérience</h2>
              <p>
                Dump Party propose plusieurs façons d’avancer selon ses envies
                et son budget : choisir une soirée à la carte, opter pour un
                pack tout compris ou réserver seulement une activité.
                L’utilisateur garde ainsi la liberté de vivre l’expérience à
                son rythme, avec une offre simple et claire.
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
                      <span>À partir de</span>
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
              <button
                className="arrow-button"
                type="button"
                aria-label="Témoignage précédent"
                onClick={() => moveTestimonials(-1)}
              >
                ‹
              </button>
              <div className="testimonials-grid" aria-live="polite">
                {visibleTestimonials.map((item) => (
                  <article className="testimonial-card" key={item.author}>
                    <div className="stars" aria-label="5 étoiles">
                      ★★★★★
                    </div>
                    <p>{item.text}</p>
                    <strong>{item.author}</strong>
                  </article>
                ))}
              </div>
              <button
                className="arrow-button"
                type="button"
                aria-label="Témoignage suivant"
                onClick={() => moveTestimonials(1)}
              >
                ›
              </button>
            </div>
          </div>
        </section>

        <section className="how-section" id="how">
          <div className="container">
            <div className="section-heading section-heading-left light-heading">
              <h2>Comment ça marche ?</h2>
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
              <h2>Tout ce qu’il faut pour passer à autre chose</h2>
              <p>
                Dump Party ne propose pas seulement des réservations, mais une
                expérience pensée pour simplifier l’après-rupture. L’application
                aide l’utilisateur à trouver facilement ce qui lui correspond,
                à réserver sans friction et à vivre un moment positif dans un
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
            <img
              className="newsletter-illustration"
              src={newsletterImage}
              alt=""
              aria-hidden="true"
            />
            <div className="newsletter-copy">
              <h2>Restez informé</h2>
              <p>
                Recevez les nouveautés de Dump Party, nos prochaines expériences
                et les dernières actualités directement par email.
              </p>
              <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
                <label className="newsletter-input">
                  <span aria-hidden="true">✉</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre adresse email"
                    aria-label="Votre adresse email"
                    required
                  />
                </label>
                <button type="submit">S’inscrire</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand-block">
            <a className="footer-brand" href="#top">
              Dump Party
            </a>
            <p>
              Des expériences pensées pour avancer, sortir et se reconstruire à
              son rythme.
            </p>
            <StoreBadges small />
          </div>

          <div>
            <h3>Navigation</h3>
            <a href="#top">Accueil</a>
            <a href="#need">Le besoin</a>
            <a href="#offers">La solution</a>
            <a href="#testimonials">Témoignages</a>
            <a href="#how">Comment ça marche ?</a>
            <a href="#features">Fonctionnalités</a>
          </div>

          <div>
            <h3>Nous contacter</h3>
            <a href="mailto:dumpparty@gmail.com">dumpparty@gmail.com</a>
            <a href="tel:+33640605465">06 40 60 54 65</a>
            <a className="footer-cta" href="#offers">
              Découvrir l’app
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
