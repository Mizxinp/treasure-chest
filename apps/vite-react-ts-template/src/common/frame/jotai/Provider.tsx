import React, { createElement, FC, useReducer, useRef } from "react";
import { createStore } from ".";
import { JotaiContext } from "./context";
import { reducer } from "./reducer";

const Provider: FC<{children: any, store?: any}> = ({ children, store }) => {
  const storeRef = useRef();
  storeRef.current = store || createStore();
  // console.log('jj', storeRef.current);
  

  return createElement(
    JotaiContext.Provider,
    { value: storeRef.current },
    children
  );
};

export default Provider;
