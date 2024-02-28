import { FC, useEffect } from "react";

import S from './styles'
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

interface MenuMobileProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void
}

const MenuMobile: FC<MenuMobileProps> = ({ menuIsVisible, setMenuIsVisible }) => {

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible])

  return (
    <S.Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <Link to="/apresentacao" className="link large regular">Apresentação</Link>
        <a href="#pontos-de-venda" className="link large regular" onClick={() => setMenuIsVisible(false)}>Pontos de Venda</a>
        <Link to="/catalogo" className="link large regular">Catálogo</Link>
        <a href="#produtos" className="link large regular" onClick={() => setMenuIsVisible(false)}>Produtos</a>
      </nav>
    </S.Container>
  )
}

export default MenuMobile;