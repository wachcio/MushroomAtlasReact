import React from 'react';

const imgStyle = {
  maxHeight: '300px',
  maxWidth: '300px',
};

function MushroomImage({ patch, imageTitle }) {
  return (
    <img
      className="px-2 py-2"
      style={imgStyle}
      src={patch}
      alt={imageTitle}
      title={imageTitle}
    />
  );
}

export default MushroomImage;
