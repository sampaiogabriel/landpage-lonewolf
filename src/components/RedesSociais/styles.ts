import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 8px;

  color: #fff;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    .svg {
      cursor: pointer;
      border-radius: 100%;
      border: 1px solid #fff;

      box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.61);
      -webkit-box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.61);
      -moz-box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.61);

      width: 32px;
      height: 32px;
    }
  }
`;

export default { Container };
