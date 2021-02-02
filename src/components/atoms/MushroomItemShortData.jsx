import React from 'react';
// import PropTypes from 'prop-types';

import { getApplicationInText } from '../../utils/mushroomApplication';

function MushroomItemShortData({
  mushroom: { polishName, scientificName, anotherNames, application },
}) {
  return (
    <>
      <h1>Nazwa polska: {polishName}</h1>
      <p>Nazwa naukowa: {scientificName}</p>
      <p>Inne nazwy: {anotherNames}</p>
      <p>Przydatność do spożycia: {getApplicationInText(application)}</p>
    </>
  );
}

// MushroomItemShortData.propTypes = { children: PropTypes.node.isRequired };

export default MushroomItemShortData;
