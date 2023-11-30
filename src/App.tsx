import { useState, useEffect } from 'react';
import styled from 'styled-components';
import reset from 'styled-reset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import { Outlet } from 'react-router-dom';
import { User } from './utils/interfaces';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
${reset}

*{
box-sizing: border-box;
font-family: 'Pretendard';
}

html{
font-size: 10px;
}

body{
font-size: 1.4rem;
font-family: 'Pretendard';
}

a {
text-decoration: none;
}
`;

const ContentsWrapper = styled.div`
  flex: 1;
`;

function App() {
  const [user, setUser] = useState<User | null>(null);

  const getUser = async () => {
    try {
      const res = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser().then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header email={user?.email} profileImageSource={user?.profileImageSource} />
        <ContentsWrapper>
          <Outlet />
        </ContentsWrapper>
        <Footer />
      </ThemeProvider>
    </Container>
  );
}

export default App;
