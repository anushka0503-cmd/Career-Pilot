import "./HowItWorks.css"
function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "Explore job and internship opportunities that match your career goals.",
    },
    {
      number: "02",
      title: "Apply",
      description:
        "Find an opportunity you like and apply through the original source.",
    },
    {
      number: "03",
      title: "Track",
      description:
        "Keep all your applications organized and track their progress in one place.",
    },
    {
      number: "04",
      title: "Grow",
      description:
        "Stay updated with hiring news and keep moving forward in your career journey.",
    },
  ]
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="section-heading">
        <p className="section-label">HOW IT WORKS</p>
        <h2>Your Career Journey, Simplified</h2>
        <p className="section-description">
          CareerPilot helps you discover opportunities, apply with confidence,
          track your applications, and grow your career.
        </p>
      </div>
      <div className="steps-container">
        {steps.map((step) => (
          <div className="step-card" key={step.number}>
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default HowItWorks