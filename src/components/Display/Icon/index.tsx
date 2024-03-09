import { FC } from "react";

import S from './styles'
import CorIcon from "../../Icons/Cor";
import ArmazenamentoIcon from "../../Icons/Armazenamento";
import EspecificacaoIcon from "../../Icons/Modelo";
import { AppleOutlined } from "@ant-design/icons";

interface IconProps {
  icon: 'cores' | 'armazenamento' | 'especificacao' | 'apple'
}

const Icon: FC<IconProps> = ({ icon }) => {

  const renderIcon = () => {
    switch (icon) {
      case 'cores':
        return <CorIcon />

      case 'armazenamento':
        return <ArmazenamentoIcon />

      case 'especificacao':
        return <EspecificacaoIcon />

      case 'apple':
        return <AppleOutlined style={{ fontSize: '24px' }} />

      default:
        break;
    }
  }

  return <S.Container>{renderIcon()}</S.Container>
}

export default Icon;