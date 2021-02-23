import React, { useState } from "react";

import "./Homepage.css";
import { db } from "../db";

import pic from "../images/foto.jpg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";

function Homepage() {
  let allProjects = db.projects;
  const [projectsFilter, setProjectsFilter] = useState([...allProjects]);

  function filterAll(event) {
    setProjectsFilter([...allProjects]);
    let teste = Array.from(event.target.parentNode.children);
    teste.map((i) =>
      i.id === event.target.id
        ? (i.className = "darker-bg")
        : (i.className = "ligther-bg")
    );
  }

  function filterTags(event) {
    let targetId = event.target.id;
    let filtered = allProjects.filter((e) =>
      e.tags.find((tag) => tag === `${targetId}`)
    );
    setProjectsFilter(filtered);

    let teste = Array.from(event.target.parentNode.children);
    teste.map((i) =>
      i.id === event.target.id
        ? (i.className = "darker-bg")
        : (i.className = "ligther-bg")
    );
  }

  return (
    <div>
      <main>
        <section className="header-section background">
          <img src={pic} alt="thalia's photo" />
          <div className="header-section-div">
            <div>
              <div>
                <h1>Thalía Berger</h1>
                <p>Front-end developer</p>
              </div>
              <div>
                <a>berger.thalia@gmail.com</a>
                <div>
                  <a
                    href="https://www.linkedin.com/in/thaliaberger/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedin} />
                  </a>
                  <a
                    href="https://github.com/thaliaberger"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={github} />
                  </a>
                </div>
              </div>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor
              massa. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla at risus.{" "}
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
          <img src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/ajracsdqu5gmyfl6nai0" />
          <div>
            <h2>Web Developement, IRONHACK</h2>
            <p>oct 2020 - dec 2020</p>
          </div>
        </section>

        {/* PROJECTS */}
        <div className="projects-filter">
          <a onClick={filterAll} className="ligther-bg" id="all">
            All
          </a>
          <a onClick={filterTags} className="ligther-bg" id="ReactJS">
            React
          </a>
          <a onClick={filterTags} className="ligther-bg" id="Next.js">
            Next.js
          </a>
          <a onClick={filterTags} className="ligther-bg" id="TypeScript">
            TypeScript
          </a>
          <a onClick={filterTags} className="ligther-bg" id="Responsivo">
            Responsive
          </a>
        </div>
        <section className="projects-section">
          {projectsFilter.length ? (
            projectsFilter.map((project) => {
              return (
                <div
                  key={project.title}
                  className="background projects-section-div"
                >
                  <img src={project.image} />
                  <h2>{project.title}</h2>
                  <div>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      DEMO
                    </a>{" "}
                    |{" "}
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      REPO
                    </a>
                  </div>
                </div>
              );
            })
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
