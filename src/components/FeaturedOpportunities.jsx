import "./FeaturedOpportunities.css"
function FeaturedOpportunities() {
  const opportunities = [
    {
      type: "Internship",
      title: "Frontend Development Intern",
      company: "TechNova",
      location: "Remote",
      mode: "Work From Home",
    },
    {
      type: "Full Time",
      title: "Software Developer",
      company: "InnovateLabs",
      location: "Bengaluru",
      mode: "On-site",
    },
    {
      type: "Internship",
      title: "Java Developer Intern",
      company: "CodeSphere",
      location: "Noida",
      mode: "Hybrid",
    },
  ]
  return (
    <section className="featured-opportunities">
      <div className="opportunities-heading">
        <p className="opportunities-label">FEATURED OPPORTUNITIES</p>

        <h2>Explore Your Next Opportunity</h2>

        <p className="opportunities-description">
          Discover selected job and internship opportunities and take the next
          step toward your career goals.
        </p>
      </div>
      <div className="opportunities-container">
        {opportunities.map((opportunity) => (
          <article
            className="opportunity-card"
            key={opportunity.title}
          >
            <div className="opportunity-top">
              <span className="opportunity-type">
                {opportunity.type}
              </span>
            </div>
            <h3>{opportunity.title}</h3>
            <p className="opportunity-company">
              {opportunity.company}
            </p>
            <div className="opportunity-details">
              <span>📍 {opportunity.location}</span>
              <span>💼 {opportunity.mode}</span>
            </div>
            <a href="#opportunities" className="view-opportunity">
              View Opportunity →
            </a>
          </article>
        ))}
      </div>
      <div className="all-opportunities-wrapper">
        <a href="#opportunities" className="all-opportunities-btn">
          View All Opportunities →
        </a>
      </div>
    </section>
  )
}
export default FeaturedOpportunities