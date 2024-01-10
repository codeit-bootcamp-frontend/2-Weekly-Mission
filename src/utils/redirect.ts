import router from 'next/router';

export function redirectToIfAccessTokenExists(destination: string) {
  const accessToken = window.localStorage.getItem('data1');
  if (accessToken) {
    router.push(destination);
  }
}
