import { FC, useEffect, useState } from "react";

import S from './styles'

const InformacoesCNPJ: FC = () => {
  const [ano, setAno] = useState('2024');

  useEffect(() => {
    const obterAnoAtual = () => {
      const anoAtual = new Date().getFullYear();
      setAno(anoAtual.toString());
    };
    obterAnoAtual();
  }, []);

  return (
    <S.Container>
      <span className="body regular direitos">
        &copy; {ano} • LoneWolf Importados • Todos os direitos reservados
      </span>

      <span className="body regular">
        Rafael A C Pinto Ltda.
      </span>

      <span className="body regular">
        CNPJ 43.124.380/0001-89 • Barbacena-MG
      </span>
    </S.Container>
  )
}

export default InformacoesCNPJ