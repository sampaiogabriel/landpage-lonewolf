import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 96px;
  padding: 4px;
`;

const ContainerImg = styled.div`
  img {
    width: 100%;
    max-width: 400px;
  }
`;

const ContainerInfo = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 32px;

  h2 {
    color: #fcfcfc;
  }
`;

const ContainerWhatsapp = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default { Container, ContainerImg, ContainerInfo, ContainerWhatsapp };
