import { FC } from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

const Helmet: FC = () => {
  const pageTitle = 'Panelas Mumbai - Elegância e Eficiência na Sua Cozinha';
  const pageDescription = 'Descubra a elegância e eficiência das Panelas Mumbai. Renove sua cozinha com nossas panelas de alta qualidade, projetadas para atender aos padrões dos chefs mais exigentes e dos amantes da culinária.';
  const pageKeywords = 'panelas, Mumbai, cozinha, elegância, eficiência, qualidade, culinária, chefs';
  const projectTitle = "Panelas Mumbai";
  const projectURL = "https://panelasmumbai.com"
  const projectLogoURL = "https://i.imgur.com/gIhiHJ2.png";

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

      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

    </ReactHelmet>
  );
};

export default Helmet;
