import React from "react";
import useGlobalState from "../reducer/reducer";
import AuthContext from "./context";



const GlobalStateProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={useGlobalState()}>
            {children}
        </AuthContext.Provider>
    )
};

export default GlobalStateProvider;