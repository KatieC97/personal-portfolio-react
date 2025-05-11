import React, { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Projects() {
  useEffect(() => {
    const carouselElement = document.querySelector("#projectCarousel");
    if (carouselElement && window.bootstrap?.Carousel) {
      new window.bootstrap.Carousel(carouselElement);
    }
  }, []);

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4">Projects</h2>

        <div
          id="projectCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Project 1 - Active */}
            <div
              className="carousel-item active"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card mx-auto" style={{ maxWidth: "25rem" }}>
                <img
                  src="assets/screenshots/Noto.png"
                  className="card-img-top"
                  alt="Noto Mood Tracker Preview"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Noto (React App)</h5>
                  <p className="card-text">
                    Minimalist wellbeing app built with React. Tracks daily
                    moods, shows chart history, saves user notes, and offers A/B
                    tested suggestions.
                  </p>
                  <a
                    href="https://katiec97.github.io/noto-app"
                    className="btn btn-brand"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="carousel-item">
              <div className="card mx-auto" style={{ maxWidth: "25rem" }}>
                <img
                  src="assets/screenshots/Domi-preview.png"
                  className="card-img-top"
                  alt="Domï Inventory App Preview"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">
                    Domï (Flutter App – Coming Soon)
                  </h5>
                  <p className="card-text">
                    A mobile-first inventory tracker built with Flutter and
                    FastAPI. Features barcode scanning and SQLite storage.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="carousel-item">
              <div className="card mx-auto" style={{ maxWidth: "25rem" }}>
                <img
                  src="assets/screenshots/Html.png"
                  className="card-img-top"
                  alt="HTML Technical Doc Page"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">HTML Technical Doc Page</h5>
                  <a
                    href="https://katiec97.github.io/html-technical-doc-page/"
                    className="btn btn-brand"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="carousel-item">
              <div className="card mx-auto" style={{ maxWidth: "25rem" }}>
                <img
                  src="assets/screenshots/Sims.png"
                  className="card-img-top"
                  alt="Sims Product Landing Page"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Sims Product Landing Page</h5>
                  <a
                    href="https://katiec97.github.io/the-sims-product-landing-page/"
                    className="btn btn-brand"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="carousel-item">
              <div className="card mx-auto" style={{ maxWidth: "25rem" }}>
                <img
                  src="assets/screenshots/Fitz.png"
                  className="card-img-top"
                  alt="Fitzgerald Tribute Page"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Fitzgerald Tribute Page</h5>
                  <a
                    href="https://katiec97.github.io/fitzgerald-tribute-page/"
                    className="btn btn-brand"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="carousel-item">
              <div className="card mx-auto" style={{ maxWidth: "25rem" }}>
                <img
                  src="assets/screenshots/Spider.png"
                  className="card-img-top"
                  alt="Spider-Man Fan Registration"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Spider-Man Fan Registration</h5>
                  <a
                    href="https://katiec97.github.io/SpiderFanPage/"
                    className="btn btn-brand"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#projectCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#projectCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
