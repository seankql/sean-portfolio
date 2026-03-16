const Experience = () => {
    return (
        <section id="experience">
            <h2 className="title">Experience</h2>

            <div className="experience-box">
                <h3>Software Engineer</h3>
                <p className="company">Scotiabank</p>
                <p className="dates">Aug. 2025 - Present</p>
                <p className="location">Toronto, CAN</p>

                <ul className="description">
                    <li>Won 1st Place in the Scotiabank Power BI Hackathon by designing a reconciliation dashboard that consolidated 13 reports into a single view with drill-down to flagged transactions</li>
                    <li>Productionized the hackathon solution by replacing Apache Camel CSV scripts with MongoDB aggregation views, upgrading reporting to near real-time data, reducing daily reconciliation time by 10 minutes</li>
                    <li>Automated operational health monitoring using Apache Camel and Java, replacing manual status checks with scheduled system checks and automated reporting, saving 15 minutes of daily manual effort</li>
                    <li>Contributed features across internal services, including enhancements to transaction reports, and developed API mappings and payment flow diagrams to support system integration</li>
                </ul>
            </div>

            <div className="experience-box">
                <h3>Software Engineer</h3>
                <p className="company">PointClickCare</p>
                <p className="dates">May 2023 - Apr. 2024</p>
                <p className="location">Toronto, CAN</p>

                <ul className="description">
                    <li>Performed large-scale data migration using SQL, ensuring consistency during transitions between systems</li>
                    <li>Built internal tooling to identify, review, and merge duplicate orders, reducing operational errors</li>
                    <li>Automated frontend and API testing using Cypress and JMeter, increasing release confidence and improving system performance by 37%</li>
                </ul>
            </div>

            <div className="experience-box">
                <h3>Data Analyst</h3>
                <p className="company">Toronto Sun Wah Trading Inc.</p>
                <p className="dates">Jan. 2022 - Dec. 2022</p>
                <p className="location">Toronto, CAN</p>

                <ul className="description">
                    <li>Owned the design and deployment of a tablet digital ordering app using Power Apps, Power Automate, and SharePoint, eliminating manual pen-and-paper processes, reducing order entry errors by over 30%</li>
                    <li>Collaborated cross-functionally with sales, warehouse, and procurement teams to gather business requirements, enforce data quality thresholds, and ensure strong adoption through iterative feedback</li>
                    <li>Created Power BI dashboards to track error rates and visualize operational improvements post-digitization</li>
                    <li>Automated order reporting workflows with Excel and VBA, cutting manual processing time by more than 50% and increasing the reliability of order sheets</li>
                </ul>
            </div>

            <div className="experience-box">
                <h3>Company Quartermaster Sergeant</h3>
                <p className="company">Singapore Armed Forces</p>
                <p className="dates">Jan. 2018 - Aug. 2019</p>
                <p className="location">Singapore</p>

                <ul className="description">
                    <li>Managed a team of 20+ supply assistants, supplied battalion with necessary firearms and equipment, kept stock of storehouse inventory, managed the logistics in operations and exercises</li>
                    <li>Communicated effectively with team of supply assistants to assign tasks and successfully assist in National Day Parade</li>
                    <li>Restructured logistics storehouses in unit to support combat soldiers more efficiently and easily with outfield exercises</li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;