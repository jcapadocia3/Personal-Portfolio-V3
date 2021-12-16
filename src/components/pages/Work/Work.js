import React from "react";
import "./Work.css";

export default function Work() {
  return (
    <div class="mainCont">
      <section class="work" id="work">
        <h1>Work</h1>
        <div class="workCont">
          <div class="workItem">
            <p class="workTitle">Project Title: v.i.e.w.s.</p>
            <p>
              GitHub Repo:{" "}
              <a href="https://github.com/jcapadocia3/v.i.e.w.s.">
                Click here!
              </a>
            </p>
            <p>
              Deployed App:{" "}
              <a href="https://peaked-project.herokuapp.com/">Click here!</a>
            </p>
          </div>

          <div class="workItem">
            <p class="workTitle">Project Title: Make My Day</p>
            <p>
              GitHub Repo:{" "}
              <a href="https://github.com/nlaramee120/Make-My-Day">
                Click here!
              </a>
            </p>
            <p>
              Deployed App:{" "}
              <a href="https://nlaramee120.github.io/Make-My-Day/">
                Click here!
              </a>
            </p>
          </div>

          <div class="workItem">
            <p class="workTitle">Project Title: Work Day Scheduler</p>
            <p>
              GitHub Repo:{" "}
              <a href="https://github.com/jcapadocia3/Work-Day-Scheduler">
                Click here!
              </a>
            </p>
            <p>
              Deployed App:{" "}
              <a href="https://jcapadocia3.github.io/Work-Day-Scheduler/">
                Click here!
              </a>
            </p>
          </div>

          <div class="workItem">
            <p class="workTitle">Project Title: Code Quiz</p>
            <p>
              GitHub Repo:{" "}
              <a href="https://github.com/jcapadocia3/Code-Quiz">Click here!</a>
            </p>
            <p>
              Deployed App:{" "}
              <a href="https://jcapadocia3.github.io/Code-Quiz/">Click here!</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
