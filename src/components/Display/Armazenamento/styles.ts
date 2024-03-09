import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 16px;
  color: #fcfcfc;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 350px;
`;

export default { Container, Info };
