import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'
import { Helmet } from 'react-helmet'
import GlobalStyle from '../../styles/global';


function Catalogo() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet />
    </ThemeProvider >
  )
}

export default Catalogo
