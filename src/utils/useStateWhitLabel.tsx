import { useState, useDebugValue } from 'react';

const useStateWithLabel = (name: any | null, initialValue: any | null) => {
  const [value, setValue] = useState(initialValue);
  useDebugValue(`${name}: ${value}`);
  return [value, setValue];
};
export default useStateWithLabel;
