export type Modelo = {
  id: string;
  label: string;
};

export type Armazenamento = {
  id: string;
  label: string;
};

export type Cor = {
  id: string;
  label: string;
};

export type Especificacao = {
  id: string;
  label: string;
  info?: string;
};

export type Versao = {
  id: string;
  label: string;
  src: string;
  ativo: boolean;
  modelos: Modelo[];
  armazenamento: Armazenamento[];
  cores: Cor[];
  especificacoes?: Especificacao[];
};

export type Produto = {
  id: string;
  produto: ProdutoType;
  label: string;
  versoes: Versao[];
};

export type ProdutoType = "iphone" | "ipad" | "macbook" | "applewatch";
