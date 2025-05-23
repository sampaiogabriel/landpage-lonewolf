import { FC, useEffect, useState } from "react";

import S from "./styles";

const InformacoesCNPJ: FC = () => {
  const [ano, setAno] = useState("2024");

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
        &copy; {ano} • LoneWolf • Todos os direitos reservados
      </span>

      <span className="body regular">CNPJ XX.XXX.XXX/XXXX-XX</span>
    </S.Container>
  );
};

export default InformacoesCNPJ;
