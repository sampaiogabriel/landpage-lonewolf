import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 64px 112px;

  @media screen and (max-width: 1024px) {
    padding: 64px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }

  @media screen and (max-width: 425px) {
    padding: 32px;
  }

  // Animação Scroll Reveal
  visibility: hidden;
`;

const FraseDestaqueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 23px;
  max-width: 432px;

  img {
    max-width: 278px;
  }

  h1 {
    color: #fff;
  }

  h5 {
    color: #bfbfbf;
  }

  .primary {
    color: #6d2ac0;
  }

  .destaque {
    display: inline-block;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    text-align: center;

    .ctn-compre-agora {
      display: none;
    }
  }

  @media screen and (max-width: 425px) {
    max-width: 196px;

    h1 {
      font-size: 24px;
      font-weight: 600;
      line-height: 32px; /* 133.333% */
    }

    h5 {
      font-size: 10px;
      font-weight: 400;
      line-height: 16px; /* 160% */
    }
  }
`;

const ImagemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 534px;
    width: 100%;
  }

  .ctn-compre-agora {
    display: none;
  }

  @media screen and (max-width: 768px) {
    gap: 32px;

    .ctn-compre-agora {
      display: inline-block;
      width: 100%;
      max-width: 384px;
    }
  }

  @media screen and (max-width: 425px) {
    .ctn-compre-agora {
      width: 224px;

      span {
        font-family: "Work Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
      }
    }
  }
`;

export default { Container, Content, FraseDestaqueContainer, ImagemContainer };
