export const buttonVariant = {
  initial: {
    boxShadow: 'none',
  },
  animate: {
    boxShadow: '0 8px 8px #eeeeee',
    transition: {
      ease: 'easeInOut',
    },
  },
};

export const arrowDownVariant = {
  initial: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: [0, 8, 8, -12, -12, 0],
    opacity: [1, 0, 0, 0, 0, 1],
    transition: {
      times: [0, 0.25, 0.3, 0.5, 0.65, 1],
      duration: 0.5,
      ease: 'linear',
    },
  },
};
