import React,{useReducer,useContext,createContext} from "react";

//prepare data layer
export const Contex = createContext();


//provid the data layer
export const StateProvider =({reducer, intialstate, children}) => (
    <Contex.Provider value={useReducer(reducer, intialstate)}>
        {children}
    </Contex.Provider>
);

//pull information form data layer\
export const useStateValue =() => useContext(Contex);