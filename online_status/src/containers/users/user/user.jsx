/* eslint-disable react/prop-types */
import './user.css';
import { motion } from 'framer-motion';
import { userVariant, circleVariant } from '../../../assets/variants/variants';

const User = ({ index, i, photoUrl, onAnimationComplete }) => {
  return (
    <motion.div
      layout='position'
      custom={i}
      variants={userVariant}
      initial='initial'
      animate='animate'
      style={{ '--index': index }}
      className='User'
      onAnimationComplete={onAnimationComplete}
    >
      <motion.div
        custom={i}
        variants={circleVariant}
        className='User__border'
      />
      <img className='User__image' src={photoUrl} alt={`user-${i}`} />
    </motion.div>
  );
};

export default User;
