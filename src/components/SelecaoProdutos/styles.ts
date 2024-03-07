import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;

  width: 100%;
  gap: 24px;

  padding: 32px;

  @media screen and (max-width: 425px) {
    flex-wrap: wrap;
  }
`;

const Produto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;

  cursor: pointer;

  img {
    width: 100%;
    max-width: 104px;

    transition: filter 0.2s ease;

    &:hover {
      -webkit-filter: drop-shadow(4px 4px 4px #561cb4);
      filter: drop-shadow(4px 4px 4px #561cb2);
    }
  }

  small {
    color: #fcfcfc;
    text-align: center;
  }
`;

export default { Container, Produto };
