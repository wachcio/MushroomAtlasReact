/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import useStateWithLabel from '../../hooks/useStateWhitLabel';
// import MushroomImage from '../atoms/MushroomImage';

import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

// eslint-disable-next-line import/order
import { Gallery, Item } from 'react-photoswipe-gallery';

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
      <Gallery>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridTemplateRows: '1fr',
            gridGap: 12,
          }}
        >
          {imagesLinks != null &&
            imagesLinks.map((v, i) => (
              <Item
                original={v}
                thumbnail={v}
                // width="100%"
                // height="100%"
                // minWidth="1024"
                // minHheight="768"
                width="1024"
                height="768"
                key={v}
              >
                {({ ref, open }) => (
                  <img
                    style={{
                      cursor: 'pointer',
                      objectFit: 'cover',
                      width: 'auto',
                      maxHeight: '100%',
                    }}
                    ref={ref}
                    onClick={open}
                    src={v}
                    imageTitle={`${polishName} - zdjęcie ${i + 1}`}
                    alt={`${polishName} - zdjęcie ${i + 1}`}
                  />
                )}
              </Item>
            ))}
        </div>
      </Gallery>
    </>
  );
}

export default MushroomImageList;
