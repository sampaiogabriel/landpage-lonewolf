import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  padding: 4px;

  flex-wrap: wrap;
`;

const ContainerTitle = styled.div`
  width: 100%;
  min-width: 400px;

  @media screen and (max-width: 768px) {
    text-align: center;
    min-width: auto;
  }
`;

const ContainerImg = styled.div`
  padding: 64px 32px;

  img {
    max-width: 400px;
    width: 100%;
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

export default {
  Container,
  ContainerTitle,
  ContainerImg,
  ContainerInfo,
  ContainerWhatsapp,
};
