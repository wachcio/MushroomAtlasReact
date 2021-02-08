/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../store/storeProvider';
import { getShortDataMushroom, getSlugDataMushroom } from '../../utils/API';
import useStateWithLabel from '../../hooks/useStateWhitLabel';
import WrapperBackroundWhite from '../atoms/WrapperBackroundWhite';
import ErrorPage from '../pages/ErrorPage';
import MushroomCardData from '../atoms/MushroomCardData';
import MushroomImageList from '../molecules/MushroomImageList';

export default function MushroomDetails({
  match: {
    params: { slug },
  },
}) {
  const { setIsLoaded } = useContext(StoreContext);
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
    }
  }, [
    mushroomShortData,
    setCurrentMushroom,
    setIsCorrectSlug,
    setMushroomShortData,
    slug,
  ]);

  return (
    <div>
      {mushroomShortData != null && isCorrectSlug != null ? (
        isCorrectSlug ? (
          currentMushroom != null ? (
            <WrapperBackroundWhite>
              {setIsLoaded(true)}
              <MushroomCardData mushroom={currentMushroom} />
              {currentMushroom.images > 0 && (
                <MushroomImageList mushroom={currentMushroom} />
              )}
            </WrapperBackroundWhite>
          ) : (
            setIsLoaded(false)
          )
        ) : (
          <WrapperBackroundWhite>
            <ErrorPage />
          </WrapperBackroundWhite>
        )
      ) : (
        setIsLoaded(false)
      )}
    </div>
  );
}
