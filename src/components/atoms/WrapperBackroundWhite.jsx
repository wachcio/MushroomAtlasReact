import React from 'react';
import PropTypes from 'prop-types';

export default function WrapperBackroundWhite({ children }) {
  return (
    <div className="px-6 py-6 flex flex-auto flex-grow justify-center items-center">
      <div
        className="container px-1 py-1  bg-white shadow-lg sm:rounded-2xl sm:p-6 bg-clip-padding bg-opacity-50 border border-gray-200 text-justify break-words"
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
