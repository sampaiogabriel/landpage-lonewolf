import { CSSProperties, FC } from "react";

import S from './styles'

interface CTAProps {
  id: string
  onClick?: () => void;
  className?: string;
  children: string;
  style?: CSSProperties;
}

export const CTA: FC<CTAProps> = ({ id, children, style, className, onClick }) => {
  return (
    <S.Container id={id} style={style} className={className} onClick={onClick}>
      <span>{children}</span>
    </S.Container>
  )
}
