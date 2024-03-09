import { FC } from "react";

import S from './styles'
import Icon from "../Icon";
import { Especificacao } from "../../../types/Produto";

interface EspecificacoesProps {
  especificacoes?: Especificacao[];
}

const Especificacoes: FC<EspecificacoesProps> = ({ especificacoes }) => {
  if (especificacoes === undefined || especificacoes.length === 0) {
    return null;
  }

  return (
    <S.Container>
      <Icon icon='especificacao' />
      <S.Info>
        <h5 className="h5 semibold">
          Especificações
        </h5>
        <S.EspecificacoesInfo>
          {especificacoes.map((especificacao) => (
            <S.EspecificacaoInfo key={especificacao.id} style={{ marginBottom: '4px' }}>
              <span key={especificacao.id} className="medium semibold" style={{ marginRight: '4px' }}>
                {especificacao.label}
              </span>
              <span key={especificacao.id} className="medium">
                {especificacao.info}
              </span>
            </S.EspecificacaoInfo>
          ))}
        </S.EspecificacoesInfo>

      </S.Info>
    </S.Container>
  )
}

export default Especificacoes;