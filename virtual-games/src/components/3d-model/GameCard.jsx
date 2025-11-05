import React from 'react';
import './GameCard.css';

const GameCard = ({ title, onViewClick, image, author, company }) => {
  return (
    <div className="game-card">
      <img className="card-image" src={image} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="card-author">
          <img src="/avatar.jpg" alt={author} className="avatar" />
          <div>
            <p className="author-name">{author}</p>
            <p className="author-role">{company}</p>
          </div>
        </div>
        <button className="live-demo-button" onClick={onViewClick}>
          LIVE DEMO
        </button>
      </div>
    </div>
  );
};

export default GameCard;