import React, { useState } from 'react';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Scotiabank',
    dates: 'Aug. 2025 – Present',
    location: 'Toronto, CAN',
    active: true,
    color: '#e31837',
    initials: 'SB',
    bullets: [
      'Won 1st Place in the Scotiabank Power BI Hackathon by designing a reconciliation dashboard that consolidated 13 reports into a single view with drill-down to flagged transactions',
      'Productionized the hackathon solution by replacing Apache Camel CSV scripts with MongoDB aggregation views, upgrading reporting to near real-time data, reducing daily reconciliation time by 10 minutes',
      'Automated operational health monitoring using Apache Camel and Java, replacing manual status checks with scheduled system checks and automated reporting, saving 15 minutes of daily manual effort',
      'Contributed features across internal services, including enhancements to transaction reports, and developed API mappings and payment flow diagrams to support system integration',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'PointClickCare',
    dates: 'May 2023 – Apr. 2024',
    location: 'Toronto, CAN',
    active: false,
    color: '#0077b6',
    initials: 'PC',
    bullets: [
      'Performed large-scale data migration using SQL, ensuring consistency during transitions between systems',
      'Built internal tooling to identify, review, and merge duplicate orders, reducing operational errors',
      'Automated frontend and API testing using Cypress and JMeter, increasing release confidence and improving system performance by 37%',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'Toronto Sun Wah Trading Inc.',
    dates: 'Jan. 2022 – Dec. 2022',
    location: 'Toronto, CAN',
    active: false,
    color: '#f4a261',
    initials: 'SW',
    bullets: [
      'Owned the design and deployment of a tablet digital ordering app using Power Apps, Power Automate, and SharePoint, eliminating manual pen-and-paper processes, reducing order entry errors by over 30%',
      'Collaborated cross-functionally with sales, warehouse, and procurement teams to gather business requirements, enforce data quality thresholds, and ensure strong adoption through iterative feedback',
      'Created Power BI dashboards to track error rates and visualize operational improvements post-digitization',
      'Automated order reporting workflows with Excel and VBA, cutting manual processing time by more than 50% and increasing the reliability of order sheets',
    ],
  },
  {
    role: 'Company Quartermaster Sergeant',
    company: 'Singapore Armed Forces',
    dates: 'Jan. 2018 – Aug. 2019',
    location: 'Singapore',
    active: false,
    color: '#2d6a4f',
    initials: 'SAF',
    bullets: [
      'Managed a team of 20+ supply assistants, supplied battalion with necessary firearms and equipment, kept stock of storehouse inventory, managed the logistics in operations and exercises',
      'Communicated effectively with team of supply assistants to assign tasks and successfully assist in National Day Parade',
      'Restructured logistics storehouses in unit to support combat soldiers more efficiently and easily with outfield exercises',
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="section-animate">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-line" />
          {experiences.map((exp, i) => (
            <div key={i} className={`timeline-item ${i % 2 === 0 ? 'tl-left' : 'tl-right'}`}>
              <div className="timeline-dot" style={{ background: exp.color, boxShadow: exp.active ? `0 0 0 4px ${exp.color}33` : 'none' }} />
              <div
                className={`exp-card${exp.active ? ' exp-active' : ''}`}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                role="button"
                tabIndex={0}
              >
                <div className="exp-header">
                  <div
                    className="exp-badge"
                    style={{ background: exp.color + '22', color: exp.color, border: `1px solid ${exp.color}44` }}
                  >
                    {exp.initials}
                  </div>
                  <div className="exp-title-group">
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company" style={{ color: exp.color }}>{exp.company}</p>
                  </div>
                  <span className="exp-chevron">{openIndex === i ? '−' : '+'}</span>
                </div>
                <div className="exp-meta">
                  <span>{exp.dates}</span>
                  <span className="exp-dot">·</span>
                  <span>{exp.location}</span>
                </div>
                <div className={`exp-bullets${openIndex === i ? ' open' : ''}`}>
                  <ul>
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
