import "./Footer.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">✦</span>
            <span>CareerPilot</span>
          </div>
          <p>
            Navigate your career journey with opportunities,
            hiring updates, and application tracking in one place.
          </p>
        </div>
        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#opportunities">Opportunities</a>
          <a href="#hiring-news">Hiring News</a>
          <a href="#about">About</a>
        </div>
        {/* Career */}
        <div className="footer-column">
          <h3>Career</h3>
          <a href="#opportunities">Find Opportunities</a>
          <a href="#hiring-news">Hiring Updates</a>
          <a href="#login">Track Applications</a>
          <a href="#signup">Get Started</a>
        </div>
        {/* Account */}
        <div className="footer-column">
          <h3>Account</h3>
          <a href="#login">Login</a>
          <a href="#signup">Sign Up</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 CareerPilot. All rights reserved.</p>
        <p>Discover • Apply • Track • Grow</p>
      </div>
    </footer>
  )
}
export default Footer