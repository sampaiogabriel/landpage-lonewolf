import { FC, useEffect } from "react";
import ScrollReveal from 'scrollreveal';

import S from './styles'
import NossosProdutos from "../../components/NossosProdutos";
import WhatsappButton from "../../components/WhatsappButton";

const NossosProdutosContainer: FC = () => {

  useEffect(() => {
    ScrollReveal({ reset: true }).reveal('.nossosprodutos', { duration: 1000 });
  }, [])

  return (
    <S.Container id="produtos">
      <S.Content className="max-width nossosprodutos">
        <h2 className="h2">
          Nossos Produtos
        </h2>
        <NossosProdutos />
        <WhatsappButton />
      </S.Content>
    </S.Container>
  )
}

export default NossosProdutosContainer;