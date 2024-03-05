import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Helmet } from "react-helmet";
import GlobalStyle from "./styles/global";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Helmet />
        <Header />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
