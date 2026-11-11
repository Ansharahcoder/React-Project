import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-text text-start">
            <span className="badge bg-warning text-dark mb-3 fs-6 px-3 py-2">Fresh Roasted Coffee</span>
            <h1 className="display-3 fw-bold mb-3 text-light">Start Your Day With Perfect Coffee</h1>
            <p className="lead mb-4 text-light-50">
              Crafted with passion and sourced from the finest beans worldwide. Experience the rich taste and heavenly aroma in every single sip.
            </p>
            <div className="d-flex gap-3">
              <a href="#menu" className="btn btn-hero-primary btn-lg">Explore Menu</a>
              <a href="#about" className="btn btn-outline-light btn-lg">Our Story</a>
            </div>
          </div>
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <div className="hero-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800" 
                alt="Coffee Cup" 
                className="img-fluid rounded-circle hero-img shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;