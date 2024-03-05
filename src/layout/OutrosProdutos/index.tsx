import { FC } from "react";

import S from './styles'

import Logo from '../../assets/logo_footer.png'
import WhatsappButton from "../../components/WhatsappButton";

const OutrosProdutos: FC = () => {
  return (
    <S.Container>
      <S.Content className="max-width">
        <h1 className="h1">
          Outros Produtos
        </h1>
        <img src={Logo} alt="logo lonewolf" />
        <h5 className="h5 regular">
          Na Lone Wolf, elevamos a experiência de importação para além do universo Apple, oferecendo um serviço personalizado para trazer até você uma gama diversificada de produtos exclusivos.
        </h5>
        <h5 className="h5 regular">
          Entre em contato com nossa equipe especializada em importação,  comprometida em atender às suas demandas específicas, transformando seus desejos em realidade!
        </h5>
        <WhatsappButton />
      </S.Content>
    </S.Container>
  )
}

export default OutrosProdutos;