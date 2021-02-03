import React from 'react';
import PropTypes from 'prop-types';

export default function WrapperBackroundWhite({ children }) {
  return (
    <div className=" px-6 py-6 flex flex-auto flex-grow justify-center items-center">
      <div
        className="container relative px-2 py-2  bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-50 border border-gray-200"
        style={{ backdropFilter: `blur(20px)` }}
      >
        {children}
      </div>
    </div>
  );
}
WrapperBackroundWhite.propTypes = {
  children: PropTypes.node.isRequired,
};
