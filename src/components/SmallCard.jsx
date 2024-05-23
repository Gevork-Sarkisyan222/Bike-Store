import React from 'react';
import '../App.scss';
import bikeImg from '../images/bike1.png';

function SmallCard({ image }) {
  return (
    <div className="SmallCard">
      <img src={image} alt="bikeImg 1" />
      <div className="info">
        <div>
          <article>
            <h2>Велосипед BMX Tech Team Goof 20</h2>
          </article>
          <p>12 830 руб</p>
          <div>
            <button>Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
