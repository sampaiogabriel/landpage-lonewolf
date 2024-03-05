import IPHONE_15_PRO from "../assets/produtos/IPHONE_15_PRO.png";
import IPHONE_15 from "../assets/produtos/IPHONE_15.png";
import IPHONE_14 from "../assets/produtos/IPHONE_14.png";
import IPHONE_13 from "../assets/produtos/IPHONE_13.png";
import IPAD_9 from "../assets/produtos/IPAD_9.png";
import IPAD_10 from "../assets/produtos/IPAD_10.png";
import IPAD_MINI from "../assets/produtos/IPAD_MINI.png";
import IPAD_AIR from "../assets/produtos/IPAD_AIR.png";
import IPAD_PRO from "../assets/produtos/IPAD_PRO.png";
import MACBOOK_AIR_M1 from "../assets/produtos/MACBOOK_AIR_M1.png";
import MACBOOK_AIR_M2 from "../assets/produtos/MACBOOK_AIR_M2.png";
import MACBOOK_PRO_M3 from "../assets/produtos/MACBOOK_PRO_M3.png";
import MACBOOK_PRO_M3_MAX from "../assets/produtos/MACBOOK_PRO_M3_MAX.png";
import APPLE_WATCH_SE_2 from "../assets/produtos/APPLE_WATCH_SE_2.png";
import APPLE_WATCH_S9 from "../assets/produtos/APPLE_WATCH_S9.png";
import APPLE_WATCH_ULTRA_2 from "../assets/produtos/APPLE_WATCH_ULTRA_2.png";
import MAC_STUDIO from "../assets/produtos/MAC_STUDIO.png";
import { Produto } from "../types/Produto";

