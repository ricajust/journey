import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  mockPesquisa: any = [
  {
    "destinationInfo": {
      "state": "Rio de Janeiro",
      "capital": "Rio de Janeiro",
      "image": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "Famosa mundialmente pelo Cristo Redentor e o Pão de Açúcar, o Rio combina belezas naturais deslumbrantes com uma vida cultural vibrante, praias icônicas como Copacabana e o maior Carnaval do mundo.",
      "rating": 5
    }
  },
  {
    "destinationInfo": {
      "state": "São Paulo",
      "capital": "São Paulo",
      "image": "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "O centro financeiro e cultural do Brasil, São Paulo é uma metrópole cosmopolita conhecida por sua gastronomia de classe mundial, museus renomados como o MASP e o agitado centro histórico.",
      "rating": 5
    }
  },
  {
    "destinationInfo": {
      "state": "Distrito Federal",
      "capital": "Brasília",
      "image": "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "Planejada por Oscar Niemeyer e Lúcio Costa, a capital do Brasil é um marco da arquitetura modernista e do urbanismo, destacando-se pela Praça dos Três Poderes e a Catedral Metropolitana.",
      "rating": 4
    }
  },
  {
    "destinationInfo": {
      "state": "Paraná",
      "capital": "Curitiba",
      "image": "https://images.unsplash.com/photo-1626245949211-65365532a67e?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "Referência em planejamento urbano e sustentabilidade, Curitiba encanta com seus inúmeros parques, como o Jardim Botânico e a Ópera de Arame, além de um transporte público eficiente.",
      "rating": 4
    }
  },
  {
    "destinationInfo": {
      "state": "Santa Catarina",
      "capital": "Florianópolis",
      "image": "https://images.unsplash.com/photo-1599202117502-315197828062?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "A 'Ilha da Magia' é famosa por suas mais de 40 praias, que atendem desde surfistas até famílias, além da preservada cultura açoriana e vida noturna agitada na Lagoa da Conceição.",
      "rating": 5
    }
  },
  {
    "destinationInfo": {
      "state": "Amazonas",
      "capital": "Manaus",
      "image": "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "Porta de entrada para a Floresta Amazônica, Manaus destaca-se pelo luxuoso Teatro Amazonas e pelo Encontro das Águas, fenômeno onde os rios Negro e Solimões correm lado a lado sem se misturar.",
      "rating": 4
    }
  },
  {
    "destinationInfo": {
      "state": "Minas Gerais",
      "capital": "Belo Horizonte",
      "image": "https://images.unsplash.com/photo-1582260659614-25e1a1205315?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "Cercada pela Serra do Curral, a capital mineira é famosa por sua culinária afetiva, pelo Conjunto Modernista da Pampulha e pela maior concentração de bares por habitante no país.",
      "rating": 4
    }
  },
  {
    "destinationInfo": {
      "state": "Pernambuco",
      "capital": "Recife",
      "image": "https://images.unsplash.com/photo-1594437433893-b19ed4b2b0bd?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "Conhecida como a 'Veneza Brasileira' devido aos seus rios e pontes, Recife possui um rico centro histórico e a famosa praia de Boa Viagem, protegida por arrecifes naturais.",
      "rating": 4
    }
  },
  {
    "destinationInfo": {
      "state": "Rio Grande do Norte",
      "capital": "Natal",
      "image": "https://images.unsplash.com/photo-1585488118237-67995166a93b?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "A 'Cidade do Sol' é famosa por suas dunas móveis, o maior cajueiro do mundo e a Praia de Ponta Negra, onde está localizado o icônico Morro do Careca.",
      "rating": 4
    }
  },
  {
    "destinationInfo": {
      "state": "Alagoas",
      "capital": "Maceió",
      "image": "https://images.unsplash.com/photo-1538604724749-33290b396919?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "Com um mar de águas cristalinas que varia entre o verde e o azul turquesa, Maceió é conhecida por suas piscinas naturais de Pajuçara e sua orla arborizada repleta de coqueiros.",
      "rating": 5
    }
  },
  {
    "destinationInfo": {
      "state": "Paraíba",
      "capital": "João Pessoa",
      "image": "https://images.unsplash.com/photo-1606821815197-a4bc45946a4e?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "Onde o sol nasce primeiro nas Américas, a capital paraibana é uma das cidades mais verdes do mundo, unindo tranquilidade, praias limpas e um charmoso centro histórico.",
      "rating": 4
    }
  },
  {
    "destinationInfo": {
      "state": "Maranhão",
      "capital": "São Luís",
      "image": "https://images.unsplash.com/photo-1601243177309-90696ca0b9d7?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "Única capital brasileira fundada por franceses, possui um vasto acervo de casarões revestidos de azulejos portugueses e é considerada a capital nacional do reggae.",
      "rating": 4
    }
  },
  {
    "destinationInfo": {
      "state": "Pará",
      "capital": "Belém",
      "image": "https://images.unsplash.com/photo-1579453723362-e6e237372a8c?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "Famosa pelo Mercado Ver-o-Peso e pela gastronomia exótica, Belém é o coração cultural do Norte, marcada pelas mangueiras de suas ruas e pela grandiosa festa do Círio de Nazaré.",
      "rating": 5
    }
  },
  {
    "destinationInfo": {
      "state": "Goiás",
      "capital": "Goiânia",
      "image": "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "Conhecida como a capital do Art Déco e do sertanejo, Goiânia impressiona pela quantidade de parques urbanos e seu traçado planejado com amplas avenidas arborizadas.",
      "rating": 4
    }
  },
  {
    "destinationInfo": {
      "state": "Espírito Santo",
      "capital": "Vitória",
      "image": "https://images.unsplash.com/photo-1596700863001-f09c735d6451?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "Situada em uma ilha, a capital capixaba oferece belas paisagens montanhosas à beira-mar, parques ecológicos e a tradicional moqueca capixaba preparada em panelas de barro.",
      "rating": 4
    }
  },
  {
    "destinationInfo": {
      "state": "Sergipe",
      "capital": "Aracaju",
      "image": "https://images.unsplash.com/photo-1631557164402-9a3d4f40f35a?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "Considerada uma das capitais com melhor qualidade de vida do Nordeste, Aracaju se destaca pela Orla de Atalaia e pelo acesso aos belíssimos Cânions do Rio São Francisco.",
      "rating": 4
    }
  },
  {
    "destinationInfo": {
      "state": "Mato Grosso do Sul",
      "capital": "Campo Grande",
      "image": "https://images.unsplash.com/photo-1570743609805-4f3640b6e703?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "Conhecida como 'Cidade Morena', é um importante entreposto cultural e ponto de partida para o Pantanal Sul, famosa por sua arborização e fauna urbana exuberante.",
      "rating": 4
    }
  },
  {
    "destinationInfo": {
      "state": "Rio Grande do Sul",
      "capital": "Porto Alegre",
      "image": "https://images.unsplash.com/photo-1555524814-729906d093da?q=80&w=300&h=200&auto=format&fit=crop",
      "description": "A capital gaúcha é um polo cultural e econômico, famosa pelo pôr do sol no Lago Guaíba, pelo Parque da Redenção e por sua forte tradição ligada ao churrasco e ao chimarrão.",
      "rating": 4
    }
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
