import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 64px 0px;
`;

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 36px;
  max-width: 432px;
  width: 100%;

  text-align: center;

  h1 {
    color: #fcfcfc;
  }

  h5 {
    color: #bfbfbf;
  }
`;

const ContainerProdutos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;

  padding: 16px;
`;

export default { Container, Content, Headline, ContainerProdutos };
