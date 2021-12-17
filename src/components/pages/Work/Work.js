import React from "react";
import "./Work.css";
import Work1 from "./assets/views.png";
import Work2 from "./assets/make-my-day1.png";
import Work3 from "./assets/workdayscheduler1.png";
import Work4 from "./assets/code-quiz.png";
import Work5 from "./assets/ecommerce.png";
import Work6 from "./assets/workout-tracker.png";

export default function Work() {
  return (
    <div class="mainCont">
      <section class="work" id="work">
        <h1>Work</h1>
        <div class="workCont">
          <div class="workItem">
          <p class="workTitle"><span class="projTitle">Project Title: v.i.e.w.s.</span></p>
          <img class="work1" src= {Work1} />
            <p>
              GitHub Repo:{" "}
              <a target="blank" href="https://github.com/jcapadocia3/v.i.e.w.s.">
                Click here!
              </a>
            </p>
            <p>
              Deployed App:{" "}
              <a target="blank" href="https://peaked-project.herokuapp.com/">Click here!</a>
            </p>
          </div>

          <div class="workItem1">
          <p class="workTitle"><span class="projTitle">Project Title: Make My Day</span></p>
          <img class="work2" src= {Work2} />
            <p>
              GitHub Repo:{" "}
              <a target="blank" href="https://github.com/nlaramee120/Make-My-Day">
                Click here!
              </a>
            </p>
            <p>
              Deployed App:{" "}
              <a target="blank" href="https://nlaramee120.github.io/Make-My-Day/">
                Click here!
              </a>
            </p>
          </div>

          <div class="workItem1">
          <p class="workTitle"><span class="projTitle">Project Title: Work Day Scheduler</span>></p>
          <img class="work3" src= {Work3} />
            <p>
              GitHub Repo:{" "}
              <a target="blank" href="https://github.com/jcapadocia3/Work-Day-Scheduler">
                Click here!
              </a>
            </p>
            <p>
              Deployed App:{" "}
              <a target="blank" href="https://jcapadocia3.github.io/Work-Day-Scheduler/">
                Click here!
              </a>
            </p>
          </div>

          <div class="workItem1">
          <p class="workTitle"><span class="projTitle">Project Title: Code Quiz</span></p>
          <img class="work4" src= {Work4} />
            <p>
              GitHub Repo:{" "}
              <a target="blank" href="https://github.com/jcapadocia3/Code-Quiz">Click here!</a>
            </p>
            <p>
              Deployed App:{" "}
              <a target="blank" href="https://jcapadocia3.github.io/Code-Quiz/">Click here!</a>
            </p>
          </div>

          <div class="workItem1">
          <p class="workTitle"><span class="projTitle">Project Title: E-Commerce Back End</span></p>
          <img class="work5" src= {Work5} />
            <p>
              GitHub Repo:{" "}
              <a target="blank" href="https://github.com/jcapadocia3/E-Commerce-Back-End">Click here!</a>
            </p>
          </div>

          <div class="workItem1">
          <p class="workTitle"><span class="projTitle">Project Title: Workout Tracker</span></p>
          <img class="work6" src= {Work6} />
            <p>
              GitHub Repo:{" "}
              <a target="blank" href="https://github.com/jcapadocia3/Workout-Tracker">Click here!</a>
            </p>
            <p>
              Deployed App:{" "}
              <a target="blank" href="https://workout-tracker-jcnu.herokuapp.com/">Click here!</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
