const Experience = () => {
    return (
        <section id="experience">
            <h2 className="title">Experience</h2>

            <div className="experience-box">
                <h3>Software Engineer</h3>
                <p className="company">PointClickCare</p>
                <p className="dates">May 2023 - Apr. 2024</p>
                <p className="location">Toronto, CAN</p>

                <ul className="description">
                    <li>Performed large-scale data migration using SQL, ensuring consistency during transitions between systems</li>
                    <li>Optimized SQL queries, then validated improvements through API performance testing using JMeter,
                        resulting in a 37% boost in system performance and a more reliable deployment pipeline
                    </li>
                    <li>Implemented and updated user-friendly frontend interface using Java, providing seamless access for users to
                        review and merge duplicate orders, mitigating potential errors and ensuring data accuracy</li>
                    <li>Automated frontend testing with Cypress and TestRail, boosting test coverage and release confidence</li>
                    <li>Engaged in Agile Scrum practices and used Jira for managing tasks, tracking sprint progress, and facilitating
                        team communication to ensure smooth project delivery</li>
                    <li>Resolved data inconsistencies through proactive cross-team communication, preventing delays in clinical
                        feature rollout</li>
                </ul>
            </div>

            <div className="experience-box">
                <h3>Data Analyst</h3>
                <p className="company">Toronto Sun Wah Trading Inc.</p>
                <p className="dates">Jan. 2022 - Dec. 2022</p>
                <p className="location">Toronto, CAN</p>

                <ul className="description">
                    <li>Owned the design and deployment of a tablet digital ordering app using Power Apps, Power Automate, and
                        SharePoint, eliminating manual pen-and-paper processes, reducing order entry errors by over 30%
                    </li>
                    <li>Collaborated cross-functionally with sales, warehouse, and procurement teams to gather business requirements, enforce data quality thresholds, and ensure strong adoption through iterative feedback
                    </li>
                    <li>Created Power BI dashboards to track error rates and visualize operational improvements post-digitization</li>
                    <li>Used Power Query and DAX to clean and transform ERP data, producing actionable metrics
                    </li>
                    <li>Automated order reporting workflows with Excel and VBA, cutting manual processing time by more than
                        50% and increasing the reliability of order sheets
                    </li>
                    <li>Maintained full documentation of metric definitions and logic, ensuring transparency and data literacy across
                        the team</li>
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
