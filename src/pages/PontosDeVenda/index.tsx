import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'
import { Helmet } from 'react-helmet'
import GlobalStyle from '../../styles/global';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import PontosVendas from '../../layout/PontosVendas';


function PontosDeVenda() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet />
      <Header />
      <PontosVendas />
      <Footer />
    </ThemeProvider >
  )
}

export default PontosDeVenda
