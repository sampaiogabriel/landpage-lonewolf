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
          {armazenamentos.length > 1 ? 'Armazenamentos' : 'Armazenamento'}
        </h5>
        {armazenamentos.map((armazenamento, index) => (
          <span key={armazenamento.id} className="medium">
            {armazenamento.label}
            {index !== armazenamentos.length - 1 && ' / '}
          </span>
        ))}
      </S.Info>
    </S.Container>
  )
}

export default Cores;