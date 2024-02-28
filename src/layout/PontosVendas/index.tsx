import { FC } from "react";

import S from './styles'
import CardPontoVenda from "../../components/Cards/Card";
import CardBarbacenaMG from '../../assets/background-card-ponto-venda-barbacena.png'


const PontosVendas: FC = () => {

  const onClickRedirectVendaBarbacena = () => {
    console.log('click');
  }

  const onClickRedirectSaoPaulo = () => {
    console.log('click');
  }

  return (
    <S.Container id="pontos-de-venda">
      <S.Content className="max-width">
        <h2 className="h2 semibold">
          Escolha um dos pontos de venda
        </h2>

        <h5 className="h5 regular">
          Frase de para explicar sobre os pontos de atendimento. E se necessário, falar se irá cobrir outras regiões do Brasil.
        </h5>

        <S.CardPontoVendaContainer>
          <CardPontoVenda imageUrl={CardBarbacenaMG} title="Barbacena-MG" onClick={onClickRedirectVendaBarbacena} />
          <CardPontoVenda imageUrl={CardBarbacenaMG} title="São Paulo" onClick={onClickRedirectSaoPaulo} />
        </S.CardPontoVendaContainer>
      </S.Content>
    </S.Container>
  )
}

export default PontosVendas;