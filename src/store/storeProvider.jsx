/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext } from 'react';
import useStateWithLabel from '../hooks/useStateWhitLabel';

export const StoreContext = createContext(null);

const StoreProvider = (props) => {
  const [isLoaded, setIsLoaded] = useStateWithLabel('isLoaded', false);
  // User data
  const [userData, setUserData] = useStateWithLabel('userData', {});
  const [mushroomShortData, setMushroomShortData] = useStateWithLabel(
    'mushroomShortData',
    null,
  );
  return (
    <StoreContext.Provider
      value={{
        userData,
        setUserData,
        mushroomShortData,
        setMushroomShortData,
        isLoaded,
        setIsLoaded,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
