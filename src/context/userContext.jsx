import React, { useState, useContext } from "react";
import { useServerContext } from "./serverContext";

const UserContext = React.createContext();

// Use it in App.jsx like <UserProvider>...</UserProvider>
export const UserProvider = (props) => {
  // store the current user in state at the top level
  const [currentUser, setCurrentUser] = useState({});
  const { url } = useServerContext();
  console.log("url", url);
  // sets user object in state, shared via context
  const handleUpdateUser = (user) => {
    console.log("url", url);
    setCurrentUser(user);
  };
  const tempValue = "this is a value";
  // 2. Provide the context.
  // The Provider component of any context (UserContext.Provider)
  // sends data via its value prop to all children at every level.
  // We are sending both the current user and an update function
  return (
    <UserContext.Provider value={{ currentUser, handleUpdateUser, tempValue }}>
      {props.children}
    </UserContext.Provider>
  );
};
// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useUserContext = () => {
  return useContext(UserContext);
};
