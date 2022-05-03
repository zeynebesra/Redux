import React from "react";

function Card({ card, handleChoise, flipped, disabled }) {
  return (
    <div className="card">
      <div className={flipped || card.matched === true ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card" />
        <img
          className="back"
          src="/images/cover.jpg"
          onClick={() => !disabled && handleChoise(card)}
        />
      </div>
    </div>
  );
}

export default Card;
