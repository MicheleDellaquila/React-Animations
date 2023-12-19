import { useEffect, useState } from 'react';
import User1 from '../../../assets/images/user-2.jpg';
import User2 from '../../../assets/images/user-1.jpg';

const useUsers = () => {
  const [animationCompleteCount, setAnimationCompleteCount] = useState(0);
  const [users, setUser] = useState([]);

  // add new user's photo
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setUser([
        { id: '01', photoUrl: User1 },
        { id: '02', photoUrl: User2 },
      ]);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleAnimationComplete = () => {
    setAnimationCompleteCount((count) => count + 1);
  };

  return { users, animationCompleteCount, handleAnimationComplete };
};

export default useUsers;
