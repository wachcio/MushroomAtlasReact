import React, { useEffect } from 'react';
import useStateWithLabel from '../../hooks/useStateWhitLabel';
import MushroomImage from '../atoms/MushroomImage';

function MushroomImageList({ mushroom: { images, id } }) {
  const [imagesLinks, setImageslinks] = useStateWithLabel('imagesLinks', []);

  useEffect(() => {
    const arr = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= images; i++) {
      arr.push(`http://localhost:3000/api/v1/image/${id}/${i}`);
    }
    setImageslinks(arr);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return
  (
    <div>

        {imagesLinks != null && imagesLinks.map(v) => <MushroomImage props={v} key={v} }
    </div>
  );
}

export default MushroomImageList;


