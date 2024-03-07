import styled from "styled-components";

const Container = styled.section`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 120px;
  padding: 64px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 32px;
  }

  @media screen and (max-width: 425px) {
    padding: 16px;
  }

  // Animação Scroll Reveal
  visibility: hidden;

  .primary {
    color: #6d2ac0;
  }
`;

const Video = styled.div`
  width: 100%;
  max-width: 479px;
`;

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #fff;

  text-align: end;
  max-width: 407px;

  h5 {
    color: #bfbfbf;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 425px) {
    h2 {
      font-size: 24px;
      font-weight: 600;
      line-height: 32px; /* 133.333% */
    }

    h5 {
      font-size: 10px;
      font-weight: 400;
    }
  }
`;

export default { Container, Content, Video, Headline };
