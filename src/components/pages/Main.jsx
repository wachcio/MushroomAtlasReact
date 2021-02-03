import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../../store/storeProvider';
import bacground from '../../img/robert-wiedemann-pslVHH-4fZw-unsplash.jpg';
import { getShortDataMushroom } from '../../utils/API';

import MushroomListShortData from '../molecules/MushroomListShortData';

const Main = () => {
  const { mushroomShortData, setMushroomShortData } = useContext(StoreContext);
  useEffect(() => {
    (async () => {
      await setMushroomShortData(await getShortDataMushroom());
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-100 py-6 grid   sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-3 justify-center sm:py-12"
      style={{
        backgroundImage: `url('${bacground}')`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
      }}
    >
      {mushroomShortData != null ? (
        <MushroomListShortData mushroomShortData={mushroomShortData} />
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Main;
