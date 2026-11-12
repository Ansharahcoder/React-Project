import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="about-img-box position-relative">
              <img 
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800" 
                alt="About Our Coffee" 
                className="img-fluid rounded-4 shadow-lg about-main-img"
              />
              <div className="experience-badge shadow">
                <span className="fw-bold fs-3 text-warning">10+</span>
                <p className="mb-0 text-muted small">Years of Excellence</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <span className="badge bg-secondary text-light mb-2 px-3 py-2">Our Story</span>
            <h2 className="section-title mb-4">We Brew With Passion & Perfection</h2>
            <p className="text-muted mb-4">
              At Brew & Bean, every cup tells a story. We handpick the finest coffee beans from sustainable farms across the globe, roasting them meticulously to bring out rich, unforgettable flavors. Whether you're starting your morning or unwinding in the evening, our cozy space and exquisite blends are crafted just for you.
            </p>
            <div className="row g-3 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-3">
                  <div className="about-icon-box"><i className="bi bi-check-circle-fill"></i></div>
                  <h6 className="mb-0 fw-bold">100% Organic Beans</h6>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-3">
                  <div className="about-icon-box"><i className="bi bi-cup-hot-fill"></i></div>
                  <h6 className="mb-0 fw-bold">Master Baristas</h6>
                </div>
              </div>
            </div>
            <a href="#menu" className="btn btn-about-read">Discover More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;