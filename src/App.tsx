import reset from 'styled-reset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Footer from './components/layouts/Footer';
import Shared from './pages/Shared';

function App() {
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

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Shared />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;
