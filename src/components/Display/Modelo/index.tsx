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
      <Icon icon='modelo' />
      <S.Info>
        <h5 className="h5 semibold">
          {modelos.length > 1 ? 'Modelos' : 'Modelo'}
        </h5>
        {modelos.map((modelo) => (
          <span key={modelo.id} className="medium">
            {modelo.label}
          </span>
        ))}
      </S.Info>
    </S.Container>
  )
}

export default Modelo;