import { FC } from "react";

import S from './styles'
import CorIcon from "../../Icons/Cor";
import ArmazenamentoIcon from "../../Icons/Armazenamento";
import ModeloIcon from "../../Icons/Modelo";

interface IconProps {
  icon: 'cores' | 'armazenamento' | 'modelo'
}

const Icon: FC<IconProps> = ({ icon }) => {

  const renderIcon = () => {
    switch (icon) {
      case 'cores':
        return <CorIcon />

      case 'armazenamento':
        return <ArmazenamentoIcon />

      case 'modelo':
        return <ModeloIcon />

      default:
        break;
    }
  }

  return <S.Container>{renderIcon()}</S.Container>
}

export default Icon;