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
        <S.CoresContainer>
          {cores.map((cor) => (
            <div key={cor.id} style={{ marginBottom: '4px' }}>
              {cor.label && (
                <span className="medium semibold" style={{ marginRight: '4px' }}>
                  {cor.label}
                </span>
              )}
              {cor.info && (
                <span className="medium">
                  {cor.info}
                </span>
              )}
            </div>
          ))}
        </S.CoresContainer>
      </S.Info>
    </S.Container>
  )
}

export default Cores;