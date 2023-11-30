import styled from 'styled-components';
import reset from 'styled-reset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Footer from './components/layouts/Footer';
import { Outlet } from 'react-router-dom';

function App() {
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

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ContentsWrapper>
          <Outlet />
        </ContentsWrapper>
        <Footer />
      </ThemeProvider>
    </Container>
  );
}

export default App;
