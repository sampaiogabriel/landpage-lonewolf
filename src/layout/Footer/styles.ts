import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  max-width: 416px;
  padding-bottom: 64px;

  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const Links = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  padding: 2px;
`;

export default { Container, Content, Links };
