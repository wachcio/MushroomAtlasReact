import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../store/storeProvider';
import { getShortDataMushroom } from '../../utils/API';

export default function MushroomDetails({
  match: {
    params: { slug },
  },
}) {
  const { mushroomShortData } = useContext(StoreContext);

  useEffect(() => {
    if (mushroomShortData != null) {
      if (mushroomShortData.lenght) {
        const isCorrectSlug = mushroomShortData.find(
          (element) => element.slug === slug,
        );
        console.log('slug:', isCorrectSlug);
      }
    } else {
      (async () => {
        let isCorrectSlug = null;

        getShortDataMushroom();
        // setMushroomShortData(data);
        await console.log(mushroomShortData);

        isCorrectSlug = mushroomShortData.find(
          (element) => element.slug === slug,
        );
        console.log(isCorrectSlug);
        if (!isCorrectSlug) {
          console.log('slug niepoprawny');
        } else {
          console.log('slug znaleziony');
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <div>
      <p>Szczegóły o grzybie o slug: {slug}</p>
    </div>
  );
}
