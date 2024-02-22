import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 32px;
  padding: 64px 0px;
  color: #fff;

  @media screen and (max-width: 425px) {
    h2 {
      /* Header/H4 */
      font-family: "Work Sans";
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px; /* 133.333% */
    }
  }
`;

const WhatsappContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  span {
    color: #bfbfbf;
  }
`;

export default { Container, Content, WhatsappContainer };
