import { FC } from "react";
import { Versao } from "../../types/Produto";

import S from './styles'
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
  return (
    <S.Container>
      <S.ContainerImg>
        <img src={produto?.src} />
      </S.ContainerImg>
      <S.ContainerInfo>
        <S.ContainerTitle>
          <h2 className="h2">
            {produto?.label}
          </h2>
        </S.ContainerTitle>
        <Cores cores={produto?.cores} />
        <Armazenamento armazenamentos={produto?.armazenamento} />
        <Modelo modelos={produto?.modelos} />
        <Especificacoes especificacoes={produto?.especificacoes} />
        <CTA id="cta-compra-agora" style={{ width: '100%' }}>Compra Agora</CTA>
        <S.ContainerWhatsapp>
          <WhatsappButton />
        </S.ContainerWhatsapp>
      </S.ContainerInfo>
    </S.Container>
  )
}

export default VitrineProdutos;