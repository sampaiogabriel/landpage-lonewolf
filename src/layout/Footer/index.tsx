import { FC } from "react";

import S from './styles'
import FormasPagamento from "../../components/FormasPagamento";
import RedeSociais from "../../components/RedesSociais";
import InformacoesCNPJ from "../../components/InformacoesCNPJ";
import LogoFooter from '../../assets/logo_footer.png'

const Footer: FC = () => {
  return (
    <S.Container>
      <S.Content className="max-width">
        <S.Divider />
        <img src={LogoFooter} alt="logo footer" />
        <S.Links>
          <FormasPagamento />
          <RedeSociais />
        </S.Links>
        <InformacoesCNPJ />
      </S.Content>
    </S.Container>
  )
}

export default Footer;