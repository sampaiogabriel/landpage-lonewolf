import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 48px;
`;

const Content = styled.div`
  color: #fcfcfc;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 112px;

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
  }
`;

export default { Container, Content };
