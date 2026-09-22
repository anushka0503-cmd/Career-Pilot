import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <span className="logo-icon">✦</span>
          <span>CareerPilot</span>
        </div>
        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#opportunities">Opportunities</a>
          <a href="#news">Hiring News</a>
          <a href="#about">About</a>
        </div>
        {/* Actions */}
        <div className="nav-actions">
          <button className="theme-btn" aria-label="Toggle theme">
            ☾
          </button>
          <a href="#login" className="login-btn">
            Login
          </a>
          <a href="#signup" className="signup-btn">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;