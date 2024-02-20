import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'
import { Helmet } from 'react-helmet'
import GlobalStyle from '../../styles/global';
import Error from '../../components/Error';

function ErrorPage() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet />
      <Error />
    </ThemeProvider >
  )
}

export default ErrorPage
