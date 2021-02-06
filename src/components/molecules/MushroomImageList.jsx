import React, { useEffect } from 'react';
import useStateWithLabel from '../../hooks/useStateWhitLabel';
import MushroomImage from '../atoms/MushroomImage';

function MushroomImageList({ mushroom: { images, id, polishName } }) {
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

  return (
    <>
      <h1>Galeria:</h1>
      <div className="flex flex-col sm:flex-row sm:flex-wrap w-100 justify-center items-center">
        {imagesLinks != null &&
          imagesLinks.map((v, i) => (
            <MushroomImage
              patch={v}
              key={v}
              imageTitle={`${polishName} - zdjęcie ${i + 1}`}
            />
          ))}
      </div>
    </>
  );
}

export default MushroomImageList;
