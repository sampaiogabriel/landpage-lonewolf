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
import AIRPODS from "../assets/produtos/AIRPODS.png";
import MINIM2 from "../assets/produtos/MINI.png";
import IMAC from "../assets/produtos/iMAC.png";

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
            info: "iPhone 13",
          },
        ],
        armazenamento: [
          {
            id: "1",
            info: "128 GB / 256 GB",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Estelar / Meia Noite / Azul / Roxo / Amarelo / Vermelho",
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
            info: "iPhone 14",
          },
          {
            id: "2",
            info: "iPhone 14 Plus",
          },
        ],
        armazenamento: [
          {
            id: "1",
            info: "128 GB / 256 GB",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Estelar / Meia Noite / Azul / Roxo / Amarelo / Vermelho",
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
            info: "iPhone 15",
          },
          {
            id: "2",
            info: "iPhone 15 Plus",
          },
        ],
        armazenamento: [
          {
            id: "1",
            info: "128 GB / 256 GB / 512 GB",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Preto / Azul / Rosa / Amarelo / Verde",
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
            info: "iPhone 15 Pro",
          },
          {
            id: "2",
            info: "iPhone 15 Pro Max",
          },
        ],
        armazenamento: [
          {
            id: "1",
            info: "128 GB / 256 GB / 512 GB / 1 TB",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Titânio Preto / Titânio Branco / Titânio Natural / Titânio Azul",
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
            info: "WIFI",
          },
          {
            id: "2",
            info: "WIFI+CELLULAR",
          },
        ],
        armazenamento: [
          {
            id: "1",
            info: "64 GB / 256 GB",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Cinza Espacial / Prateado",
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
            info: "WIFI",
          },
          {
            id: "2",
            info: "WIFI+CELLULAR",
          },
        ],
        armazenamento: [
          {
            id: "1",
            info: "64 GB / 256 GB",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Azul / Rosa / Amarelo / Prateado",
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
            info: "Mini 6 WIFI",
          },
          {
            id: "2",
            info: "Mini 6 WIFI+CELLULAR",
          },
        ],
        armazenamento: [
          {
            id: "1",
            info: "64 GB / 256 GB",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Cinza Espacial / Rosa / Roxo / Estelar",
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
            info: "Air 5 WIFI",
          },
          {
            id: "2",
            info: "Air 5 WIFI+CELLULAR",
          },
        ],
        armazenamento: [
          {
            id: "1",
            info: "64 GB / 256 GB",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Cinza Espacial / Rosa / Roxo / Estelar",
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
            label: "Pro 11 (4ª Geração):",
            info: "WIFI, WIFI+CELLULAR",
          },
          {
            id: "2",
            label: "Pro 12.9 (6ª Geração):",
            info: " WIFI, WIFI+CELLULAR",
          },
        ],
        armazenamento: [
          {
            id: "1",
            info: "64 GB / 256 GB / 512 GB / 1 TB",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Cinza Espacial / Prateado",
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
            label: "Memória RAM:",
            info: "8 GB / 16 GB",
          },
        ],
        modelos: [
          {
            id: "1",
            label: "13 Polegadas:",
            info: "Chip M1 da Apple com CPU de 8 núcleos, GPU de 7 núcleos, Neural Engine de 16 núcleos",
          },
        ],
        armazenamento: [
          {
            id: "1",
            info: "256 GB / 512 GB / 1 TB / 2 TB",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Cinza Especial / Dourado / Prata",
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
            label: "Memória RAM:",
            info: "8 GB / 16 GB / 24 GB",
          },
        ],
        modelos: [
          {
            id: "1",
            label: "13,6 Polegadas:",
            info: "Chip M2 da Apple com CPU de 8 núcleos, GPU de 8 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "2",
            label: "13,6 Polegadas:",
            info: "Chip M2 da Apple com CPU de 8 núcleos, GPU de 10 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "3",
            label: "15,3 Polegadas:",
            info: "Chip M2 da Apple com CPU de 8 núcleos, GPU de 8 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "4",
            label: "15,3 Polegadas:",
            info: "Chip M2 da Apple com CPU de 8 núcleos, GPU de 10 núcleos e Neural Engine de 16 núcleos.",
          },
        ],
        armazenamento: [
          {
            id: "1",
            info: "256 GB / 512 GB / 1 TB / 2 TB",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Meia Noite / Estelar / Cinza Espacial / Prateado",
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
            label: "Memória RAM:",
            info: "8 GB / 16 GB / 24 GB",
          },
        ],
        modelos: [
          {
            id: "1",
            label: "14 Polegadas:",
            info: "Chip M3 da Apple com CPU de 8 núcleos, GPU de 10 núcleos e Neural Engine de 16 núcleos.",
          },
        ],
        armazenamento: [
          {
            id: "1",
            info: "512 GB / 1 TB / 2 TB",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Cinza Espacial / Prateado",
          },
        ],
      },
      {
        id: "4",
        label: "MacBook Pro M3 Max",
        src: MACBOOK_PRO_M3_MAX,
        ativo: true,
        especificacoes: [],
        modelos: [
          {
            id: "1",
            label: "14 Polegadas | Memória RAM: 36 GB / 96 GB:",
            info: "Chip M3 Max da Apple com CPU de 14 núcleos, GPU de 30 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "2",
            label: "14 Polegadas | Memória RAM: 48 GB / 64 GB / 128 GB:",
            info: "Chip M3 Max da Apple com CPU de 16 núcleos, GPU de 40 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "3",
            label: "16 Polegadas | Memória RAM: 36 GB / 96 GB:",
            info: "Chip M3 Max da Apple com CPU de 14 núcleos, GPU de 30 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "4",
            label: "16 Polegadas | Memória RAM: 48 GB / 64 GB / 128 GB:",
            info: "Chip M3 Max da Apple com CPU de 16 núcleos, GPU de 40 núcleos e Neural Engine de 16 núcleos.",
          },
        ],
        armazenamento: [
          {
            id: "1",
            info: "512 GB / 1 TB / 2 TB / 4 TB",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Preto Espacial / Prateado",
          },
        ],
      },
      {
        id: "5",
        label: "Mac Studio",
        src: MAC_STUDIO,
        ativo: true,
        especificacoes: [],
        modelos: [
          {
            id: "1",
            label: "Studio M2 Max - Versão 1:",
            info: "Memória RAM: 32 GB / 64 GB | Armazenamento: 512 GB / 1TB / 2TB / 4TB / 8TB | Chip M2 Max da Apple com CPU de 12 núcleos, GPU de 30 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "2",
            label: "Studio M2 Max - Versão 2:",
            info: "Memória RAM: 32 GB / 64 GB / 96 GB | Chip M2 Max da Apple com CPU de 12 núcleos, GPU de 38 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "3",
            label: "Studio M2 Ultra - Versão 1:",
            info: "Memória RAM: 64 GB / 128 GB / 192 GB | Chip M2 Ultra da Apple com CPU de 24 núcleos, GPU de 60 núcleos e Neural Engine de 32 núcleos.",
          },
          {
            id: "4",
            label: "Studio M2 Ultra - Versão 2:",
            info: "Memória RAM: 64 GB / 128 GB / 192 GB | Chip M2 Ultra da Apple com CPU de 24 núcleos, GPU de 76 núcleos e Neural Engine de 32 núcleos.",
          },
        ],
        armazenamento: [
          {
            id: "1",
            label: "Studio M2 Max - Versão 1:",
            info: "512 GB / 1TB / 2TB / 4TB / 8TB",
          },
          {
            id: "2",
            label: "Studio M2 Max - Versão 2:",
            info: "512 GB / 1TB / 2TB / 4TB / 8TB ",
          },
          {
            id: "3",
            label: "Studio M2 Ultra - Versão 1:",
            info: "1TB / 2TB / 4TB / 8TB ",
          },
          {
            id: "4",
            label: "Studio M2 Ultra - Versão 2:",
            info: "1TB / 2TB / 4TB / 8TB",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Prateado / Preto Espacial",
          },
        ],
      },
      {
        id: "6",
        label: "Mini M2",
        src: MINIM2,
        ativo: true,
        especificacoes: [],
        modelos: [
          {
            id: "1",
            label: "Mini M2:",
            info: "Memória RAM: 8 GB / 16 GB / 24 GB | M2 da Apple com CPU de 8 núcleos, GPU de 10 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "2",
            label: "Mini M2 Pro - Versão 1:",
            info: "Memória RAM: 16 GB / 32 GB | M2 Pro da Apple com CPU de 10 núcleos, GPU de 16 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "3",
            label: "Mini M2 Pro - Versão 2:",
            info: "Memória RAM: 16 GB / 32 GB | M2 Pro da Apple com CPU de 12 núcleos, GPU de 19 núcleos e Neural Engine de 16 núcleos.",
          },
        ],
        armazenamento: [
          {
            id: "1",
            label: "Mini M2:",
            info: "256 GB / 512 GB / 1TB / 2TB",
          },
          {
            id: "2",
            label: "Mini M2 Pro - Versão 1:",
            info: "256 GB / 512 GB / 1TB / 2TB / 4TB / 8TB",
          },
          {
            id: "3",
            label: "Mini M2 Pro - Versão 2:",
            info: "256 GB / 512 GB / 1TB / 2TB / 4TB / 8TB ",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Prateado",
          },
        ],
      },
      {
        id: "7",
        label: "iMac",
        src: IMAC,
        ativo: true,
        especificacoes: [],
        modelos: [
          {
            id: "1",
            label: "iMac M3 - Versão 1:",
            info: " Chip M3 da Apple com CPU de 8 núcleos (4 de desempenho e 4 de eficiência), GPU de 8 núcleos e Neural Engine de 16 núcleos.",
          },
          {
            id: "2",
            label: "iMac M3 - Versão 2:",
            info: "Chip M3 da Apple com CPU de 8 núcleos (4 de desempenho e 4 de eficiência), GPU de 10 núcleos e Neural Engine de 16 núcleos.",
          },
        ],
        armazenamento: [
          {
            id: "1",
            label: "iMac M3 - Versão 1:",
            info: "256 GB / 512 GB / 1TB",
          },
          {
            id: "2",
            label: "iMac M3 - Versão 2:",
            info: "256 GB / 512 GB / 1TB / 2TB ",
          },
        ],
        cores: [
          {
            id: "1",
            label: "iMac M3 - Versão 1:",
            info: "Azul / Verde / Rosa / Prateado",
          },
          {
            id: "2",
            label: "iMac M3 - Versão 2:",
            info: "Azul / Verde / Rosa / Prateado / Amarelo / Laranja / Roxo",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    produto: "acessorios",
    label: "Acessórios",
    versoes: [
      {
        id: "1",
        label: "Apple Watch SE 2",
        src: APPLE_WATCH_SE_2,
        ativo: true,
        modelos: [
          {
            id: "1",
            info: "GPS",
          },
          {
            id: "2",
            info: "GPS+CELLULAR",
          },
        ],
        armazenamento: [],
        especificacoes: [
          {
            id: "1",
            label: "Pulseiras:",
            info: "Esportiva / Loop Esportiva",
          },
          {
            id: "2",
            label: "Tamanhos:",
            info: "40mm / 44mm",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Estelar / Meia Noite / Prateado",
          },
        ],
      },
      {
        id: "2",
        label: "Apple Watch S9",
        src: APPLE_WATCH_S9,
        ativo: true,
        modelos: [
          {
            id: "1",
            info: "GPS Alumínio ",
          },
          {
            id: "2",
            info: "GPS+CELLULAR Alumínio",
          },
          {
            id: "3",
            info: "GPS+CELULAR Aço Inoxidável",
          },
        ],
        armazenamento: [],
        especificacoes: [
          {
            id: "1",
            label: "Pulseiras:",
            info: "Esportiva / Loop Esportiva",
          },
          {
            id: "2",
            label: "Tamanhos:",
            info: "41mm / 45mm",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Rosa / Meia Noite / Estelar / Prateado / Vermelho",
          },
        ],
      },
      {
        id: "3",
        label: "Apple Watch Ultra 2",
        src: APPLE_WATCH_ULTRA_2,
        ativo: true,
        modelos: [
          {
            id: "1",
            info: "GPS+CELLULAR",
          },
        ],
        armazenamento: [],
        especificacoes: [
          {
            id: "1",
            label: "Pulseiras:",
            info: "Loop Alpina / Loop Trail / Oceano",
          },
          {
            id: "2",
            label: "Tamanho:",
            info: "49mm",
          },
        ],
        cores: [
          {
            id: "1",
            info: "Titânio",
          },
        ],
      },
      {
        id: "4",
        label: "AirPods",
        src: AIRPODS,
        ativo: true,
        modelos: [
          {
            id: "1",
            info: "AirPods 2",
          },
          {
            id: "2",
            info: "AirPods 3",
          },
          {
            id: "3",
            info: "AirPods Pro 2",
          },
          {
            id: "4",
            info: "AirPods Max",
          },
        ],
        armazenamento: [],
        especificacoes: [],
        cores: [
          {
            id: "1",
            label: "AirPods 2 / AirPods 3 / AirPods Pro 2:",
            info: "Branco",
          },
          {
            id: "2",
            label: "AirPods Max:",
            info: "Cinza Espacial / Rosa / Verde / Azul Céu",
          },
        ],
      },
    ],
  },
];

export default PRODUTOS;
