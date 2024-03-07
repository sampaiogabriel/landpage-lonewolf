import { FC, useEffect } from "react";
import ScrollReveal from 'scrollreveal'

import S from './styles'

const Video: FC = () => {

  useEffect(() => {
    ScrollReveal({ reset: true }).reveal('.video', {
      duration: 2000
    });
  }, [])

  return (
    <S.Container>
      <S.Content className="max-width video">
        <S.Video>
          <iframe width="100%" height="274"
            src="https://www.youtube.com/embed/rN_zkpV52J0?si=NByPkRN2Jrje-mWO"
            title="Iphone 15 - Pro"
            frameBorder="0"
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share"
            allowFullScreen>
          </iframe>
        </S.Video>
        <S.Headline>
          <h5 className="h5 regular">
            Conheça nossa loja
          </h5>
          <h2 className="h2">
            <span className="primary">Lone Wolf</span>, onde a inovação encontra seu verdadeiro estilo!
          </h2>
        </S.Headline>
      </S.Content>
    </S.Container>
  )
}

export default Video;