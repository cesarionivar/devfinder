const Header = () => {
  const handleTheme = () => {
    document.getElementsByTagName('body')[0].classList.toggle('light');
  };

  return (
    <div className='header'>
      <div className='header__logo'>
        <h1>devfinder</h1>
      </div>
      <div className='header__theme'>
        <button onClick={handleTheme} className='btn'>
          <i className='fas fa-adjust'></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
