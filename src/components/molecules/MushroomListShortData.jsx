/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import MushroomItem from '../atoms/MushroomCardShortData';
import WrapperBackgroundWhite from '../atoms/WrapperBackroundWhite';

function MushroomListShortData({ mushroomShortData }) {
  return mushroomShortData.map((v, i) => {
    return (
      <>
        <WrapperBackgroundWhite key={`${v.id}_wrapper_${i}`}>
          <MushroomItem key={`${v.id}_item_${i}`} mushroom={v} />
        </WrapperBackgroundWhite>
      </>
    );
  });
}

MushroomListShortData.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MushroomListShortData;
