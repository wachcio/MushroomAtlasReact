import React from 'react';

function Loading() {
  return (
    <div className="container flex absolute h-full w-full top-0 m-0 p-0 justify-center items-center content-center">
      <span
        className="animate-ping t-20 h-20 w-20 rounded-full bg-green-400 opacity-75 t-50"
        viewBox="0 0 24 24"
      />
    </div>
  );
}

export default Loading;
