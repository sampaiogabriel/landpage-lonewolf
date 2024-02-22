import styled from "styled-components";

const Container = styled.a`
  border: 1px solid;
  overflow: hidden;
  position: relative;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;

  border-radius: 100px;
  border: 4px solid #fcfcfc;
  background: var(--Primary-Light, rgba(86, 28, 178, 0.4));
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  width: 432px;
  padding: 16px 24px;
  text-align: center;

  span {
    z-index: 20;
    font-size: 24px;
    font-weight: 600;
    color: #fcfcfc;
  }

  &:after {
    background: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }

  &:hover:after {
    left: 120%;
    transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

export default { Container };
