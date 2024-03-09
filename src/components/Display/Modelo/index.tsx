import { FC } from "react";

import S from './styles'
import Icon from "../Icon";
import { Modelo as ModeloType } from "../../../types/Produto";

interface ModelosProps {
  modelos?: ModeloType[];
}

const Modelo: FC<ModelosProps> = ({ modelos }) => {
  if (modelos === undefined || modelos.length === 0) {
    return null;
  }

  return (
    <S.Container>
      <Icon icon='apple' />
      <S.Info>
        <h5 className="h5 semibold">
          Modelos
        </h5>
        {modelos.map((modelo) => (
          <div key={modelo.id} style={{ marginBottom: '4px' }}>
            {modelo.label && (
              <span className="medium semibold" style={{ marginRight: '4px' }}>
                {modelo.label}
              </span>
            )}
            {modelo.info && (
              <span className="medium">
                {modelo.info}
              </span>)
            }
          </div>
        ))}
      </S.Info>
    </S.Container>
  )
}

export default Modelo;