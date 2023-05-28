import { mockTechIcons } from "./mockTechIcons";

import pokedex from "../../assets/img/projects/pokedex.jpg"
import jogoLetreco from "../../assets/img/projects/jogo-letreco.jpg"
import jogoForca from "../../assets/img/projects/jogo-forca.jpg"
import portfolio from "../../assets/img/projects/portfolio.jpg"
import pomodoro from "../../assets/img/projects/pomodoro.jpg"
import megaSena from "../../assets/img/projects/mega-sena.jpg"
import imovi from "../../assets/img/projects/imovi.jpg"
import android from "../../assets/img/projects/android.jpg"
import formCadastro from "../../assets/img/projects/form-cadastro.jpg"
import sistemaFinanceiro from "../../assets/img/projects/sistema-financeiro.jpg"
import weatherApp from "../../assets/img/projects/weather-app.jpg"
import mapApp from "../../assets/img/projects/map-app.jpg"
import flagApp from "../../assets/img/projects/flag-app.jpg"
import portfolio23 from "../../assets/img/projects/portfolio-23.jpg"

export const mockProjects = [
  {
    "id": 1,
    "title": "Portfólio 2023",
    "description": "Para esse projeto o intuito foi atualizar o portfólio, entretanto como passei a utilizar ReactJS ao invés do Angular tive que criar um novo, o que foi uma ótima oportunidade de perceber a evolução que tive nesse tempo entre a criação do primeiro e do segundo portfólio. Para esse projeto utilizei ReactJS juntamente com TailwindCSS. Em breve será adicionado ao projeto novas funcionalidades.",
    "linkRepository": "https://github.com/racalixta/portfolio-reactjs",
    "linkSite": "https://portfolio-reactjs-racalixta.vercel.app/",
    "image": `${portfolio23}`,
    "icons": [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.react}`, `${mockTechIcons.tailwind}`],
    "techs": ["HTML5", "CSS3", "ReactJS", "TailwindCSS" ],
  },
  {
    id: 2,
    title: "Pokédex",
    description: "Desafio de criar uma Pokédex que tem como utilização a API PokeAPI  para o fornecimento dos dados. Para a construção desse projeto foi utilizado HTML5, CSS3, SCSS, Typescript e Angular.",
    linkRepository: "https://github.com/racalixta/pokedex-angular",
    linkSite: "https://racalixta.github.io/pokedex-angular/",
    image: `${pokedex}`,
    icons: [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.sass}`, `${mockTechIcons.typescript}`, `${mockTechIcons.angular}`],
    techs: ["HTML5", "CSS3", "SASS", "Typescript", "Angular"],
  },
  {
    "id": 3,
    "title": "Mapa App",
    "description": "Processo seletivo que participei para criação de dois seletores, um de Estado e outros das Cidades desse Estado com a utilização da API do IBGE. Ao selecionar uma Cidade deveria buscar as informações da Cidade na API, como uma forma de fazer a mais utilizei a biblioteca Leaflet para mostrar o mapa da Cidade selecionada. Como forma de avialação era obrigatório o uso de ReactJS e Redux, para a estilização utilizei TailwindCSS. ",
    "linkRepository": "https://github.com/racalixta/ps-ipam-seletor",
    "linkSite": "https://ps-ipam-vercel-racalixta.vercel.app/",
    "image": `${mapApp}`,
    "icons": [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.react}`, `${mockTechIcons.tailwind}`],
    "techs": ["HTML5", "CSS3", "React", "TailwindCSS" ],
  },
  {
    id: 4,
    title: "Portfólio 2022",
    description: "A ideia foi criar um portfólio que contém uma descrição básica sobre a minha pessoa e onde eu possa colocar todos os meus projetos desenvolvidos. Para a criação foi utilizado HTML5, CSS3, Angular e Bootstrap.",
    linkRepository: "https://github.com/racalixta/portfolio-project",
    linkSite: "https://racalixta.github.io/portfolio-project/",
    image: `${portfolio}`,
    icons: [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.angular}`,`${mockTechIcons.typescript}`, `${mockTechIcons.bootstrap}`],
    techs: ["HTML5", "CSS3", "Angular", "Typescript", "Bootstrap"],
  },
  {
    id: 5,
    title: "Controle Financeiro",
    description: "Projeto com ideia de criar um sistema de controle de finanças. Para a construção do projeto foi utilizado ReactJS junto com Typescript, Styled Components, HTML e CSS. Para o deploy do aplicativo foi utilizado o Vercel.",
    linkRepository: "https://github.com/racalixta/expense-tracker",
    linkSite: "https://expense-tracker-alpha-one.vercel.app/",
    image: `${sistemaFinanceiro}`,
    icons: [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.react}`, `${mockTechIcons.typescript}`],
    techs: ["HTML5", "CSS3", "React", "Typescript" ],
  },
  {
    id: 6,
    title: "iMovi",
    description: "Desafio de criar um landing page responsiva para diversos tamanhos de telas de uma empresa de imóveis. Para a criação foi utilizado HTML5, CSS3 e Bootstrap 5.",
    linkRepository: "https://github.com/racalixta/projeto-imovi",
    linkSite: "https://racalixta.github.io/projeto-imovi/",
    image: `${imovi}`,
    icons: [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.bootstrap}`],
    techs: ["HTML5", "CSS3", "Bootstrap"],
  },
  {
    id: 7,
    title: "Formulário de Cadastro",
    description: "Desafio de criar um formulário de cadastro que fosse responsivo à diversos tamanhos de telas. Para não ser apenas um HTML e CSS estático, desenvolvi uma pequena validação em JavaScript do formulário.",
    linkRepository: "https://github.com/racalixta/projeto-formulario-cadastro",
    linkSite: "https://racalixta.github.io/projeto-formulario-cadastro/",
    image: `${formCadastro}`,
    icons: [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.javascript}`],
    techs: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 8,
    title: "Clima",
    description: "Projeto de um aplciativo para monitoramento do clima, foi construído com o uso de uma Weather API da Open Weather, com o intuito de ser possível pesquisar qualquer cidade do mundo. Foi utilizado as seguintes tecnologias: React, TailwindCSS, HTML e CSS.",
    linkRepository: "https://github.com/racalixta/weather-app",
    linkSite: "https://weather-app-tau-one-62.vercel.app/",
    image: `${weatherApp}`,
    icons: [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.react}`, `${mockTechIcons.javascript}`, `${mockTechIcons.tailwind}`],
    techs: ["HTML5", "CSS3", "React", "Tailwind CSS"],
  },
  {
    "id": 9,
    "title": "App de Países",
    "description": "Projeto de aplicativo com o intuito de mostrar informações de diversos países, para tal feito foi utilizado uma API com as informações dos países. As tecnologias utilizadas para o desenvolvimento foi HTML, CSS, React e TailwindCSS.",
    "linkRepository": "https://github.com/racalixta/flag-app",
    "linkSite": "https://flag-app-one.vercel.app/",
    "image": `${flagApp}`,
    "icons": [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.react}`, `${mockTechIcons.tailwind}`],
    "techs": ["HTML5", "CSS3", "React", "Tailwind CSS"],
  },
  {
    id: 10,
    title: "Jogo da Forca",
    description: "Desafio de criar um jogo da forca, com sorteio da palavra-chave automático, por meio de uma lista de plavras feito pelo JavaScript. Para a realização desse projeto foi utilizado HTML5, CSS3 e JavaScript.",
    linkRepository: "https://github.com/racalixta/projeto-forca",
    linkSite: "https://racalixta.github.io/projeto-forca/",
    image: `${jogoForca}`,
    icons: [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.javascript}`],
    techs: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 11,
    title: "Jogo Letreco",
    description: "Desafio de replicar o jogo Letreco, que consiste em descobrir qual é a palavra do dia em um certo número de tentativas. Para o desenvolvimento foi utilizado HTML5, CSS3 e JavaScript.",
    linkRepository: "https://github.com/racalixta/projeto-jogo-letreco",
    linkSite: "https://racalixta.github.io/projeto-jogo-letreco/",
    image: `${jogoLetreco}`,
    icons: [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.javascript}`],
    techs: ["HTML5", "CSS3", "JavaScript"],
  },
  {
  id: 12,
  title: "Timer Pomodoro",
  description: "Desafio de um Timer Pomodoro, que consiste em um Timer que alterna entre dois ciclos, um de trabalho/ação e um de descanso por uma quantidade de seções, com uma quantidade certa de minutos para cada ciclo, que pode ser escolhido pelo usuário.",
  linkRepository: "https://github.com/racalixta/projeto-timer-pomodoro",
  linkSite: "https://racalixta.github.io/projeto-timer-pomodoro/",
  image: `${pomodoro}`,
  icons: [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.javascript}`],
  techs: ["HTML5", "CSS3", "JavaScript"],
},
  {
    id: 13,
    title: "Mega-Sena",
    description: "Este desafio foi pensado para desenvolver um simulador de sorteio da mega-sena. Para desenvolvido também um botão para alternar o site em o light mode e dark mode. Para a realização foi utilizado HTML5, CSS3 e JavaScript.",
    linkRepository: "https://github.com/racalixta/projeto-megaSena",
    linkSite: "https://racalixta.github.io/projeto-megaSena/",
    image: `${megaSena}`,
    icons: [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.javascript}`],
    techs: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 14,
    title: "Site Android",
    description: "Desafio feito durante o curso de HTML5 e CSS3 do Curso em vídeo, o objetivo era criar um site responsivo sobre a histório do Android. Foi utilizado HTML5 e CSS3.",
    linkRepository: "https://github.com/racalixta/projeto-android",
    linkSite: "https://racalixta.github.io/projeto-android/",
    image: `${android}`,
    icons: [`${mockTechIcons.html}`, `${mockTechIcons.css}`],
    techs: ["HTML5", "CSS3"],
  },

  /*
  {
    "id": 10,
    "title": "",
    "description": "",
    "linkRepository": "",
    "linkSite": "",
    "image": ["", `${projectImg}`],
    "icons": [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.sass}`, `${mockTechIcons.typescript}`, `${mockTechIcons.angular}`],
    "techs": ["HTML5", "CSS3", ],
  },
  */

  
];