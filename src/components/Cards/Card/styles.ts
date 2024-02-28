import styled from "styled-components";

const CardContainer = styled.div`
  width: 384px;
  height: 416px;
  border: 2px solid #6d2ac0;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 204px;
    height: 224px;
  }

  @media screen and (max-width: 425px) {
    width: 96px;
    height: 124px;
  }
`;

const BackgroundImage = styled.div<{ imageUrl: string; isHovered: boolean }>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.imageUrl})`};
  filter: brightness(30%);
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.2);
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.h3`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;

  font-size: 32px;
  font-weight: 600;
  line-height: 40px; /* 125% */

  @media screen and (max-width: 768px) {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px; /* 133.333% */
  }

  @media screen and (max-width: 425px) {
    font-size: 12px;
    font-weight: 600;
    line-height: 24px; /* 200% */
  }
`;

export default { Title, CardContent, BackgroundImage, CardContainer };
