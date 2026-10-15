const features = [
  {
    number: "01",
    title: "Explora mundos",
    description: "Descubre ruinas flotantes, secretos y rutas imposibles en cada partida.",
  },
  {
    number: "02",
    title: "Domina tu estilo",
    description: "Combina habilidades y crea una estrategia que sea solo tuya.",
  },
  {
    number: "03",
    title: "Compite arriba",
    description: "Supera tu mejor marca y escala la tabla junto a tu escuadrón.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="site-nav" aria-label="Navegación principal">
        <a className="brand" href="#" aria-label="Neon Rift inicio">
          <span className="brand-mark">NR</span>
          <span>NEON RIFT</span>
        </a>
        <div className="nav-links">
          <a href="#juego">El juego</a>
          <a href="#aventura">La aventura</a>
          <a href="#comunidad">Comunidad</a>
        </div>
        <a className="nav-button" href="#jugar">
          Jugar ahora <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" id="juego">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            La grieta está abierta
          </p>
          <h1>
            El futuro
            <br />
            <em>te está llamando.</em>
          </h1>
          <p className="hero-description">
            Neon Rift es una aventura de acción donde cada decisión cambia el
            camino. Entra a la grieta, forma tu escuadrón y deja tu marca.
          </p>
          <div className="hero-actions" id="jugar">
            <a className="primary-button" href="#aventura">
              Comenzar partida <span aria-hidden="true">→</span>
            </a>
            <a className="play-link" href="#aventura">
              <span className="play-icon" aria-hidden="true">▶</span>
              Ver tráiler
            </a>
          </div>
          <div className="hero-meta">
            <div>
              <strong>+2M</strong>
              <span>jugadores</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>valoración</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>posibilidades</span>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-label="Ilustración de un portal de Neon Rift">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="portal">
            <div className="portal-core" />
            <span className="portal-label">RIFT / 001</span>
          </div>
          <div className="art-card art-card-top">
            <span>SECTOR</span>
            <strong>07-A</strong>
          </div>
          <div className="art-card art-card-bottom">
            <span>ENERGÍA</span>
            <strong>98%</strong>
          </div>
          <div className="crosshair crosshair-one" />
          <div className="crosshair crosshair-two" />
        </div>
      </section>

      <section className="feature-section" id="aventura">
        <div className="section-heading">
          <p className="eyebrow">Tu próxima misión</p>
          <h2>Juega sin límites.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="feature-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <footer id="comunidad">
        <span>NEON RIFT © 2024</span>
        <span>Creado para quienes buscan lo desconocido.</span>
      </footer>
    </main>
  );
}
