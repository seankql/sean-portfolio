import "../styles/Certificates.css";

const Certificates = () => (
  <section id="certificates" className="section-animate">
    <div className="section-container">
      <h2 className="section-title">Certificates</h2>
      <div className="cert-grid">
        <div className="cert-card">
          <div className="cert-shimmer" />
          <div className="cert-left">
            <div className="cert-logo">
              <i className="fas fa-chart-bar cert-logo-icon" />
            </div>
          </div>
          <div className="cert-right">
            <p className="cert-issuer">Microsoft</p>
            <h3 className="cert-name">Power BI Data Analyst Associate</h3>
            <p className="cert-sub">PL-300 Exam Preparation and Practice</p>
            <div className="cert-meta">
              <span className="cert-badge">Issued Jul. 2024</span>
              <span className="cert-id">FMBQ5OLXDSSQ</span>
            </div>
            <ul className="cert-points">
              <li>Completed intensive preparation aligned with the Microsoft Certified: Power BI Data Analyst Associate exam</li>
              <li>Hands-on experience with data transformation, data modelling, DAX measures, and Power BI report design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Certificates;
