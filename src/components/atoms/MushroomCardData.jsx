import React from 'react';
// import PropTypes from 'prop-types';
import ApplicationImage from './ApplicationImage';
import IsLegallyProtected from './IsLegallyProtected';
import ApprovedForTrade from './ApprovedForTrade';
import getFullPlDate from '../../utils/date';

function MushroomItemData({
  mushroom: {
    polishName,
    scientificName,
    anotherNames,
    application,
    isLegallyProtected,
    approvedForTrade,
    createAt,
    updateAt,
    dataSources,
    description: {
      cap,
      capImprint,
      characteristics,
      comments,
      dimensions,
      flesh,
      frequency,
      occurrence,
      possibleConfusion,
      stem,
      underCap,
      value,
    },
    images,
  },
}) {
  console.log(dataSources);

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
      <p className="font-bold mt-2">Opis:</p>
      <p>Kapelusz: {cap}</p>
      <p>Pod kapeluszem: {underCap}</p>
      <p>Przekrój kapelusza: {capImprint}</p>
      <p>Miąższ: {flesh}</p>
      <p>Trzon: {stem}</p>
      <p>Cechy charakterystyczne: {characteristics}</p>
      <p>Rozmiar: {dimensions}</p>
      <p>Częstotliwość występowania: {frequency}</p>
      <p>Występowanie: {occurrence}</p>
      <p>Możliwe pomyłki: {possibleConfusion}</p>
      <p>Walory smakowe: {value}</p>
      <p>Uwagi: {comments}</p>
      {dataSources.length ? <p>Źródła danych:</p> : null}
      {dataSources.length
        ? dataSources.map((v) => <p key={`${v}_source`}>{v}</p>)
        : null}
      <p>Zdjęcia: {images}</p>
      <p>Dodano: {getFullPlDate(createAt)}</p>
      {createAt !== updateAt ? (
        <p>Modyfikacja: {getFullPlDate(updateAt)}</p>
      ) : null}
    </>
  );
}

// MushroomItemData.propTypes = { children: PropTypes.node.isRequired };

export default MushroomItemData;
