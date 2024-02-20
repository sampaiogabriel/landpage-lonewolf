import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'
import { Helmet } from 'react-helmet'
import GlobalStyle from '../../styles/global';
import Header from '../../layout/Header';
import Headline from '../../layout/Headline';
import NossosProdutos from '../../layout/NossosProdutos';
import PontosVendas from '../../layout/PontosVendas';
import Footer from '../../layout/Footer';
import Video from '../../layout/Video';


function Inicio() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet />
      <Header />
      <Headline />
      <Video />
      <NossosProdutos />
      <PontosVendas />
      <Footer />
    </ThemeProvider >
  )
}

export default Inicio
