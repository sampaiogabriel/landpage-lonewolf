import { FC } from "react";

import S from './styles'
import Visa from '../../assets/fp_visa.png'
import Mastercard from '../../assets/fp_mastercard.png'
import Elo from '../../assets/fp_elo.png'
import MercadoPago from '../../assets/fp_mercado_pago.png'
import Boleto from '../../assets/fp_boleto.png'
import Pix from '../../assets/fp_pix.png'

const FormasPagamento: FC = () => {
  return (
    <S.Container>
      <h5 className="h5 semibold">
        Formas de Pagamento
      </h5>
      <S.ContentImagens>
        <img src={Visa} alt="forma de pagamento Visa" />
        <img src={Mastercard} alt="forma de pagamento Mastercard" />
        <img src={Elo} alt="forma de pagamento Elo" />
        <img src={MercadoPago} alt="forma de pagamento Mercado Pago" />
        <img src={Boleto} alt="forma de pagamento Boleto" />
        <img src={Pix} alt="forma de pagamento Pix" />
      </S.ContentImagens>
    </S.Container>
  )
}

export default FormasPagamento