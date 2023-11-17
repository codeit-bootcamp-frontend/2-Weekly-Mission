export { getAccessToken };

class Fetcher {
  #baseURL;
  constructor({ baseURL }) {
    this.#baseURL = baseURL;
  }
  async post(url, userData) {
    const response = await fetch(`${this.#baseURL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      // error 처리 ?
      return;
    }
    const data = await response.json();
    return data;
  }
}

const fetcher = new Fetcher({ baseURL: 'https://bootcamp-api.codeit.kr/api' });

const getAccessToken = async (email, password) => {
  const userData = { email, password };
  const { data } = await fetcher.post('/sign-in', userData);
  localStorage.setItem('accessToken', data.accessToken);
};
