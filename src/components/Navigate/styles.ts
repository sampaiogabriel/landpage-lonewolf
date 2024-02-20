import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;

  .menu-mobile {
    display: none;
  }

  /* Estilos para resolução móvel */
  @media screen and (max-width: 768px) {
    .menu-mobile {
      display: flex;
      cursor: pointer;
    }

    .link {
      display: none;
    }
  }
`;

export default { Nav };
