/* eslint-disable no-template-curly-in-string */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { getApplicationInText } from '../../utils/mushroomApplication';
// import PropTypes from 'prop-types';

function ApplicationImage({ imageName }) {
  return (
    <img
      src={require(`../../img/application/${imageName}.svg`).default}
      alt={`Grzyb ${getApplicationInText(imageName)}`}
      title={`Grzyb ${getApplicationInText(imageName)}`}
      className="relative w-12 h-12"
    />
  );
}

// ApplicationImage.propTypes = {};

export default ApplicationImage;
