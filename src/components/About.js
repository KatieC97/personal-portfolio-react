import React from "react";

export default function About() {
  return (
    <section id="about" className="py-5 bg-light" data-aos-delay="100">
      <div className="container text-center">
        <h2>About Me</h2>
        <p className="lead">
          I'm Katie, a frontend-focused developer transitioning from cloud &
          backend delivery into creative, user-focused software solutions.
        </p>
        <a
          href="assets/Katie_Cox_CV.pdf"
          className="btn btn-brand btn-outline-dark mt-3"
          download
        >
          Download my CV
        </a>
      </div>
    </section>
  );
}
