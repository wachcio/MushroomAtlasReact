import React from 'react';
import img404 from '../../img/404.png';

const ErrorPage = () => {
  return (
    <div className="flex flex-center">
      <div>
        <h1>404</h1>
        <p>Niestety nie znaleziono strony.</p>
      </div>
      <img src={img404} alt="Error 404" />
    </div>
  );
};

export default ErrorPage;
