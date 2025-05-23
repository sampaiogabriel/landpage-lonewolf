import { FC } from "react";
import { Versao } from "../../types/Produto";

import S from "./styles";
import Cores from "../Display/Cores";
import Armazenamento from "../Display/Armazenamento";
import { CTA } from "../Buttons/CTA";
import WhatsappButton from "../WhatsappButton";
import Modelo from "../Display/Modelo";
import Especificacoes from "../Display/Especificacoes";

interface VitrineProdutosProps {
  produto?: Versao;
}

const VitrineProdutos: FC<VitrineProdutosProps> = ({ produto }) => {
  const onClickComprar = () => {
    window.location.href = "https://lonewolf.forms.app/cadastro";
  };

  return (
    <S.Container>
      <S.ContainerImg>
        <img src={produto?.src} alt={`${produto?.label}`} />
      </S.ContainerImg>
      <S.ContainerInfo>
        <S.ContainerTitle>
          <h2 className="h2">{produto?.label}</h2>
        </S.ContainerTitle>
        <Modelo modelos={produto?.modelos} />
        <Cores cores={produto?.cores} />
        <Armazenamento armazenamentos={produto?.armazenamento} />
        <Especificacoes especificacoes={produto?.especificacoes} />
        <CTA
          id="cta-compra-agora"
          style={{ width: "100%" }}
          onClick={onClickComprar}
        >
          Compra Agora
        </CTA>
        <S.ContainerWhatsapp>
          <WhatsappButton />
        </S.ContainerWhatsapp>
      </S.ContainerInfo>
    </S.Container>
  );
};

export default VitrineProdutos;
