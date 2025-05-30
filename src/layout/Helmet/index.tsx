import { FC } from "react";
import { Helmet as ReactHelmet } from "react-helmet";

const Helmet: FC = () => {
  const pageTitle = "Lonewolf";
  const pageDescription =
    "Descubra a tecnologia e inovação da Lonewolf Importados. Renove sua vida com produtos da Apple de alta qualidade, projetados para atender aos mais altos padrões de tecnologia e estilo.";
  const pageKeywords =
    "Lonewolf, importação, produtos, Apple, tecnologia, inovação, qualidade";
  const projectTitle = "Lonewolf Importados";
  const projectURL = "";
  const projectLogoURL = "https://i.imgur.com/E2VI5TR.png";

  return (
    <ReactHelmet>
      {/* <link rel="icon" href={Favicon} /> */}
      {/* <!-- HTML Meta Tags --> */}
      <meta name="description" content={pageDescription} />
      <meta name="author" content={projectTitle} />
      <meta name="keywords" content={pageKeywords} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={projectURL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={projectLogoURL} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={projectURL} />
      <meta property="twitter:url" content={projectURL} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={projectLogoURL} />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
    </ReactHelmet>
  );
};

export default Helmet;
