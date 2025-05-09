const Experience = () => {
    return (
        <section id="experience">
            <h2 className="title">Experience</h2>

            <div className="experience-box">
                <h3>Software Engineer</h3>
                <p className="company">PointClickCare</p>
                <p className="dates">Sep. 2023 - Apr. 2024</p>
                <p className="location">Toronto, CAN</p>

                <ul className="description">
                    <li>Added feature to distinguish between different types of orders, improving order workflow clarity and efficiency</li>
                    <li>Integrated additional clinical chart report types, enabling access to diverse patient reporting</li>
                    <li>Implemented and updated user-friendly frontend interface, providing seamless access for users to review and
                        merge duplicate orders, mitigating potential errors and ensuring data accuracy</li>
                    <li>Created automated tests for multiple frontend applications using Cypress and TestRail, ensuring the reliability
                        and stability of the software in diverse scenarios</li>
                    <li>Conducted thorough performance testing on APIs using JMeter, establishing a solid foundation for secure
                        deployment that increased performance by 37%
                    </li>
                </ul>
            </div>

            <div className="experience-box">
                <h3>System Analyst</h3>
                <p className="company">Toronto Sun Wah Trading Inc.</p>
                <p className="dates">May 2022 - Aug. 2022</p>
                <p className="location">Toronto, CAN</p>

                <ul className="description">
                    <li>Created a sales tablet app for sales team using Microsoft Power Apps, Power Automate, and SharePoint, resulting
                        in an increase of revenue, productivity, and efficiency</li>
                    <li>Provided operational support to the sales team leading to more efficient use of the sales app by the sales team</li>
                    <li>Maintained ERP platform which tracks sales orders, products, suppliers, customers and more</li>
                </ul>
            </div>

            <div className="experience-box">
                <h3>Company Quartermaster Sergeant</h3>
                <p className="company">Singapore Armed Forces</p>
                <p className="dates">Aug. 2018 - Aug. 2020</p>
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
