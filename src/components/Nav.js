import React from "react";
import "./Portfolio.css";
import Resume from "./NEW-Resume.pdf"

const styles = {
  card: {
    display: "flex",
    justifyContent: "center",
    margin: "25px 0 25px 0",
    fontSize: "20px",
  },
  myName: {
    color: "rgb(43, 43, 43)",
    fontSize: "50px",
    textAlign: "center",
    marginTop: "25px",
  },
};

function Nav({ currentPage, handlePageChange }) {
  return (
    <div class="navBar">
      <p style={styles.myName}>James Capadocia</p>
      <div style={styles.card}>
        <p className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </p>
        <p className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </p>
        <p className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Work")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </p>
        <p className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </p>
        <p className="nav-item nav-link">
          <a target="blank" href={Resume}>
            Resume
          </a>
        </p>
      </div>
    </div>
  );
}

export default Nav;
