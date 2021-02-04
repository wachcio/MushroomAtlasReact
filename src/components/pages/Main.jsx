import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../../store/storeProvider';

import { getShortDataMushroom } from '../../utils/API';

import MushroomListShortData from '../molecules/MushroomListShortData';

const Main = () => {
  const { mushroomShortData, setMushroomShortData } = useContext(StoreContext);
  useEffect(() => {
    (async () => {
      const data = await getShortDataMushroom();
      console.log(data);

      await setMushroomShortData(data);
      console.log('mushroom Short Data', mushroomShortData);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="  py-6 grid  sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-3 xl:grid-cols-4 justify-center sm:py-12">
      {mushroomShortData != null ? (
        <MushroomListShortData mushroomShortData={mushroomShortData} />
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Main;
