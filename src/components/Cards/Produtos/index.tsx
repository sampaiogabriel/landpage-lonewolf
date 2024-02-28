import { FC } from "react";

import S from './styles'

interface ProdutosCardProps {
  label: string;
  src: string;
}

const ProdutosCard: FC<ProdutosCardProps> = ({ label, src }) => {
  return (
    <S.Container>
      <img src={src} alt={label} />
      <small className="small regular">{label}</small>
    </S.Container>
  )
}

export default ProdutosCard