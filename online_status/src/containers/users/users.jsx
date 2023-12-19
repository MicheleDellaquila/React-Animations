import './users.css';
import { AnimatePresence } from 'framer-motion';
import useUsers from './hook/useUsers';

import User from './user/user';
import TotalUsers from '../totalUsers/totalUsers';

const Users = () => {
  const { users, animationCompleteCount, handleAnimationComplete } = useUsers();

  return (
    <AnimatePresence>
      {users.length > 0 && (
        <>
          {users.map((user, index) => (
            <User
              key={user.id}
              index={users.length - index}
              i={index}
              photoUrl={user.photoUrl}
              onAnimationComplete={handleAnimationComplete}
            />
          ))}
          {animationCompleteCount === users.length && (
            <TotalUsers total={users.length} />
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default Users;
