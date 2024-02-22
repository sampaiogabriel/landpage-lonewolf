import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: #bfbfbf;

  gap: 8px;

  .direitos {
    color: #fff;
  }

  @media screen and (max-width: 425px) {
    padding: 0px 16px;
  }
`;

export default { Container };
