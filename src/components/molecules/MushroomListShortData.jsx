/* eslint-disable react/no-array-index-key */
import React from 'react';

import MushroomCardShortData from '../atoms/MushroomCardShortData';
import WrapperBackgroundWhite from '../atoms/WrapperBackroundWhite';

function MushroomListShortData({ mushroomShortData }) {
  return mushroomShortData.map((v) => {
    return (
      <WrapperBackgroundWhite key={v.id}>
        <MushroomCardShortData mushroom={v} />
      </WrapperBackgroundWhite>
    );
  });
}

export default MushroomListShortData;
