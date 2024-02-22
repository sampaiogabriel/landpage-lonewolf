import { CSSProperties, FC, MouseEventHandler, ReactNode } from "react"

import S from './styles'

interface ButtonSecondaryProps {
  id: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: string | ReactNode;
  style?: CSSProperties;
}

const ButtonSecondary: FC<ButtonSecondaryProps> = ({ id, onClick, children, style }) => {
  return <S.Container id={id} onClick={onClick} style={style}>{children}</S.Container>
}

export default ButtonSecondary