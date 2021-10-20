import { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import Header from './components/Header';
import Loader from './components/Loader';
import Search from './components/Search';
import User from './components/User';
import { UserContext } from './context/UserContext';

const App = () => {
  const { user, userToSearch, checking, setUser, setChecking } =
    useContext(UserContext);

  useEffect(() => {
    const getUser = async () => {
      if (!userToSearch) return;
      const res = await fetch(`https://api.github.com/users/${userToSearch}`);

      if (res.status !== 200) {
        return Swal.fire(
          'User not found',
          'This username could not be found',
          'warning'
        );
      }
      const userData = await res.json();

      // Show spinner
      setChecking(true);

      setUser(userData);

      // Hide spinner
      setTimeout(() => {
        setChecking(false);
      }, 1000);
    };

    getUser();
  }, [userToSearch, setUser]);

  return (
    <div className='app'>
      <Header />
      <Search />

      {user ? (
        <>{checking ? <Loader /> : <User />}</>
      ) : (
        <h3>Start looking for a user to display information...</h3>
      )}
    </div>
  );
};

export default App;
