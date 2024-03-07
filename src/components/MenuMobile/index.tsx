import { FC, useCallback, useEffect } from "react";

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
  }, [menuIsVisible]);

  const fecharMenu = useCallback(() => {
    setMenuIsVisible(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={fecharMenu} />
      <nav>
        <Link to="/" className="link large regular" onClick={fecharMenu}>Início</Link>
        <Link to="/pontos-de-venda" className="link large regular" onClick={fecharMenu}>Pontos de Venda</Link>
        <Link to="/catalogo" className="link large regular" onClick={fecharMenu}>Catálogo</Link>
      </nav>
    </S.Container>
  )
}

export default MenuMobile;