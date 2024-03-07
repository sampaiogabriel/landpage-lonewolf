import { FC } from "react";
import { Versao } from "../../types/Produto";

import S from './styles'

interface SelecaoProdutoProps {
  versoes?: Versao[];
  onSelecionarProduto: (produto: string) => void;
}

const SelecaoProduto: FC<SelecaoProdutoProps> = ({ versoes, onSelecionarProduto }) => {
  return (
    <S.Container>
      {versoes?.map(versao => (
        <S.Produto onClick={() => onSelecionarProduto(versao.label)}>
          <img src={versao.src} />
          <small className="small">
            {versao.label}
          </small>
        </S.Produto>
      ))}
    </S.Container>
  )
}

export default SelecaoProduto;