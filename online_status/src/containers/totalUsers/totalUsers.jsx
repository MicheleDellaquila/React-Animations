/* eslint-disable react/prop-types */
import './totalUsers.css';
import { motion } from 'framer-motion';
import { totalUsersVariant } from '../../assets/variants/variants';

const TotalUsers = ({ total }) => {
  return (
    <motion.div
      variants={totalUsersVariant}
      initial='initial'
      animate='animate'
      className='TotalUsers'
    >
      <p className='TotalUsers__text'>+{total}</p>
    </motion.div>
  );
};

export default TotalUsers;
