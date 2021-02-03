import React from 'react';

function IsLegallyProtected() {
  return (
    <img
      src={require(`../../img/application/isLegallyProtected.svg`).default}
      alt="Grzyb chroniony w Polsce"
      title="Grzyb chroniony w Polsce"
      className="relative w-12 h-12"
    />
  );
}

export default IsLegallyProtected;
