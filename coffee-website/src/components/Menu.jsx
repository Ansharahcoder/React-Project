import React from 'react';
import './Menu.css';

const coffeeItems = [
  { id: 1, name: "Espresso", price: "$3.50", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500", desc: "Pure, bold, and intense rich espresso shot." },
  { id: 2, name: "Cappuccino", price: "$4.50", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500", desc: "Espresso topped with steamed milk and thick foam." },
  { id: 3, name: "Caffe Latte", price: "$4.00", img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500", desc: "Smooth espresso combined with velvety steamed milk." },
  { id: 4, name: "Caramel Macchiato", price: "$5.00", img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500", desc: "Fresh espresso drizzled with rich caramel syrup." },
  { id: 5, name: "Mocha", price: "$4.75", img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500", desc: "Rich chocolate flavor blended with bold espresso." },
  { id: 6, name: "Cold Brew", price: "$4.25", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500", desc: "Steeped for 12 hours for maximum smooth flavor." },
  { id: 7, name: "Flat White", price: "$4.50", img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=500", desc: "Microfoam poured over a double shot of espresso." },
  { id: 8, name: "Iced Americano", price: "$3.75", img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=500", desc: "Chilled espresso served with ice and cold water." }
];

const Menu = () => {
  return (
    <section id="menu" className="menu-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Our Special Menu</h2>
          <p className="section-subtitle">Handcrafted beverages made specially for coffee lovers</p>
        </div>

        {/* row-cols-lg-4 ensures 4 cards in a single row on desktop screens */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {coffeeItems.map((item) => (
            <div key={item.id} className="col">
              <div className="card h-100 coffee-card shadow-sm border-0">
                <div className="card-img-wrapper">
                  <img src={item.img} className="card-img-top" alt={item.name} />
                  <span className="price-tag">{item.price}</span>
                </div>
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title fw-bold text-dark">{item.name}</h5>
                    <p className="card-text text-muted fs-6">{item.desc}</p>
                  </div>
                  <button className="btn btn-add-cart w-100 mt-3">
                    <i className="bi bi-cart-plus me-2"></i>Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;