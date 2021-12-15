import React from "react";

export default function Home() {
  return (
    <div class="mainCont">
      <div class="leftCont">
        <div class="avatar"></div>
        <h1>James Capadocia</h1>
        <div class="navLinks">
          <p>
            <a id="fastforward" href="index.html">
              Home
            </a>
          </p>
          <p>
            <a id="fastforward" href="aboutme.html">
              About Me
            </a>
          </p>
          <p>
            <a id="fastforward" href="work.html">
              Work
            </a>
          </p>
          <div class="dropdownMenu">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuBtn"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Contact Me
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <p class="dropdown-item">P: 847.730.7599</p>
              <p class="dropdown-item">E: james.capadocia@gmail.com</p>
              <a
                class="dropdown-item2 dropdownLink blue"
                href="https://linkedin.com/in/james-capadocia-156367217"
              >
                <span class="linkStyle">LinkedIn</span>
              </a>
              <a
                class="dropdown-item2 dropdownLink blue"
                href="https://github.com/jcapadocia3"
              >
                <span class="linkStyle">Github</span>
              </a>
            </div>
          </div>
          <p>
            <a id="fastforward" href="./assets/images/NEW Resume.pdf">
              Resume
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
