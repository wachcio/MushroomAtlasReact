/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext } from 'react';
import useStateWithLabel from '../hooks/useStateWhitLabel';

export const StoreContext = createContext(null);

const StoreProvider = (props) => {
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
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
