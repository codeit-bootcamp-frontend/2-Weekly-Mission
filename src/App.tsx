import reset from 'styled-reset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './components/Header';
import Shared from './pages/Shared';

function App() {
  const GlobalStyle = createGlobalStyle`
  ${reset}

  html{
    font-size: 10px;
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
      </ThemeProvider>
    </>
  );
}

export default App;
