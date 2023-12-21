import './app.css';
import { motion } from 'framer-motion';
import { arrowDownVariant, buttonVariant } from './variants/variants';

import { HiArrowNarrowDown } from 'react-icons/hi';

const App = () => {
  return (
    <div className='App'>
      <motion.button
        variants={buttonVariant}
        initial='initial'
        whileHover='animate'
        className='App__button'
      >
        over afval{' '}
        <motion.div
          variants={arrowDownVariant}
          className='App__box-icon icon--2'
        >
          <HiArrowNarrowDown />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default App;
