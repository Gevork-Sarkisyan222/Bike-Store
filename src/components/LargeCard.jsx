import React from 'react';
import '../App.scss';

function LargeCard({ image, price }) {
  return (
    <div className="LargeCard">
      <img src={image} alt="image" />
      <div className="large-info">
        <h2>Велосипед BMX Tech Team Goof 20</h2>
        <p>{price} руб</p>
        <button>Купить</button>
      </div>
    </div>
  );
}

export default LargeCard;
