import router from 'next/router';

export const redirectToPage = (path) => {
  router.replace(path);
};