const PRODUTOS: Produto[] = [
  {
    id: "1",
    produto: "iphone",
    label: "iPhone",
    versoes: [
      {
        id: "1",
        label: "Iphone 13",
        src: IPHONE_13,
        ativo: true,
        modelos: [
          {
            id: "1",
            label: "iPhone 13",
          },
        ],
        armazenamento: [
          {
            id: "1",
            label: "128 GB",
          },
          {
            id: "2",
            label: "256 GB",
          },
        ],
        cores: [
          {
            id: "1",
            label: "Estelar",
          },
          {
            id: "2",
            label: "Meia Noite",
          },
          {
            id: "3",
            label: "Azul",
          },
          {
            id: "4",
            label: "Roxo",
          },
          {
            id: "5",
            label: "Amarelo",
          },
          {
            id: "6",
            label: "Vermelho",
          },
        ],
      },
      {
        id: "2",
        label: "Iphone 14 / 14 Plus",
        src: IPHONE_14,
        ativo: true,
        modelos: [
          {
            id: "1",
            label: "iPhone 14",
          },
          {
            id: "2",
            label: "iPhone 14 Plus",
          },
        ],
        armazenamento: [
          {
            id: "1",
            label: "128 GB",
          },
          {
            id: "2",
            label: "256 GB",
          },
        ],
        cores: [
          {
            id: "1",
            label: "Estelar",
          },
          {
            id: "2",
            label: "Meia Noite",
          },
          {
            id: "3",
            label: "Azul",
          },
          {
            id: "4",
            label: "Roxo",
          },
          {
            id: "5",
            label: "Amarelo",
          },
          {
            id: "6",
            label: "Vermelho",
          },
        ],
      },
      {
        id: "3",
        label: "Iphone 15 / 15 Plus",
        src: IPHONE_15,
        ativo: true,
        modelos: [
          {
            id: "1",
            label: "iPhone 15",
          },
          {
            id: "2",
            label: "iPhone 15 Plus",
          },
        ],
        armazenamento: [
          {
            id: "1",
            label: "128 GB",
          },
          {
            id: "2",
            label: "256 GB",
          },
          {
            id: "3",
            label: "512 GB",
          },
        ],
        cores: [
          {
            id: "1",
            label: "Preto",
          },
          {
            id: "2",
            label: "Azul",
          },
          {
            id: "3",
            label: "Rosa",
          },
          {
            id: "4",
            label: "Amarelo",
          },
          {
            id: "5",
            label: "Verde",
          },
        ],
      },
      {
        id: "4",
        label: "Iphone 15 Pro / ProMax",
        src: IPHONE_15_PRO,
        ativo: true,
        modelos: [
          {
            id: "1",
            label: "iPhone 15 Pro",
          },
          {
            id: "2",
            label: "iPhone 15 Pro Max",
          },
        ],
        armazenamento: [
          {
            id: "1",
            label: "128 GB",
          },
          {
            id: "2",
            label: "256 GB",
          },
          {
            id: "3",
            label: "512 GB",
          },
          {
            id: "4",
            label: "1 TB",
          },
        ],
        cores: [
          {
            id: "1",
            label: "Titânio Preto",
          },
          {
            id: "2",
            label: "Titânio Branco",
          },
          {
            id: "3",
            label: "Titânio Natural",
          },
          {
            id: "4",
            label: "Titânio Azul",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    produto: "ipad",
    label: "iPad",
    versoes: [
      {
        id: "1",
        label: "iPad 9",
        src: IPAD_9,
        ativo: true,
        modelos: [
          {
            id: "1",
            label: "WIFI",
          },
          {
            id: "2",
            label: "WIFI+CELLULAR",
          },
        ],
        armazenamento: [
          {
            id: "1",
            label: "64 GB",
          },
          {
            id: "2",
            label: "256 GB",
          },
        ],
        cores: [
          {
            id: "1",
            label: "Cinza Espacial",
          },
          {
            id: "2",
            label: "Prateado",
          },
        ],
      },
      {
        id: "2",
        label: "iPad 10",
        src: IPAD_10,
        ativo: true,
        modelos: [
          {
            id: "1",
            label: "WIFI",
          },
          {
            id: "2",
            label: "WIFI+CELLULAR",
          },
        ],
        armazenamento: [
          {
            id: "1",
            label: "64 GB",
          },
          {
            id: "2",
            label: "256 GB",
          },
        ],
        cores: [
          {
            id: "1",
            label: "Azul",
          },
          {
            id: "2",
            label: "Rosa",
          },
          {
            id: "3",
            label: "Amarelo",
          },
          {
            id: "4",
            label: "Prateado",
          },
        ],
      },
      {
        id: "3",
        label: "iPad Mini",
        src: IPAD_MINI,
        ativo: true,
        modelos: [
          {
            id: "1",
            label: "Mini 6 WIFI",
          },
          {
            id: "2",
            label: "Mini 6 WIFI+CELLULAR",
          },
        ],
        armazenamento: [
          {
            id: "1",
            label: "64 GB",
          },
          {
            id: "2",
            label: "256 GB",
          },
        ],
        cores: [
          {
            id: "1",
            label: "Cinza Espacial",
          },
          {
            id: "2",
            label: "Rosa",
          },
          {
            id: "3",
            label: "Roxo",
          },
          {
            id: "4",
            label: "Estelar",
          },
        ],
      },
      {
        id: "4",
        label: "iPad Air",
        src: IPAD_AIR,
        ativo: true,
        modelos: [
          {
            id: "1",
            label: "Air 5 WIFI",
          },
          {
            id: "2",
            label: "Air 5 WIFI+CELLULAR",
          },
        ],
        armazenamento: [
          {
            id: "1",
            label: "64 GB",
          },
          {
            id: "2",
            label: "256 GB",
          },
        ],
        cores: [
          {
            id: "1",
            label: "Cinza Espacial",
          },
          {
            id: "2",
            label: "Rosa",
          },
          {
            id: "3",
            label: "Roxo",
          },
          {
            id: "4",
            label: "Estelar",
          },
        ],
      },
      {
        id: "5",
        label: "iPad Pro",
        src: IPAD_PRO,
        ativo: true,
        modelos: [
          {
            id: "1",
            label: "Pro 11 (4ª Geração): WIFI, WIFI+CELLULAR",
          },
          {
            id: "2",
            label: "Pro 12.9 (6ª Geração): WIFI, WIFI+CELLULAR",
          },
        ],
        armazenamento: [
          {
            id: "1",
            label: "64 GB",
          },
          {
            id: "2",
            label: "256 GB",
          },
          {
            id: "3",
            label: "512 GB",
          },
          {
            id: "4",
            label: "1 TB",
          },
        ],
        cores: [
          {
            id: "1",
            label: "Cinza Espacial",
          },
          {
            id: "2",
            label: "Prateado",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    produto: "macbook",
    label: "MacBook",
    versoes: [
      {
        id: "1",
        label: "MacBook Air M1",
        src: MACBOOK_AIR_M1,
        ativo: true,
        especificacoes: [
          {
            id: "1",
            label: "Memória RAM: 8GB / 16GB",
          },
          {
            id: "2",
            label:
              "13 Polegadas: Chip M1 da Apple com CPU de 8 núcleos, GPU de 7 núcleos, Neural Engine de 16 núcleos",
          },
        ],
        modelos: [],
        armazenamento: [
          {
            id: "1",
            label: "256 GB",
          },
          {
            id: "2",
            label: "512 GB",
          },
          {
            id: "3",
            label: "1 TB",
          },
          {
            id: "4",
            label: "2 TB",
          },
        ],
        cores: [
          {
            id: "1",
            label: "Cinza Especial",
          },
          {
            id: "2",
            label: "Dourado",
          },
          {
            id: "3",
            label: "Prata",
          },
        ],
      },
      {
        id: "2",
        label: "MacBook Air M2",
        src: MACBOOK_AIR_M2,
        ativo: true,
        especificacoes: [
          {
            id: "1",
            label: "Memória RAM: 8GB / 16GB / 24 GB",
          },
          {
            id: "2",
            label:
              "13,6 Polegadas: Chip M2 da Apple com CPU de 8 núcleos, GPU de 8 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "3",
            label:
              "13,6 Polegadas: Chip M2 da Apple com CPU de 8 núcleos, GPU de 10 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "4",
            label:
              "15,3 Polegadas: Chip M2 da Apple com CPU de 8 núcleos, GPU de 8 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "5",
            label:
              "15,3 Polegadas: Chip M2 da Apple com CPU de 8 núcleos, GPU de 10 núcleos e Neural Engine de 16 núcleos.",
          },
        ],
        modelos: [],
        armazenamento: [
          {
            id: "1",
            label: "256 GB",
          },
          {
            id: "2",
            label: "512 GB",
          },
          {
            id: "3",
            label: "1 TB",
          },
          {
            id: "4",
            label: "2 TB",
          },
        ],
        cores: [
          {
            id: "1",
            label: "Meia Noite",
          },
          {
            id: "2",
            label: "Estelar",
          },
          {
            id: "3",
            label: "Cinza Espacial",
          },
          {
            id: "3",
            label: "Prateado",
          },
        ],
      },
      {
        id: "3",
        label: "MacBook Pro M3",
        src: MACBOOK_PRO_M3,
        ativo: true,
        especificacoes: [
          {
            id: "1",
            label: "Memória RAM: 8GB / 16GB / 24 GB",
          },
          {
            id: "2",
            label:
              "14 Polegadas: Chip M3 da Apple com CPU de 8 núcleos, GPU de 10 núcleos e Neural Engine de 16 núcleos.",
          },
        ],
        modelos: [],
        armazenamento: [
          {
            id: "1",
            label: "512 GB",
          },
          {
            id: "2",
            label: "1 TB",
          },
          {
            id: "3",
            label: "2 TB",
          },
        ],
        cores: [
          {
            id: "1",
            label: "Cinza Espacial",
          },
          {
            id: "2",
            label: "Prateado",
          },
        ],
      },
      {
        id: "4",
        label: "MacBook Pro M3 Max",
        src: MACBOOK_PRO_M3_MAX,
        ativo: true,
        especificacoes: [
          {
            id: "1",
            label:
              "14 Polegadas / Memória RAM: 36GB / 96GB: Chip M3 Max da Apple com CPU de 14 núcleos, GPU de 30 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "2",
            label:
              "14 Polegadas / Memória RAM: 48GB / 64GB / 128GB: Chip M3 Max da Apple com CPU de 16 núcleos, GPU de 40 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "3",
            label:
              "16 Polegadas / Memória RAM: 36GB / 96GB: Chip M3 Max da Apple com CPU de 14 núcleos, GPU de 30 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "4",
            label:
              "16 Polegadas / Memória RAM: 48GB / 64GB / 128GB: Chip M3 Max da Apple com CPU de 16 núcleos, GPU de 40 núcleos e Neural Engine de 16 núcleos.",
          },
        ],
        modelos: [],
        armazenamento: [
          {
            id: "1",
            label: "512 GB",
          },
          {
            id: "2",
            label: "1 TB",
          },
          {
            id: "3",
            label: "2 TB",
          },
          {
            id: "4",
            label: "4 TB",
          },
        ],
        cores: [
          {
            id: "1",
            label: "Preto Espacial",
          },
          {
            id: "2",
            label: "Prateado",
          },
        ],
      },
      {
        id: "5",
        label: "Mac Studio",
        src: MAC_STUDIO,
        ativo: true,
        especificacoes: [
          {
            id: "1",
            label:
              "14 Polegadas / Memória RAM: 36GB / 96GB: Chip M3 Max da Apple com CPU de 14 núcleos, GPU de 30 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "2",
            label:
              "14 Polegadas / Memória RAM: 48GB / 64GB / 128GB: Chip M3 Max da Apple com CPU de 16 núcleos, GPU de 40 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "3",
            label:
              "16 Polegadas / Memória RAM: 36GB / 96GB: Chip M3 Max da Apple com CPU de 14 núcleos, GPU de 30 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "4",
            label:
              "16 Polegadas / Memória RAM: 48GB / 64GB / 128GB: Chip M3 Max da Apple com CPU de 16 núcleos, GPU de 40 núcleos e Neural Engine de 16 núcleos.",
          },
        ],
        modelos: [],
        armazenamento: [],
        cores: [
          {
            id: "1",
            label: "Prateado",
          },
          {
            id: "2",
            label: "Preto Espacial",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    produto: "applewatch",
    label: "Apple Watch",
    versoes: [
      {
        id: "1",
        label: "Apple Watch SE 2",
        src: APPLE_WATCH_SE_2,
        ativo: true,
        modelos: [],
        armazenamento: [],
        especificacoes: [
          {
            id: "1",
            label: "Pulseiras: Esportiva / Loop Esportiva",
          },
          {
            id: "2",
            label: "Tamanhos: 40mm / 44mm",
          },
          {
            id: "3",
            label: "Modelos: GPS / GPS+CELLULAR",
          },
        ],
        cores: [
          {
            id: "1",
            label: "Estelar",
          },
          {
            id: "2",
            label: "Meia Noite",
          },
          {
            id: "3",
            label: "Prateado",
          },
        ],
      },
      {
        id: "2",
        label: "Apple Watch S9",
        src: APPLE_WATCH_S9,
        ativo: true,
        modelos: [],
        armazenamento: [],
        especificacoes: [
          {
            id: "1",
            label: "Pulseiras: Esportiva / Loop Esportiva",
          },
          {
            id: "2",
            label: "Tamanhos: 41mm / 45mm",
          },
          {
            id: "3",
            label:
              "Modelos: GPS Alumínio / GPS+CELLULAR Alumínio / GPS+CELULAR Aço Inoxidável",
          },
        ],
        cores: [
          {
            id: "1",
            label: "Rosa",
          },
          {
            id: "2",
            label: "Meia Noite",
          },
          {
            id: "3",
            label: "Estelar",
          },
          {
            id: "4",
            label: "Prateado",
          },
          {
            id: "5",
            label: "Vermelho",
          },
        ],
      },
      {
        id: "3",
        label: "Apple Watch Ultra 2",
        src: APPLE_WATCH_ULTRA_2,
        ativo: true,
        modelos: [],
        armazenamento: [],
        especificacoes: [
          {
            id: "1",
            label: "Pulseiras: Loop Alpina / Loop Trail / Oceano",
          },
          {
            id: "2",
            label: "Tamanhos: 49mm ",
          },
          {
            id: "3",
            label: "Modelo: GPS+CELLULAR",
          },
        ],
        cores: [
          {
            id: "1",
            label: "Titânio",
          },
        ],
      },
    ],
  },
];

export default PRODUTOS;
