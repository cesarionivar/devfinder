import { useContext, useEffect } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import User from './components/User';
import { UserContext } from './context/UserContext';

const App = () => {
  const { userToSearch, setUser } = useContext(UserContext);

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`https://api.github.com/users/${userToSearch}`);
      const userData = await res.json();
      setUser(userData);
    };

    getUser();
  }, [userToSearch, setUser]);

  return (
    <div className='app'>
      <Header />
      <Search />
      <User />
    </div>
  );
};

export default App;
