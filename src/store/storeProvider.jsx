/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext } from 'react';
import useStateWithLabel from '../utils/useStateWhitLabel';

export const StoreContext = createContext(null);

const StoreProvider = (props) => {
  // User data
  const [userData, setUserData] = useStateWithLabel('userData', {
    username: null,
    email: null,
    isLogged: false,
    token: null,
  });
  const [mushroomShortData, setMushroomShortData] = useStateWithLabel(
    'mushroomShortData',
    [
      {
        anotherNames: null,
        application: null,
        id: null,
        polishName: null,
        scientificName: null,
        slug: null,
      },
    ],
  );
  return (
    <StoreContext.Provider
      value={{
        userData,
        setUserData,
        mushroomShortData,
        setMushroomShortData,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
