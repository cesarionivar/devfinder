import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userToSearch, setUserToSearch] = useState('cesarionivar');

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userToSearch,
        setUserToSearch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
