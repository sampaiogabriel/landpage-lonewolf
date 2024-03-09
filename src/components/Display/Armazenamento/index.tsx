import { FC } from "react";

import S from './styles'
import Icon from "../Icon";
import { Armazenamento } from "../../../types/Produto";

interface CoresProps {
  armazenamentos?: Armazenamento[];
}

const Cores: FC<CoresProps> = ({ armazenamentos }) => {
  if (armazenamentos === undefined || armazenamentos.length === 0) {
    return null;
  }

  return (
    <S.Container>
      <Icon icon='armazenamento' />
      <S.Info>
        <h5 className="h5 semibold">
          Armazenamentos
        </h5>
        {armazenamentos.map((armazenamento) => (
          <div key={armazenamento.id} style={{ marginBottom: '4px' }}>
            {armazenamento.label && (
              <span className="medium semibold" style={{ marginRight: '4px' }}>
                {armazenamento.label}
              </span>
            )}
            {armazenamento.info && (
              <span className="medium regular">
                {armazenamento.info}
              </span>
            )}
          </div>
        ))}
      </S.Info>
    </S.Container>
  )
}

export default Cores;