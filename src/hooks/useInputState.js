import React, { useState } from "react";

const useInputState = (initValue) => {
  const [state, setState] = useState(initValue);

  const updateState = (e) => {
    setState(e.target.value);
  };

  const clearState = () => {
    setState("");
  };

  return [state, updateState, clearState];
};

export default useInputState;
