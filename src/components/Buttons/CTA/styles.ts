import styled from "styled-components";

const Container = styled.button`
  color: #fff;
  border-radius: 100px;
  border: 4px solid #fcfcfc;
  background: rgba(86, 28, 178, 0.4);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  cursor: pointer;
  width: 432px;
  padding: 0.5rem 1rem;

  background-image: linear-gradient(
    -60deg,
    transparent 0%,
    transparent 40%,
    #ffffff44 40%,
    #ffffff44 60%,
    transparent 60%,
    transparent 100%
  );

  background-size: 200% 100%;
  background-repeat: no-repeat;
  background-position-x: 150%;

  &:hover {
    background-position-x: -150%;
    transition: background-position-x 1500ms;
  }

  span {
    /* Header/H4 */
    font-family: "Work Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 133.333% */
  }
`;

export default { Container };
