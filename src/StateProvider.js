//setup daa layer
// add this to the basket

import React, { createContext, useContext, useReducer  } from "react";

// SET UP DATA LAYER
export const StateContext = createContext();
 

//BUILD A PROVIDER

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );

// use the following setup inside the component
export const useStateValue = () => useContext(StateContext)