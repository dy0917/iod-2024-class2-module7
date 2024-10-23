import React, { useState, useContext } from "react";

const ServerContext = React.createContext();

// Use it in App.jsx like <UserProvider>...</UserProvider>
export const ServerProvider = (props) => {
  const url = "this is a url";
  // 2. Provide the context.
  // The Provider component of any context (UserContext.Provider)
  // sends data via its value prop to all children at every level.
  // We are sending both the current user and an update function
  return (
    <ServerContext.Provider value={{ url }}>
      {props.children}
    </ServerContext.Provider>
  );
};
// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useServerContext = () => {
  return useContext(ServerContext);
};
