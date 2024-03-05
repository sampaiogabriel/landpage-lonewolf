import styled from "styled-components";

const Divider = styled.div`
  max-width: 416px;
  width: 100%;
  height: 4px;
  border-radius: 100px;
  background: #bfbfbf;

  @media screen and (max-width: 425px) {
    width: 224px;
    height: 2px;
  }
`;

export default { Divider };
