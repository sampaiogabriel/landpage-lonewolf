import { FC } from "react";
import { useRouteError } from "react-router-dom";

import S from './styles'

const Error: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  console.error(error);

  return (
    <S.Container>
      <S.Content className="max-width">
        <h1>Oops!</h1>
        <p>Desculpe, página não encontrada</p>
      </S.Content>
    </S.Container>
  )
}

export default Error;