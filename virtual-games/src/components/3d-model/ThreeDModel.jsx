import React from 'react';

const ThreeDModel = ({ src }) => {
  return (
    <model-viewer
      src={src}
      alt="3D модель"
      auto-rotate
      camera-controls
      ar
      style={{
        width: '100vw',
        height: '100vh',
        background: '#000',
      }}
    />
  );
};

export default ThreeDModel;