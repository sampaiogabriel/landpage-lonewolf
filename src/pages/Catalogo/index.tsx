import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'
import { Helmet } from 'react-helmet'
import GlobalStyle from '../../styles/global';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import CatalogoProdutos from '../../layout/CatalogoProdutos';


function Catalogo() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet />
      <Header />
      <CatalogoProdutos />
      <Footer />
    </ThemeProvider >
  )
}

export default Catalogo
