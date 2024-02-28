import { FC } from "react";

import S from './styles'

import LogoCatalogo from '../../assets/logo_catalogo.png'
import CATALOGO_CARDS from "../../consts/catalogo-cards";
import Card from "../../components/Cards/Card";

const CatalogoProdutos: FC = () => {


  return (<S.Container>
    <S.Content className="max-width">
      <img src={LogoCatalogo} alt="Logo Catálogo" />
      <S.Headline>
        <h1 className="h1">
          Catálogo de Produtos
        </h1>
        <h5 className="h5 regular">
          Frase de Destaque para descrever os catálogos da loja LoneWolf.
        </h5>
      </S.Headline>
      <S.ContainerProdutos>
        {CATALOGO_CARDS.map(({ id, label, background }) =>
          <Card key={id} title={label} imageUrl={background} style={{ width: '384px', height: '416px' }} />
        )}
      </S.ContainerProdutos>
    </S.Content>
  </S.Container>)
}

export default CatalogoProdutos;