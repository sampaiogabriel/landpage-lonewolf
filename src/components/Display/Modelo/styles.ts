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

  max-width: 350px;
  width: 100%;
`;

export default { Container, Info };
