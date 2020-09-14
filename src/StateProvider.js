import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext(); //data layer lives here
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider> //it sets up the data layer
);
export const useStateValue = () => useContext(StateContext); //pull info from the data layer
//children is the app component
