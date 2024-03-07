/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import ScrollReveal from 'scrollreveal';

import S from './styles'
import { Produto, ProdutoType, Versao } from "../../types/Produto";
import useProduto from "../../hooks/useProdutos";
import SelecaoProduto from "../../components/SelecaoProdutos";
import VitrineProdutos from "../../components/VitrineProdutos";
import ButtonSecondary from "../../components/Buttons/Secondary";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface ProdutoProps {
  produtoSelecionado: ProdutoType
}

const ProdutoCatalogo: FC<ProdutoProps> = ({ produtoSelecionado }) => {
  const { filtrarProdutos, selecionarProduto } = useProduto();
  const [produto, setProduto] = useState<Produto>();
  const [versao, setVersao] = useState<Versao>();
  const navigate = useNavigate();

  useEffect(() => {
    const prod = filtrarProdutos(produtoSelecionado);
    setProduto(prod);
    setVersao(prod?.versoes[0]);
  }, [produtoSelecionado]);

  useEffect(() => {
    ScrollReveal({ reset: true }).reveal('.catalogo-produto', { duration: 1000 });
  }, []);

  const handleSelecionarProduto = (produto: string) => {
    setVersao(selecionarProduto(produtoSelecionado, produto))
  }

  const handleClickVoltarCatalogo = () => {
    return navigate('/catalogo');
  }

  return (
    <S.Container>
      <S.Content className="max-width catalogo-produto">
        <S.Header>
          <h1 className="h1">
            {produto?.label}
          </h1>
          <h5 className="h5 regular">
            Clique na versão desejada para mais detalhes
          </h5>
        </S.Header>
        <SelecaoProduto versoes={produto?.versoes} onSelecionarProduto={handleSelecionarProduto} />
        <S.ContainerVitrine>
          <VitrineProdutos produto={versao} />
        </S.ContainerVitrine>
        <S.ContainerButton>
          <ButtonSecondary id="voltar-para-catalogo" onClick={handleClickVoltarCatalogo}>
            <InfoCircleOutlined /> Voltar para Catálogo
          </ButtonSecondary>
        </S.ContainerButton>
      </S.Content>
    </S.Container>
  )
}

export default ProdutoCatalogo;