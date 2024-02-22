import styled from "styled-components";

const Container = styled.button`
  background-color: transparent;
  border-radius: 100px;
  border: 2px solid #bfbfbf;
  color: #bfbfbf;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  /* Body/Large/Semibold */
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 171.429% */

  text-align: center;
  padding: 8px 24px;

  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export default { Container };
