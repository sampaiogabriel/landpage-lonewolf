import { FC } from "react";

import S from './styles'

const Video: FC = () => {
  return (
    <S.Container>
      <S.Content className="max-width">
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
            Frase curta de efeito
          </h5>
          <h2 className="h2">
            Frase de efeito para mostrar o video
          </h2>
        </S.Headline>
      </S.Content>
    </S.Container>
  )
}

export default Video;