import { useState } from "react";

import Produtos from "../consts/produtos";
import { Produto, ProdutoType, Versao } from "../types/Produto";

const useProduto = () => {
  const [produtos] = useState<Produto[]>(Produtos);

  const filtrarProdutos = (productType: ProdutoType): Produto | undefined => {
    const filtered = produtos.find(
      (product) => product.produto.toLowerCase() === productType.toLowerCase()
    );

    return filtered;
  };

  const selecionarProduto = (
    productType: ProdutoType,
    nomeProduto: string
  ): Versao | undefined => {
    const produto = filtrarProdutos(productType);

    if (produto) {
      const versaoEncontrada = produto.versoes.find(
        (versao) => versao.label.toLowerCase() === nomeProduto.toLowerCase()
      );

      return versaoEncontrada;
    }

    return undefined;
  };

  return { produtos, filtrarProdutos, selecionarProduto };
};

export default useProduto;
