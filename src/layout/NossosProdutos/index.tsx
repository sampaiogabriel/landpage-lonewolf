import { FC, useEffect } from "react";
import ScrollReveal from 'scrollreveal';

import S from './styles'
import ButtonSecondary from "../../components/Buttons/Secondary";
import { WhatsAppOutlined } from "@ant-design/icons";
import Produtos from "../../components/Produtos";

const NossosProdutos: FC = () => {

  useEffect(() => {
    ScrollReveal({ reset: true }).reveal('.nossosprodutos', { duration: 1000 });
  }, [])

  const redirect = () => {
    // TODO: Adicionar o link do wpp 
    console.log('click');
  }

  return (
    <S.Container id="produtos">
      <S.Content className="max-width nossosprodutos">
        <h2 className="h2">
          Nossos Produtos
        </h2>
        <Produtos />
        <S.WhatsappContainer>
          <small className="small regular">
            Precisa tirar alguma dúvida? Fale conosco!
          </small>
          <ButtonSecondary id="btn-whatsapp" onClick={redirect}>
            <><WhatsAppOutlined /> WhatsApp </>
          </ButtonSecondary>
        </S.WhatsappContainer>
      </S.Content>
    </S.Container>
  )
}

export default NossosProdutos;