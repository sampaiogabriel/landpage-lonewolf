import { FC, useEffect } from "react";
import ScrollReveal from "scrollreveal";

import S from "./styles";
import CardPontoVenda from "../../components/Cards/Card";
import CardCidade from "../../assets/background-card-ponto-venda.png";
import { useNavigate } from "react-router-dom";

const PontosVendas: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    ScrollReveal({ reset: true }).reveal(".pontos-de-venda", {
      duration: 1000,
    });
  }, []);

  const onClickRedirectCatalogo = () => {
    return navigate("/catalogo");
  };

  return (
    <S.Container>
      <S.Content className="max-width pontos-de-venda">
        <h2 className="h2 semibold">Escolha um dos pontos de venda</h2>

        <h5 className="h5 regular">
          Você receberá um atendimento especializado a partir de sua região de
          escolha.
        </h5>

        <S.CardPontoVendaContainer>
          <CardPontoVenda
            imageUrl={CardCidade}
            title="Rio de Janeiro"
            onClick={onClickRedirectCatalogo}
          />
          <CardPontoVenda
            imageUrl={CardCidade}
            title="São Paulo"
            onClick={onClickRedirectCatalogo}
          />
        </S.CardPontoVendaContainer>
      </S.Content>
    </S.Container>
  );
};

export default PontosVendas;
