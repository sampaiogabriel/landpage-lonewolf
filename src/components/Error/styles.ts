import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  color: white;

  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default { Container, Content };
