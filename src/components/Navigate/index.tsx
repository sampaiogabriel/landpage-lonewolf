import { FC, useState } from "react";
import { Link } from 'react-router-dom';

import S from './styles'
import MenuMobile from "../MenuMobile";
import { RiMenu2Fill } from "react-icons/ri";

const Navigate: FC = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
      <S.Nav>
        <RiMenu2Fill onClick={() => setMenuIsVisible(true)} className="menu-mobile" size={36} />
        <Link className="link large regular" to="/">Início</Link>
        <Link className="link large regular" to="/pontos-de-venda">Pontos de Venda</Link>
        <Link className="link large regular" to="/catalogo">Catálogo</Link>
      </S.Nav>
    </>
  )
}

export default Navigate;