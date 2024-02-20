import styled, { css } from "styled-components";

const Container = styled.section<{ isVisible: boolean }>`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #010103;
  background: linear-gradient(154deg, #010103 35.16%, #561cb2 100%);

  opacity: 0;
  pointer-events: none;
  transition: 0.5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: 0.7s;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }

      nav {
        transform: scale(1);
      }
    `}
`;

export default { Container };
