import { FC } from "react";
import { useParams } from "react-router-dom";
import ProdutoCatalogo from "../../layout/ProdutoCatalogo";
import { ProdutoType } from "../../types/Produto";

const ProdutoPage: FC = () => {
  const { produto } = useParams();
  const params = produto as ProdutoType;

  return <ProdutoCatalogo produtoSelecionado={params} />
}

export default ProdutoPage;