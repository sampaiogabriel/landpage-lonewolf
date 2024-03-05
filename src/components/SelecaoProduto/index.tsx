import { FC } from "react";

import S from './styles'

interface SelecaoProdutoProps {
  produto: string
}

const SelecaoProduto: FC<SelecaoProdutoProps> = ({ produto }) => {
  return (
    <S.Container>
      <S.Header>
        <h1 className="h1">
          {produto}
        </h1>
        <h5 className="h5 regular">
          Clique na versão desejada para mais detalhes
        </h5>
      </S.Header>
    </S.Container>
  )
}

export default SelecaoProduto;