const Experience = () => {
    return (
        <section id="experience">
  <h2>Experience</h2>

  <div className="experience-box">
    <h3>Software Engineer</h3>
    <p className="company">Company Name</p>
    <p className="dates">Jan 2020 - Present</p>
    <p className="location">Location</p>

    <ul className="description">
      <li>Developed and maintained web applications</li>
      <li>Worked with cross-functional teams to implement new features</li>
      <li>Participated in code reviews and knowledge sharing</li>
    </ul>

    <div className="skills">
      <span className="skill-bubble">JavaScript</span>
      <span className="skill-bubble">React</span>
      <span className="skill-bubble">Node.js</span>
    </div>
  </div>

  <div className="experience-box">
    <h3>Frontend Developer</h3>
    <p className="company">Another Company</p>
    <p className="dates">Jun 2018 - Dec 2019</p>
    <p className="location">Another Location</p>

    <ul className="description">
      <li>Built responsive user interfaces using HTML, CSS, and JavaScript</li>
      <li>Collaborated with UX/UI designers to implement designs</li>
      <li>Optimized websites for maximum speed and scalability</li>
    </ul>

    <div className="skills">
      <span className="skill-bubble">HTML</span>
      <span className="skill-bubble">CSS</span>
      <span className="skill-bubble">JavaScript</span>
    </div>
  </div>
</section>

    );
};

export default Experience;
