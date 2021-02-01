import React from 'react';
import PropTypes from 'prop-types';

export default function WrapperBackroundWhite({ children }) {
  return (
    <div
      className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-50 border border-gray-200"
      style={{ backdropFilter: `blur(20px)` }}
    >
      {children}
    </div>
  );
}
WrapperBackroundWhite.propTypes = {
  children: PropTypes.node.isRequired,
};
