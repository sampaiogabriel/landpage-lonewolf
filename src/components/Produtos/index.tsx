import { FC } from "react";

import S from './styles'
import NOSSOS_PRODUTOS from "../../consts/nossos-produtos";
import ProdutosCard from "../Cards/Produtos";

const Produtos: FC = () => {
  return (
    <S.Container>
      {NOSSOS_PRODUTOS.map(np => (<ProdutosCard {...np} />))}
    </S.Container>
  )
}

export default Produtos