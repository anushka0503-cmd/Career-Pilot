import "./HiringNews.css"
function HiringNews() {
  const news = [
    {
      category: "Hiring Update",
      title: "Companies Expand Hiring for Freshers",
      description:
        "Several companies are increasing opportunities for fresh graduates and early-career professionals.",
      date: "18 Sep 2026",
    },
    {
      category: "Recruitment",
      title: "New Recruitment Drives Open",
      description:
        "Recruitment drives and job openings are being announced across different industries and roles.",
      date: "17 Sep 2026",
    },
    {
      category: "Career News",
      title: "Skills in Demand for New Jobs",
      description:
        "Employers continue to look for candidates with relevant technical and professional skills.",
      date: "16 Sep 2026",
    },
  ]
  return (
    <section className="hiring-news">
      <div className="hiring-news-heading">
        <p className="news-label">HIRING NEWS</p>
        <h2>Stay Updated With Hiring Trends</h2>
        <p className="news-description">
          Get the latest hiring updates, recruitment news, and career-related
          information in one place.
        </p>
      </div>
      <div className="news-container">
        {news.map((item) => (
          <article className="news-card" key={item.title}>
            <span className="news-category">{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="news-card-bottom">
              <span className="news-date">{item.date}</span>
              <a href="#news" className="read-more">
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="all-news-wrapper">
        <a href="#hiring-news" className="all-news-btn">
          View All Hiring News →
        </a>
      </div>
    </section>
  )
}
export default HiringNews