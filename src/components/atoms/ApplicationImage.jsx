/* eslint-disable no-template-curly-in-string */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { getApplicationInText } from '../../utils/mushroomApplication';
// import PropTypes from 'prop-types';

function ApplicationImage({ imageName }) {
  //   const img = require(`../../img/application/${imageName}.svg`);
  console.log(imageName);
  console.log(require('../../img/application/edible.svg').default);

  return (
    <img
      src={require(`../../img/application/${imageName}.svg`).default}
      alt={getApplicationInText(imageName)}
      title={getApplicationInText(imageName)}
      className="relative w-12 h-12"
    />
  );
}

// ApplicationImage.propTypes = {};

export default ApplicationImage;
