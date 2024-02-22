import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  html, body {
    margin: 0;
    padding: 0;
    background: #010103;
  }

  body {
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    background: #010103;
    background: linear-gradient(154deg, #010103 35.16%, #561CB2 100%);
    background-repeat: no-repeat;
  }

  body, input, textarea, button {
    font-family: 'Work Sans', sans-serif;
  }

  .max-width {
    max-width: 1216px;
    margin: 0 auto;
  }

  .h1 {
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px; /* 114.286% */
  }

  .h2 {
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px; /* 140% */
  }

  .h3 {
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px; /* 125% */
  }

  .h4 {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 133.333% */
  }

  .h5 {
    font-size: 16px;
    font-style: normal;
    line-height: 24px; /* 150% */
  }

  .semibold {
    font-weight: 600;
  }

  .regular {
    font-weight: 400;
  }

  .large {
    font-size: 14px;
    font-style: normal;
    line-height: 24px; /* 171.429% */
  }

  .medium {
    font-size: 12px;
    font-style: normal;
    line-height: 24px; /* 200% */
  }

  .footer {
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 160% */
  }

  .link {
    display: flex;
    color: #fcfcfc;
    line-height: 24px;
  }
`;
