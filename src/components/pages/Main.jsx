import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../../store/storeProvider';
import bacground from '../../img/robert-wiedemann-pslVHH-4fZw-unsplash.jpg';
import { getShortDataMushroom } from '../../utils/API';

import WrapperBackgroundWhite from '../atoms/WrapperBackroundWhite';
import { getApplicationInText } from '../../utils/mushroomApplication';

const Main = () => {
  const { mushroomShortData, setMushroomShortData } = useContext(StoreContext);
  useEffect(() => {
    (async () => {
      await setMushroomShortData(await getShortDataMushroom());

      // await console.log('useEffect', mushroomShortData);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const MushroomItem = ({
    mushroom: { polishName, scientificName, anotherNames, application },
  }) => {
    return (
      <>
        <h1>Nazwa polska: {polishName}</h1>
        <p>Nazwa naukowa: {scientificName}</p>
        <p>Inne nazwy: {anotherNames}</p>
        <p>Przydatność do spożycia: {getApplicationInText(application)}</p>
      </>
    );
  };

  const MushroomsList = () => {
    return mushroomShortData.map((i) => {
      // console.log(i);

      return (
        <>
          <WrapperBackgroundWhite key={`${i.id}_wrapper`}>
            <MushroomItem key={i.id} mushroom={i} />
          </WrapperBackgroundWhite>
        </>
      );
    });
  };

  return (
    <div
      className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
      style={{
        backgroundImage: `url('${bacground}')`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
      }}
    >
      {mushroomShortData != null ? <MushroomsList /> : <h1>Loading</h1>}
    </div>
  );
};

export default Main;
