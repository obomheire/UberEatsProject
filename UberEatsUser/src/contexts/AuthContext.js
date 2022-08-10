import { createContext, useState, useContext } from "react";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthuser] = useState(null);
  // const [dbUser, setDbuser] = useState(null);
  const [dbUser, setDbuser] = useState(true); // This is a temporary fix in order to access the Restaurant page otherwise we would be directed to the profile/signup page because we have not created a database that will hold dbUser. This condition is set in the navigation - index.js

  return (
    <AuthContext.Provider value={{ authUser, dbUser, setDbuser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
