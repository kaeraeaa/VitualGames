import React, { useState } from 'react';
import GameCard from './GameCard';
import ThreeDModel from './ThreeDModel';
import Modal from './Modal';
import './GameSection.css';

const games = [
  {
    title: 'Core Philosophies',
    modelUrl: '/model/scene.gltf',
    image: '/robot.jpg',
    author: 'Cameron Williamson',
    company: 'Gillette',
  },
  {
    title: 'Future Drive',
    modelUrl: '/models/car.glb',
    image: '/car.jpg',
    author: 'Jane Doe',
    company: 'Tesla',
  },
  {
    title: 'Future Drive',
    modelUrl: '/models/car.glb',
    image: '/car.jpg',
    author: 'Jane Doe',
    company: 'Tesla',
  },
  {
    title: 'Future Drive',
    modelUrl: '/models/car.glb',
    image: '/car.jpg',
    author: 'Jane Doe',
    company: 'Tesla',
  },
  {
    title: 'Future Drive',
    modelUrl: '/models/car.glb',
    image: '/car.jpg',
    author: 'Jane Doe',
    company: 'Tesla',
  },
  {
    title: 'Future Drive',
    modelUrl: '/models/car.glb',
    image: '/car.jpg',
    author: 'Jane Doe',
    company: 'Tesla',
  }
  // можеш додати ще 4 картки
];

const GameSection = () => {
  const [activeModel, setActiveModel] = useState(null);

  const handleClose = () => {
    setActiveModel(null);
  };

  return (
    <div>
      <h2 className="game-section-title">Секція ігор</h2>
      <div className="game-grid">
        {games.map((game, index) => (
          <GameCard
            key={index}
            title={game.title}
            image={game.image}
            author={game.author}
            company={game.company}
            onViewClick={() => setActiveModel(game.modelUrl)}
          />
        ))}
      </div>

      {activeModel && (
        <Modal onClose={handleClose}>
          <ThreeDModel src={activeModel} />
        </Modal>
      )}
    </div>
  );
};

export default GameSection;
