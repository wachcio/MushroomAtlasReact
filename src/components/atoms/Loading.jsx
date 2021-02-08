import React, { useContext } from 'react';
import { StoreContext } from '../../store/storeProvider';

function Loading() {
  const { isLoaded } = useContext(StoreContext);
  return (
    !isLoaded && (
      <div className="flex fixed h-screen w-screen t-0 l-0 p-0 m-0 justify-center items-center content-center z-50">
        <span
          className="animate-ping t-20 h-20 w-20 rounded-full bg-green-400 opacity-75 t-50"
          viewBox="0 0 24 24"
        />
      </div>
    )
  );
}

export default Loading;
