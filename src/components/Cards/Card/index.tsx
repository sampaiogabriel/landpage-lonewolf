import { useState, FC, CSSProperties } from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  onClick?: () => void;
  style?: CSSProperties
}

import S from './styles'

const Card: FC<CardProps> = ({ imageUrl, title, onClick, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <S.CardContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={style}
    >
      <S.BackgroundImage imageUrl={imageUrl} isHovered={isHovered} />
      <S.CardContent>
        <S.Title>{title}</S.Title>
      </S.CardContent>
    </S.CardContainer>
  );
};

export default Card;
