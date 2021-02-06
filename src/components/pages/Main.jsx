import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../../store/storeProvider';

import { getShortDataMushroom } from '../../utils/API';

import MushroomListShortData from '../molecules/MushroomListShortData';

const Main = () => {
  const { mushroomShortData, setMushroomShortData } = useContext(StoreContext);

  useEffect(() => {
    if (!mushroomShortData) {
      (async () => {
        const data = await getShortDataMushroom();
        await setMushroomShortData(data);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mushroomShortData]);

  // useEffect(() => {
  //   console.log('mushroom Short Data2', mushroomShortData);
  // }, [mushroomShortData]);

  return (
    <div className="  py-6 grid  sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center sm:py-12">
      {mushroomShortData != null ? (
        <MushroomListShortData mushroomShortData={mushroomShortData} />
      ) : (
        <div className="flex absolute h-90 w-full justify-center items-center">
          <span
            className="animate-ping  h-20 w-20 rounded-full bg-green-400 opacity-75"
            viewBox="0 0 24 24"
          />
        </div>
      )}
    </div>
  );
};

export default Main;
