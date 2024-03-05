import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 40px;

  text-align: center;

  h1 {
    color: #fcfcfc;
    max-width: 384px;
    padding: 0px 8px;
  }

  h5 {
    color: #bfbfbf;
    max-width: 432px;
    padding: 0px 8px;
  }
`;

export default { Container, Content };
