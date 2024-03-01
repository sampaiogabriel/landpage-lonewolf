import styled from "styled-components";

const Container = styled.section`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 24px;

  text-align: center;
  padding: 64px 0px;

  color: #fff;

  @media screen and (max-width: 425px) {
    padding: 32px;
  }

  h2 {
    max-width: 480px;
    width: 100%;

    @media screen and (max-width: 425px) {
      max-width: 220px;
      width: 100%;

      font-size: 24px;
      font-weight: 600;
      line-height: 32px; /* 133.333% */
    }
  }

  h5 {
    color: #bfbfbf;
    max-width: 480px;
    width: 100%;

    @media screen and (max-width: 425px) {
      max-width: 220px;
      width: 100%;

      font-size: 12px;
      font-weight: 400;
      line-height: 24px; /* 200% */
    }
  }

  // Animação Scroll Reveal
  visibility: hidden;
`;

const CardPontoVendaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;

  margin-top: 16px;

  @media screen and (max-width: 425px) {
    margin-top: 8px;
    gap: 16px;
  }
`;

export default { Container, Content, CardPontoVendaContainer };
