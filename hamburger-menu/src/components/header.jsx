import { useState } from 'react';
import './header.css';
import clsx from 'clsx';
import Menu from '../containers/menu/menu';

const Header = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <header className='Header'>
      <div
        className='Header__inner'
        onClick={() => setShowHamburgerMenu((prev) => !prev)}
      >
        <span className={clsx('Header__line', showHamburgerMenu && 'open')} />
        <span className={clsx('Header__line', showHamburgerMenu && 'open')} />
        <span className={clsx('Header__line', showHamburgerMenu && 'open')} />
      </div>
      <Menu isOpen={showHamburgerMenu} />
    </header>
  );
};

export default Header;
