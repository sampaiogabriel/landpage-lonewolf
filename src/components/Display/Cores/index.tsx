import { FC } from "react";

import S from './styles'
import Icon from "../Icon";
import { Cor } from "../../../types/Produto";

interface CoresProps {
  cores?: Cor[];
}

const Cores: FC<CoresProps> = ({ cores }) => {
  if (cores === undefined || cores.length === 0) {
    return null;
  }

  return (
    <S.Container>
      <Icon icon='cores' />
      <S.Info>
        <h5 className="h5 semibold">
          {cores.length > 1 ? 'Cores' : 'Cor'}
        </h5>
        {cores.map((cor, index) => (
          <span key={cor.id} className="medium">
            {cor.label}
            {index !== cores.length - 1 && ' / '}
          </span>
        ))}
      </S.Info>
    </S.Container>
  )
}

export default Cores;