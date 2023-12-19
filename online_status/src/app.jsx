import './app.css';
import { motion } from 'framer-motion';
import { statusIconVariant } from './assets/variants/variants';

// components
import { MdKeyboardArrowDown } from 'react-icons/md';
import Users from './containers/users/users';

const App = () => {
  return (
    <div className='App'>
      <motion.div
        className='App__inner'
        layout
        transition={{ layout: { duration: 1 } }}
      >
        <motion.p className='App__status'>
          <motion.span
            variants={statusIconVariant}
            initial='initial'
            animate='animate'
            className='App__status-icon'
          />
          Online
        </motion.p>
        <Users />
        <MdKeyboardArrowDown className='App__icon' />
      </motion.div>
    </div>
  );
};

export default App;
