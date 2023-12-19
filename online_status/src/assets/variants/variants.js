export const statusIconVariant = {
  initial: {
    opacity: 1,
    scale: 1,
  },
  animate: {
    opacity: [1, 0.6, 1],
    scale: [1, 0.8, 1],
    transition: {
      ease: 'linear',
      duration: 2,
      repeat: Infinity,
    },
  },
};

export const userVariant = {
  initial: {
    y: 100,
    marginLeft: 0,
  },
  animate: (index) => ({
    y: [100, 0, 0],
    marginLeft: index >= 1 && [-8, -16, -32],
    transition: {
      ease: 'easeIn',
      duration: 1,
      delay: index * 1.1,
      delayChildren: index * 1,
      marginLeft: {
        ease: 'linear',
        delay: index + 1 * 1.1,
      },
    },
  }),
};

export const circleVariant = {
  initial: {
    opacity: 0,
    rotate: 0,
  },
  animate: (index) => ({
    opacity: [1, 1, 1, 0],
    rotate: index % 2 === 0 ? [0, 360, 580, 580] : [0, 360, 720, 720],
    transition: {
      times: [0, 0.4, 0.8, 1],
      ease: 'linear',
      duration: 1,
    },
  }),
};

export const totalUsersVariant = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeIn',
      duration: 0.75,
      delay: 0.25,
    },
  },
};
