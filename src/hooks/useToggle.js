import React, { useState } from "react";

const useToggle = (initValue) => {
  const [state, setState] = useState(initValue);

  const toggleState = () => {
    setState((prevState) => !prevState);
  };
  return [state, toggleState];
};

export default useToggle;
