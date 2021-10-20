import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userToSearch, setUserToSearch] = useState('');
  const [checking, setChecking] = useState();

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        checking,
        userToSearch,
        setUserToSearch,
        setChecking,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
