import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  gap: 16px;
  color: #fcfcfc;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const EspecificacoesInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  align-items: flex-start;
  justify-content: flex-start;
`;

const EspecificacaoInfo = styled.div`
  max-width: 400px;
  width: 100%;

  span {
    margin-left: 4px;
  }
`;

export default { Container, Info, EspecificacoesInfo, EspecificacaoInfo };
