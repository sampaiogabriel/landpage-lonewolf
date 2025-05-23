import { FC } from "react";

import S from "./styles";
import {
  InstagramOutlined,
  PinterestOutlined,
  TikTokOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const RedeSociais: FC = () => {
  return (
    <S.Container>
      <h5 className="h5 semibold">Redes Sociais</h5>
      <div>
        <Link
          to="https://www.linkedin.com/in/gabrielsampaiolimadearaujo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="svg">
            <InstagramOutlined />
          </div>
        </Link>

        <Link
          to="https://www.linkedin.com/in/gabrielsampaiolimadearaujo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="svg">
            <TikTokOutlined />
          </div>
        </Link>

        <Link
          to="https://www.linkedin.com/in/gabrielsampaiolimadearaujo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="svg">
            <YoutubeOutlined />
          </div>
        </Link>

        <Link
          to="https://www.linkedin.com/in/gabrielsampaiolimadearaujo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="svg">
            <PinterestOutlined />
          </div>
        </Link>
      </div>
    </S.Container>
  );
};

export default RedeSociais;
