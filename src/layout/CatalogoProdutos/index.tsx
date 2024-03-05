import { FC, useEffect } from "react";
import ScrollReveal from 'scrollreveal';

import S from './styles'

import LogoCatalogo from '../../assets/logo_catalogo.png'
import CATALOGO_CARDS from "../../consts/catalogo-cards";
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";

const CatalogoProdutos: FC = () => {
  useEffect(() => {
    ScrollReveal({ reset: true }).reveal('.catalogo', { duration: 1000 });
  }, []);

  return (
    <S.Container>
      <S.Content className="max-width catalogo">
        <img src={LogoCatalogo} alt="Logo Catálogo" />
        <S.Headline>
          <h1 className="h1">
            Catálogo de Produtos
          </h1>
          <h5 className="h5 regular">
            Explore o catálogo da Lone Wolf, onde cada produto é cuidadosamente selecionado, unindo a inovação icônica da Apple com o atendimento especializado de nossa loja.
          </h5>
        </S.Headline>
        <S.ContainerProdutos>
          {CATALOGO_CARDS.map(({ id, label, background, url }) =>
            <Link key={id} to={url}>
              <Card key={id} title={label} imageUrl={background} />
            </Link>
          )}
        </S.ContainerProdutos>
      </S.Content>
    </S.Container>
  )
}

export default CatalogoProdutos;