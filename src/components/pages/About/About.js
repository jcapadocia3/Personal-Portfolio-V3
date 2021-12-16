import React from "react";
import './style.css';

export default function About() {
  return (
    <div class="mainCont">
      <div class="rightCont">
        <section class="aboutMe" id="aboutMe">
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            Thanks for visiting my portfolio page! My name is James. I am an
            aspiring full stack web and app developer. Currently, I am a student
            at Northwestern University in a 6 month bootcamp program to earn a
            certificate in Coding and Full Stack Web/App Development. This type
            of work has always intrigued me, and after 32 years in this world, I
            was able to convince myself that, "It's never too late for school,
            nor to follow your dreams." While I understand that this field of
            work is not easy, it's what makes me happy, and each class I attend
            only proves this further for myself. With an extensive professional
            background in sales and servicing (see{" "}
            <a id="fastforward" href="./assets/images/Updated Resume.pdf">
              Resume
            </a>{" "}
            linked above), it excites me to use this experience in this field of
            work to create websites and apps alongside with clients and to help
            make, what starts as a simple vision, a reality. As my time in this
            class stands, I currently am well versed in the skills below: - HTML
            - CSS - Javascript - Client-side and server-side APIs With still so
            much time left in the program, I am excited to continue to master
            these skills, as well as learn new skills, to allow for further
            creativity in my craft.
          </p>
        </section>
      </div>
    </div>
  );
}
