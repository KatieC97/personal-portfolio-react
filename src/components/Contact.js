import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-5" data-aos="fade-up">
      <div className="container text-center">
        <h2 className="mb-4">Get In Touch</h2>
        <form
          action="https://formspree.io/f/xgvarker"
          method="POST"
          className="row g-3 justify-content-center"
          style={{ maxWidth: "600px", margin: "auto" }}
        >
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              name="_replyto"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="col-12">
            <textarea
              name="message"
              className="form-control"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-brand">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
