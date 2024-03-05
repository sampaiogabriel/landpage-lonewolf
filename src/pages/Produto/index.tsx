import { FC } from "react";
import { useParams } from "react-router-dom";

const Produto: FC = () => {
  const { produto } = useParams();

  return <>{produto}</>
}

export default Produto;