import React, { useContext, useEffect } from 'react';
import img404 from '../../img/404.png';
import { StoreContext } from '../../store/storeProvider';
import WrapperBackroundWhite from '../atoms/WrapperBackroundWhite';

const ErrorPage = () => {
  const { setIsLoaded } = useContext(StoreContext);
  useEffect(() => {
    setIsLoaded(true);
  });
  return (
    <div className="flex flex-center h-screen w-screen justify-center content-center">
      <WrapperBackroundWhite>
        <div className="flex flex-col flex-center justify-center content-center items-center">
          <div className="flex flex-col flex-center justify-center content-center items-center py-4 text-xl">
            <h1 className="text-8xl font-bold py-2">404</h1>
            <p>Niestety nie znaleziono strony.</p>
          </div>
          <img className="max-w-52 w-52" src={img404} alt="Error 404" />
        </div>
      </WrapperBackroundWhite>
    </div>
  );
};

export default ErrorPage;
