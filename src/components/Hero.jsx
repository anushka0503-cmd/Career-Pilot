function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <p className="hero-tag">CAREERPILOT</p>

        <h1>Navigate Your Career Journey</h1>

        <p className="hero-description">
          Discover opportunities, stay updated with hiring news,
          and manage your job applications in one place.
        </p>

        <div className="hero-buttons">
          <a href="#opportunities" className="primary-btn">
            Explore Opportunities
          </a>

          <a href="#signup" className="secondary-btn">
            Get Started
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <span className="hero-icon">✦</span>
          <h3>Your Career. Your Journey.</h3>
          <p>Discover • Apply • Track • Grow</p>
        </div>
      </div>
    </section>
  )
}

export default Hero