import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import ApplicationImage from './ApplicationImage';
import IsLegallyProtected from './IsLegallyProtected';
import ApprovedForTrade from './ApprovedForTrade';

function MushroomItemShortData({
  mushroom: {
    polishName,
    scientificName,
    anotherNames,
    application,
    isLegallyProtected,
    approvedForTrade,
    slug,
  },
}) {
  return (
    <>
      <Link to={`/mushroom_details/${slug}`}>
        <div className="flex flex-row flex-nowrap flex-auto items-center">
          <h1 className="flex-grow pt-1 top-0 left-0 text-lg text-left leading-6 font-bold sm:text-lg sm:leading-7">
            {polishName}
          </h1>
          <ApplicationImage imageName={application} />
          {isLegallyProtected ? <IsLegallyProtected /> : null}
          {approvedForTrade && application === 'edible' ? (
            <ApprovedForTrade />
          ) : null}
        </div>
        <p>Nazwa naukowa: {scientificName}</p>
        <p>Inne nazwy: {anotherNames}</p>
      </Link>
    </>
  );
}

// MushroomItemShortData.propTypes = { children: PropTypes.node.isRequired };

export default MushroomItemShortData;
