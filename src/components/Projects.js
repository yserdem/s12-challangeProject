import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Projects() {
  const { data } = useContext(AppContext);

  return (
    <div id="projects" className="projectsContainer">
      <div className="projects">
        <div className="projectCol">
          <h1 className="profile-heading">{data.projectsTitle}</h1>
          <div className="cards">
            <div className="card">
              <img classname="projectImg" src="Workintech.png" alt="projects" />
              <h3 className="content-heading">{data.projectsWorkintech}</h3>
              <p className="description-project">{data.projectsWorkintechDesc}</p>
              <div className="programs">
                <p>react</p>
                <p>redux</p>
                <p>axios</p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href=""
                  target="_blank"
                >
                  {data.projectVisit}
                </a>
              </div>
            </div>
            <div className="card">
              <img classname="projectImg" src="RandJoke.png" alt="projects" />
              <h3 className="content-heading">{data.projectsRandJoke}</h3>
              <p className="description-project">{data.projectsRandJokeDesc}</p>
              <div className="programs">
                <p>react</p>
                <p>redux</p>
                <p>axios</p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                >
                  {data.projectVisit}
                </a>
              </div>
            </div>
            <div className="card">
              <img classname="projectImg" src="Journey.png" alt="projects" />
              <h3 className="content-heading">{data.projectsJourney}</h3>
              <p className="description-project">
                {data.projectsJourneyDesc}
              </p>
              <div className="programs">
                <p>react</p>
                <p>redux</p>
                <p>axios</p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/yserdem/"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href="https://github.com/yserdem/"
                  target="_blank"
                >
                  {data.projectVisit}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
