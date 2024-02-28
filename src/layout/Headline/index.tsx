import { FC } from "react";

import S from './styles';

import ImagemPrincipal from '../../assets/iphone-15.png'
import LogoHeadline from '../../assets/logo_header.png'
import { CTA } from "../../components/Buttons/CTA";

const Headline: FC = () => {
  return (
    <S.Container>
      <S.Content className="max-width">
        <S.FraseDestaqueContainer>
          <img src={LogoHeadline} alt="Logo Principal Lonewolf" />
          <div className="destaque">
            <h1 className="h1">
              Uma boa frase para
              <span className="primary"> Landing Page.</span></h1>
          </div>
          <h5 className="h5 regular">
            Frase de Destaque para chamar a atenção para os produtos do Site. Pode ter entre duas a três linhas, sintetizando a proposta
          </h5>
          <CTA id="cta-compre-agora" className="ctn-compre-agora" href="#pontos-de-venda">Compre Agora</CTA>
        </S.FraseDestaqueContainer>
        <S.ImagemContainer>
          <img src={ImagemPrincipal} alt="Iphone 15 Banner" />
          <CTA id="cta-compre-agora" className="ctn-compre-agora" href="#pontos-de-venda">Compre Agora</CTA>
        </S.ImagemContainer>
      </S.Content>
    </S.Container>
  )
}

export default Headline;