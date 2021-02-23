import React, { useState } from "react";

import "./Homepage.css";
import projects from "../db.json";

import pic from "../images/foto.jpg";

function Homepage() {
  let allProjects = projects.projects;
  const [projectsFilter, setProjectsFilter] = useState([...allProjects]);
  const [currentFilter, setCurrentFilter] = useState("all");

  function filterAll() {
    setProjectsFilter([...allProjects]);
    setCurrentFilter("all");
  }

  function filterTags(event) {
    let targetId = event.target.id;
    let filtered = allProjects.filter((e) =>
      e.tags.find((tag) => tag === `${targetId}`)
    );
    setProjectsFilter(filtered);
    setCurrentFilter(`${targetId}`);
  }

  return (
    <div>
      <main>
        <section className="header-section background">
          <img src={pic} />
          <div className="header-section-div">
            <div>
              <h1>Thalía Berger</h1>
              <p>Front-end developer</p>
            </div>
            <div>
              <a>berger.thalia@gmail.com</a>
            </div>
          </div>
        </section>

        <section className="languages-section background">
          <div>
            <p>React</p>
            <div className="skill-container">
              <div className="skills react"></div>
            </div>
          </div>
          <div>
            <p>JavaScript</p>
            <div className="skill-container">
              <div className="skills js"></div>
            </div>
          </div>
          <div>
            <p>HTML5</p>
            <div className="skill-container">
              <div className="skills html"></div>
            </div>
          </div>
          <div>
            <p>CSS3</p>
            <div className="skill-container">
              <div className="skills css"></div>
            </div>
          </div>
          <div>
            <p>Redux</p>
            <div className="skill-container">
              <div className="skills redux"></div>
            </div>
          </div>
          <div>
            <p>Next.js</p>
            <div className="skill-container">
              <div className="skills next"></div>
            </div>
          </div>
        </section>
        <section className="certificate-section background">
          <h2>Web Developer</h2>
        </section>

        {/* PROJECTS */}
        <div className="projects-filter">
          <a onClick={filterAll} is-selected={isSelected} id="all">
            ALL
          </a>
          <a onClick={filterTags} is-selected={isSelected} id="ReactJS">
            React
          </a>
          <a onClick={filterTags} is-selected={isSelected} id="Next.js">
            Next.js
          </a>
          <a onClick={filterTags} is-selected={isSelected} id="TypeScript">
            TypeScript
          </a>
          <a onClick={filterTags} is-selected={isSelected} id="Responsivo">
            Responsive
          </a>
        </div>
        <section className="projects-section">
          {projectsFilter.length ? (
            projectsFilter.map((project) => (
              <div key={project.title} className="background">
                <img src={project.image} />
                <h2>{project.title}</h2>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  DEMO
                </a>{" "}
                |{" "}
                <a href={project.repo} target="_blank" rel="noreferrer">
                  REPO
                </a>
              </div>
            ))
          ) : (
            <div className="background">
              <h2>No projects</h2>
            </div>
          )}
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        created by
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/thaliaberger"
        >
          thaliaberger
        </a>
        - devChallenges.io
      </footer>
    </div>
  );
}

export default Homepage;
