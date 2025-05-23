import { FC } from "react";

import S from "./styles";
import { WhatsAppOutlined } from "@ant-design/icons";
import ButtonSecondary from "../Buttons/Secondary";

const WhatsappButton: FC = () => {
  const redirect = () => {
    window.location.href =
      "https://www.linkedin.com/in/gabrielsampaiolimadearaujo/";
  };

  return (
    <S.WhatsappContainer>
      <small className="small regular">
        Precisa tirar alguma dúvida? Fale conosco!
      </small>
      <ButtonSecondary id="btn-whatsapp" onClick={redirect}>
        <>
          <WhatsAppOutlined /> WhatsApp{" "}
        </>
      </ButtonSecondary>
    </S.WhatsappContainer>
  );
};

export default WhatsappButton;
