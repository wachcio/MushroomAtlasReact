import React from 'react';
// import PropTypes from 'prop-types';
import ApplicationImage from './ApplicationImage';

function MushroomItemShortData({
  mushroom: { polishName, scientificName, anotherNames, application },
}) {
  return (
    <>
      <div className="flex flex-row flex-nowrap flex-auto items-center">
        <h1 className="flex-grow pt-1 top-0 left-0 text-lg text-left leading-6 font-bold sm:text-lg sm:leading-7">
          {polishName}
        </h1>
        <ApplicationImage imageName={application} />
      </div>
      <p>Nazwa naukowa: {scientificName}</p>
      <p>Inne nazwy: {anotherNames}</p>
    </>
  );
}

// MushroomItemShortData.propTypes = { children: PropTypes.node.isRequired };

export default MushroomItemShortData;
