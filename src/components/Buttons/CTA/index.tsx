import { CSSProperties, FC } from "react";

import S from './styles'

interface CTAProps {
  id: string
  onClick?: (event: MouseEvent) => void;
  className?: string;
  children: string;
  style?: CSSProperties;
  href?: string;
}

export const CTA: FC<CTAProps> = ({ id, children, style, className, href }) => {
  return (
    <S.Container id={id} style={style} className={className} href={href}>
      <span>{children}</span>
    </S.Container>
  )
}
