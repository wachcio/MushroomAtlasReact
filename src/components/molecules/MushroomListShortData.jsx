import React from 'react';
import PropTypes from 'prop-types';

import MushroomItem from '../atoms/MushroomCardShortData';
import WrapperBackgroundWhite from '../atoms/WrapperBackroundWhite';

function MushroomListShortData({ mushroomShortData }) {
  return mushroomShortData.map((i) => {
    return (
      <>
        <WrapperBackgroundWhite key={`${i.id}_wrapper`}>
          <MushroomItem key={i.id} mushroom={i} />
        </WrapperBackgroundWhite>
      </>
    );
  });
}

MushroomListShortData.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MushroomListShortData;
