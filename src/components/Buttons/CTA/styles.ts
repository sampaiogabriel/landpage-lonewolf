import styled from "styled-components";

const Container = styled.a`
  position: relative;
  overflow: hidden;
  display: inline-block;
  border: 1px solid;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  width: 432px;

  border-radius: 100px;
  border: 4px solid #fcfcfc;
  background: var(--Primary-Light, rgba(86, 28, 178, 0.4));
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  text-align: center;

  span {
    position: relative;
    z-index: 2;
    display: block;
    padding: 10px 20px;

    /* Header/H4 */
    font-family: "Work Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 133.333% */
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0.2;
    z-index: 1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s ease;
  }

  &:hover {
    background-color: #fff;
    color: #6d2ac0;

    &:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

export default { Container };
