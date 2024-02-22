import { FC } from "react";

import S from './styles'
import ButtonSecondary from "../../components/Buttons/Secondary";
import { InfoCircleOutlined } from "@ant-design/icons";

const NossosProdutos: FC = () => {
  const redirect = () => {
    console.log('click');
  }

  return (
    <S.Container>
      <S.Content className="max-width">
        <h2 className="h2">
          Nossos Produtos
        </h2>
        <S.WhatsappContainer>
          <span>
            Precisa tirar alguma dúvida? Fale conosco!
          </span>
          <ButtonSecondary id="btn-whatsapp" onClick={redirect}>
            <><InfoCircleOutlined /> WhatsApp </>
          </ButtonSecondary>
        </S.WhatsappContainer>
      </S.Content>
    </S.Container>
  )
}

export default NossosProdutos;