import reset from 'styled-reset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Shared from './pages/Shared';

function App() {
  const GlobalStyle = createGlobalStyle`
  ${reset}

  html{
    font-size: 10px;
  }

  body{
    font-size: 1.4rem;
    font-family: 'Pretendard';
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Shared />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
