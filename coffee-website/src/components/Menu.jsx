import React from 'react';
import './Menu.css';
import Coffee1 from '../assets/coffeee 1.jpeg';
import Coffee2 from '../assets/coffee 2.jpeg';
import Coffee3 from '../assets/coffee 3.jpeg';
import Coffee4 from '../assets/coffee 4.jpeg';
import Coffee5 from '../assets/coffee 5.jpeg';
import Coffee6 from '../assets/coffee 6.jpeg';
import Coffee7 from '../assets/coffee 7.jpeg';
import Coffee8 from '../assets/coffee 8.jpeg';

const Menu = () => {
  return (
    <div id="menu" className="menu-section">
      <div className="menu-header">
        <h2 className="section-title">Our Special Menu</h2>
        <p className="section-subtitle">Handcrafted beverages made specially for coffee lovers</p>
      </div>

      <div className="cards-container">
        <section className="card">
          <div className="card-img-wrapper">
            <img src={Coffee1} alt="Espresso" />
            <span className="price-tag">$3.50</span>
          </div>
          <div className="card-body">
            <h4 className="card-title">Espresso</h4>
            <p className="card-text">Pure, bold, and intense rich espresso shot.</p>
            <button className="btn-add-cart">Add to Cart</button>
          </div>
        </section>

        <section className="card">
          <div className="card-img-wrapper">
            <img src={Coffee2} alt="Cappuccino" />
            <span className="price-tag">$4.50</span>
          </div>
          <div className="card-body">
            <h4 className="card-title">Cappuccino</h4>
            <p className="card-text">Espresso topped with steamed milk and thick foam.</p>
            <button className="btn-add-cart">Add to Cart</button>
          </div>
        </section>

        <section className="card">
          <div className="card-img-wrapper">
            <img src={Coffee3} alt="Caffe Latte" />
            <span className="price-tag">$4.00</span>
          </div>
          <div className="card-body">
            <h4 className="card-title">Caffe Latte</h4>
            <p className="card-text">Smooth espresso combined with velvety steamed milk.</p>
            <button className="btn-add-cart">Add to Cart</button>
          </div>
        </section>

        <section className="card">
          <div className="card-img-wrapper">
            <img src={Coffee4} alt="Caramel Macchiato" />
            <span className="price-tag">$5.00</span>
          </div>
          <div className="card-body">
            <h4 className="card-title">Caramel Macchiato</h4>
            <p className="card-text">Fresh espresso drizzled with rich caramel syrup.</p>
            <button className="btn-add-cart">Add to Cart</button>
          </div>
        </section>

        <section className="card">
          <div className="card-img-wrapper">
            <img src={Coffee5} alt="Mocha" />
            <span className="price-tag">$4.75</span>
          </div>
          <div className="card-body">
            <h4 className="card-title">Mocha</h4>
            <p className="card-text">Rich chocolate flavor blended with bold espresso.</p>
            <button className="btn-add-cart">Add to Cart</button>
          </div>
        </section>

        <section className="card">
          <div className="card-img-wrapper">
            <img src={Coffee6} alt="Cold Brew" />
            <span className="price-tag">$4.25</span>
          </div>
          <div className="card-body">
            <h4 className="card-title">Cold Brew</h4>
            <p className="card-text">Steeped for 12 hours for maximum smooth flavor.</p>
            <button className="btn-add-cart">Add to Cart</button>
          </div>
        </section>

        <section className="card">
          <div className="card-img-wrapper">
            <img src={Coffee7} alt="Flat White" />
            <span className="price-tag">$4.50</span>
          </div>
          <div className="card-body">
            <h4 className="card-title">Flat White</h4>
            <p className="card-text">Microfoam poured over a double shot of espresso.</p>
            <button className="btn-add-cart">Add to Cart</button>
          </div>
        </section>

        <section className="card">
          <div className="card-img-wrapper">
            <img src={Coffee8} alt="Iced Americano" />
            <span className="price-tag">$3.75</span>
          </div>
          <div className="card-body">
            <h4 className="card-title">Iced Americano</h4>
            <p className="card-text">Chilled espresso served with ice and cold water.</p>
            <button className="btn-add-cart">Add to Cart</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;