import { FC } from "react";

import S from './styles'

import LogoHeader from '../../assets/logo_header.png'
import Navigate from "../../components/Navigate";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <S.Container>
      <S.Content className="max-width">
        <Link to="/">
          <img src={LogoHeader} width={131} />
        </Link>
        <Navigate />
      </S.Content>
    </S.Container>
  )
}

export default Header;