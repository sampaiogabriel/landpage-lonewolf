import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 32px;

  // Animação Scroll Reveal
  visibility: hidden;

  @media screen and (max-width: 768px) {
    padding: 16px;
  }

  @media screen and (max-width: 425px) {
    padding: 16px 8px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  max-width: 432px;

  h1 {
    color: #fcfcfc;
    text-align: center;
  }

  h5 {
    color: #bfbfbf;
    text-align: center;
  }
`;

const ContainerVitrine = styled.div``;

const ContainerButton = styled.div`
  padding: 64px 0px;
`;

export default {
  Container,
  Content,
  Header,
  ContainerVitrine,
  ContainerButton,
};
