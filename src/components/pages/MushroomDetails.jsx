/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../store/storeProvider';
import { getShortDataMushroom, getSlugDataMushroom } from '../../utils/API';
import useStateWithLabel from '../../utils/useStateWhitLabel';
import WrapperBackroundWhite from '../atoms/WrapperBackroundWhite';
import ErrorPage from '../pages/ErrorPage';
import MushroomCardData from '../atoms/MushroomCardData';

export default function MushroomDetails({
  match: {
    params: { slug },
  },
}) {
  const { mushroomShortData, setMushroomShortData } = useContext(StoreContext);
  const [isCorrectSlug, setIsCorrectSlug] = useStateWithLabel(
    'isCorrectSlug',
    null,
  );
  const [currentMushroom, setCurrentMushroom] = useStateWithLabel(
    'currentMushroom',
    null,
  );

  useEffect(() => {
    if (mushroomShortData == null) {
      (async () => {
        const data = await getShortDataMushroom();
        await setMushroomShortData(data);
      })();
    } else {
      (async () => {
        const data = await getSlugDataMushroom(slug);

        await setCurrentMushroom(data);
      })();
      setIsCorrectSlug(
        Boolean(
          mushroomShortData.findIndex((element) => element.slug === slug) + 1,
        ),
      );
      //   setCurrentMushroom(
      //     mushroomShortData.find((element) => element.slug === slug),
      //   );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mushroomShortData]);

  useEffect(() => {
    console.log('isCorrectSlug', isCorrectSlug);
    if (!isCorrectSlug) {
      console.log('slug niepoprawny');
    } else {
      console.log('slug znaleziony');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCorrectSlug]);

  return (
    <div>
      <WrapperBackroundWhite>
        {mushroomShortData != null && isCorrectSlug != null ? (
          isCorrectSlug ? (
            currentMushroom != null ? (
              <MushroomCardData mushroom={currentMushroom} />
            ) : (
              <p>Loading</p>
            )
          ) : (
            <ErrorPage />
          )
        ) : (
          <p>Loading</p>
        )}
      </WrapperBackroundWhite>
    </div>
  );
}
