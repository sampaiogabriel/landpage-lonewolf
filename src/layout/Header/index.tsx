import { FC } from "react";

import S from './styles'

import LogoHeader from '../../assets/logo_header.png'
import Navigate from "../../components/Navigate";

const Header: FC = () => {
  return (
    <S.Container>
      <S.Content className="max-width">
        <img src={LogoHeader} width={131} />
        <Navigate />
      </S.Content>
    </S.Container>
  )
}

export default Header;