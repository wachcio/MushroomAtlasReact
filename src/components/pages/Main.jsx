import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../../store/storeProvider';

import { getShortDataMushroom } from '../../utils/API';

import MushroomListShortData from '../molecules/MushroomListShortData';

const Main = () => {
  const { setIsLoaded } = useContext(StoreContext);
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
    <div className="py-6 grid  sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center sm:py-12">
      {mushroomShortData != null ? (
        <>
          {setIsLoaded(true)}
          <MushroomListShortData mushroomShortData={mushroomShortData} />
        </>
      ) : (
        setIsLoaded(false)
      )}
    </div>
  );
};

export default Main;
