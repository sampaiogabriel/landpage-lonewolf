import { useState } from "react";

import Produtos from "../consts/produtos";
import { Produto, ProdutoType } from "../types/Produto";

const useProduto = () => {
  const [produtos, setProdutos] = useState<Produto[]>(Produtos);

  const filtrarProdutos = (productType: ProdutoType) => {
    const filtered = produtos.filter(
      (product) => product.produto.toLowerCase() === productType.toLowerCase()
    );

    return filtered;
  };

  return { produtos, filtrarProdutos };
};

export default useProduto;
