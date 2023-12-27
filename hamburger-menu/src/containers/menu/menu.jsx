import { links } from './links';
import './menu.css';
import clsx from 'clsx';

import Item from './item/item';

// eslint-disable-next-line react/prop-types
const Menu = ({ isOpen }) => {
  return (
    <div className={clsx('Menu', isOpen ? 'expanded' : 'closed')}>
      <ul className='Menu__list'>
        {links.map((link, index) => (
          <Item key={index} title={link.title} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
