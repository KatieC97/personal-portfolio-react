import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center mt-5">
      <div className="container footer-links">
        <a
          href="https://github.com/KatieC97"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark fs-4"
        >
          <i className="fab fa-github"></i>
        </a>
        <p className="mb-0">© {year} Katie Cox</p>
        <a
          href="https://www.linkedin.com/in/katiecox-software"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark fs-4"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}
