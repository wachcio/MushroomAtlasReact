import React from 'react';
// import PropTypes from 'prop-types';
import ApplicationImage from './ApplicationImage';
import IsLegallyProtected from './IsLegallyProtected';
import ApprovedForTrade from './ApprovedForTrade';

function MushroomItemData({
  mushroom: {
    polishName,
    scientificName,
    anotherNames,
    application,
    isLegallyProtected,
    approvedForTrade,
  },
}) {
  console.log(polishName);

  return (
    <>
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
    </>
  );
}

// MushroomItemData.propTypes = { children: PropTypes.node.isRequired };

export default MushroomItemData;
