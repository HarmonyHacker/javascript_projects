function showSection(section) {
    const content = document.getElementById("content");
    let htmlContent = "";
  
    if (section === "education") {
      htmlContent = `
        <h2>Education</h2>
        <p><strong>Parul Institute of Engineering Technology, Parul University</strong></p>
        <p>Bachelor of Technology in Information Technology | CGPA: 6.67 (2022-2026)</p>
        <p><strong>Bright Day School</strong> | HSC (Class XII): 62% (2021-2022)</p>
        <p><strong>Vidyut Board Vidyalay</strong> | SCC (Class X): 42% (2019-2020)</p>
      `;
    } else if (section === "skills") {
      htmlContent = `
        <h2>Skills</h2>
        <p>Python | JavaScript | NodeJS | React | MongoDB | Git</p>
      `;
    } else if (section === "projects") {
      htmlContent = `
        <h2>Projects</h2>
        <p><strong>Web Platform:</strong> Simplifies event planning using HTML, CSS, and JavaScript.</p>
        <p><strong>ScrapSmart:</strong> Connects users with local dealers for eco-friendly scrap selling.</p>
      `;
    } else if (section === "achievements") {
      htmlContent = `
        <h2>Achievements</h2>
        <ul>
          <li>Participated in Vadodara Hackathon 5.0</li>
          <li>Selected for Institute Level of SIH 2024</li>
          <li>Infosys SpringBoard: Database and SQL</li>
          <li>Contributor: Full Stack Bootcamp</li>
        </ul>
      `;
    }
  
    content.innerHTML = htmlContent;
  }
  