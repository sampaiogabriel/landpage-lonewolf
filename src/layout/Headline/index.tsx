import { FC, useEffect } from "react";
import ScrollReveal from 'scrollreveal';
import { useNavigate } from "react-router-dom";

import S from './styles';

import ImagemPrincipal from '../../assets/iphone-15.png'
import LogoHeadline from '../../assets/logo_header.png'
import { CTA } from "../../components/Buttons/CTA";

const Headline: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    ScrollReveal({ reset: true }).reveal('.content', { duration: 1000 });
  }, []);


  const onClickCTA = () => {
    return navigate('/catalogo');
  }

  return (
    <S.Container>
      <S.Content className="max-width content">
        <S.FraseDestaqueContainer>
          <img src={LogoHeadline} alt="Logo Principal Lonewolf" />
          <div className="destaque">
            <h1 className="h1">
              Comprometidos com a <span className="primary">qualidade</span>, guiados pelo <span className="primary">estilo</span>.
            </h1>
          </div>
          <h5 className="h5 regular">
            A inovação está no coração da Lone Wolf. Ao oferecer produtos Apple importados, trazemos para você as últimas tendências tecnológicas que definem o futuro.
          </h5>
          <CTA id="cta-compre-agora" className="ctn-compre-agora" onClick={onClickCTA}>Compre Agora</CTA>
        </S.FraseDestaqueContainer>
        <S.ImagemContainer>
          <img src={ImagemPrincipal} alt="Iphone 15 Banner" />
          <CTA id="cta-compre-agora" className="ctn-compre-agora" onClick={onClickCTA}>Compre Agora</CTA>
        </S.ImagemContainer>
      </S.Content>
    </S.Container>
  )
}

export default Headline;