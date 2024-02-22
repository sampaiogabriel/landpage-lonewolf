import styled from "styled-components";

const Container = styled.div`
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 244px;

  gap: 8px;
`;

const ContentImagens = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;

  img {
    box-shadow: 1px 4px 18px -5px rgba(0, 0, 0, 0.61);
    -webkit-box-shadow: 1px 4px 18px -5px rgba(0, 0, 0, 0.61);
    -moz-box-shadow: 1px 4px 18px -5px rgba(0, 0, 0, 0.61);
  }
`;

export default { Container, ContentImagens };
