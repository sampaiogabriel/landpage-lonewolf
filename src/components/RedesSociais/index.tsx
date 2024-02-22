import { FC } from "react";

import S from './styles'
import { InstagramOutlined, PinterestOutlined, TikTokOutlined, YoutubeOutlined } from "@ant-design/icons";

const REDE_SOCIAIS = ['', '', '', '']

const RedeSociais: FC = () => {
  const onClickRedirect = (link: string) => {
    console.log('click', link);
  }

  return (
    <S.Container>
      <h5 className="h5 semibold">
        Redes Sociais
      </h5>
      <div>
        <div className="svg" onClick={() => onClickRedirect(REDE_SOCIAIS[0])}>
          <InstagramOutlined />
        </div>

        <div className="svg" onClick={() => onClickRedirect(REDE_SOCIAIS[1])}>
          <TikTokOutlined />
        </div>

        <div className="svg" onClick={() => onClickRedirect(REDE_SOCIAIS[2])}>
          <YoutubeOutlined />
        </div>

        <div className="svg" onClick={() => onClickRedirect(REDE_SOCIAIS[3])}>
          <PinterestOutlined />
        </div>

      </div>
    </S.Container>
  )
}

export default RedeSociais