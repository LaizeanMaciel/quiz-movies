
/*const filmes = [
    {
        titulo: "Sexta-Feira 13",
        perguntas: [
            {
                pergunta: "Quem é o assassino no filme Sexta-Feira 13 de 1980?",
                respostas: [
                    "Jason Voorhees",
                    "Pamela Voorhees",
                    "Freddy Krueger"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o nome do acampamento onde ocorrem os assassinatos no filme?",
                respostas: [
                    "Acampamento Crystal Lake",
                    "Acampamento de Verão",
                    "Acampamento do Lago Negro"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o motivo dos assassinatos no filme?",
                respostas: [
                    "Vingança",
                    "Loucura",
                    "Ritual macabro"
                ],
                correta: 0
            },
            {
                pergunta: "Quantos anos se passaram desde o incidente original até os eventos do filme?",
                respostas: [
                    "10 anos",
                    "20 anos",
                    "30 anos"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é o destino final da protagonista, Alice, no filme?",
                respostas: [
                    "Ela sobrevive",
                    "Ela é morta",
                    "Ela fica traumatizada"
                ],
                correta: 0
            },
            {
                pergunta: "Como Jason Voorhees morreu originalmente?",
                respostas: [
                    "Afogado no lago",
                    "Decapitado",
                    "Queimado em um incêndio"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o principal objeto de cena associado ao assassino?",
                respostas: [
                    "Uma faca",
                    "Uma serra elétrica",
                    "Um machado"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o título original do filme Sexta-Feira 13 de 1980?",
                respostas: [
                    "Friday the 13th",
                    "The Nightmare on Elm Street",
                    "The Texas Chain Saw Massacre"
                ],
                correta: 0
            },
            {
                pergunta: "Quantas sequências diretas o filme original gerou?",
                respostas: [
                    "7",
                    "8",
                    "9"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é a classificação indicativa do filme Sexta-Feira 13 de 1980?",
                respostas: [
                    "PG-13",
                    "R",
                    "NC-17"
                ],
                correta: 1
            }
        ]
    },
    {
        titulo: "O Auto da Compadecida",
        perguntas: [
            {
                pergunta: "Quem é o protagonista de O Auto da Compadecida?",
                respostas: [
                    "João Grilo",
                    "Chicó",
                    "Padre João"
                ],
                correta: 0
            },
            {
                pergunta: "Quem é a Compadecida em O Auto da Compadecida?",
                respostas: [
                    "Nossa Senhora",
                    "A mulher do padeiro",
                    "A mãe de Jesus"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o sonho de Chicó em O Auto da Compadecida?",
                respostas: [
                    "Ter uma casa",
                    "Casar com Rosinha",
                    "Ser um padre"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é o apelido dado a João Grilo?",
                respostas: [
                    "Bicudo",
                    "Esperto",
                    "Guerreiro"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o nome do cachorro de Seu João?",
                respostas: [
                    "A Cachorra",
                    "A Pulga",
                    "A Peste"
                ],
                correta: 2
            },
            {
                pergunta: "Quem é o cangaceiro que aparece no julgamento de Chicó?",
                respostas: [
                    "Lampião",
                    "Antônio Silvino",
                    "Coronel"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é a cidade onde se passa a história de O Auto da Compadecida?",
                respostas: [
                    "Taperoá",
                    "Recife",
                    "Salvador"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é a profissão de João Grilo?",
                respostas: [
                    "Vendedor de tecidos",
                    "Padeiro",
                    "Desempregado"
                ],
                correta: 0
            },
            {
                pergunta: "Quem é o juiz do julgamento de Chicó?",
                respostas: [
                    "Padre",
                    "Coronel",
                    "Bispo"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é a relação de Chicó com Rosinha?",
                respostas: [
                    "Namorados",
                    "Casados",
                    "Amigos"
                ],
                correta: 0
            }
        ]
    },
    {
        titulo: "Vingadores: Guerra Infinita",
        perguntas: [
            {
                pergunta: "Quem é o vilão principal em Vingadores: Guerra Infinita?",
                respostas: [
                    "Thanos",
                    "Loki",
                    "Ultron"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o nome da primeira Joia do Infinito que aparece no filme?",
                respostas: [
                    "Joia do Espaço",
                    "Joia da Mente",
                    "Joia da Realidade"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é o nome do planeta natal de Thanos?",
                respostas: [
                    "Xandar",
                    "Titan",
                    "Sakaar"
                ],
                correta: 1
            },
            {
                pergunta: "Quem é o portador original da Joia da Alma?",
                respostas: [
                    "Gamora",
                    "Heimdall",
                    "Red Skull"
                ],
                correta: 2
            },
            {
                pergunta: "Quem é o único personagem que não é desintegrado pelo estalar de dedos de Thanos no final do filme?",
                respostas: [
                    "Homem de Ferro",
                    "Capitão América",
                    "Thor"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o nome da arma que Thor forja para enfrentar Thanos?",
                respostas: [
                    "Mjolnir",
                    "Stormbreaker",
                    "Gungnir"
                ],
                correta: 1
            },
            {
                pergunta: "Quem é o único personagem que consegue machucar Thanos durante o filme?",
                respostas: [
                    "Homem de Ferro",
                    "Thor",
                    "Hulk"
                ],
                correta: 1
            },
            {
                pergunta: "Quantas Joias do Infinito Thanos já possui no início do filme?",
                respostas: [
                    "0",
                    "3",
                    "5"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é o nome do grupo de super-heróis liderado por Thanos?",
                respostas: [
                    "A Ordem Negra",
                    "Os Mestres do Mal",
                    "Os Vingadores"
                ],
                correta: 0
            },
            {
                pergunta: "Quem é o personagem que mais luta contra Thanos durante o filme?",
                respostas: [
                    "Homem de Ferro",
                    "Thor",
                    "Capitão América"
                ],
                correta: 2
            }
        ]
    },
    {
        titulo: "Simplesmente Acontece",
        perguntas: [
            {
                pergunta: "Quem são os melhores amigos no filme Simplesmente Acontece?",
                respostas: [
                    "Rosie e Alex",
                    "Lily e Alex",
                    "Rosie e Greg"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o destino de Rosie no final do filme?",
                respostas: [
                    "Ela se casa com Greg",
                    "Ela se casa com Alex",
                    "Ela permanece solteira"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é o nome do filho de Rosie em Simplesmente Acontece?",
                respostas: [
                    "Toby",
                    "William",
                    "Greg"
                ],
                correta: 0
            },
            {
                pergunta: "Quem é o primeiro a perceber os sentimentos de Alex por Rosie?",
                respostas: [
                    "Rosie",
                    "Greg",
                    "Lily"
                ],
                correta: 2
            },
            {
                pergunta: "Qual é a cidade natal de Rosie e Alex em Simplesmente Acontece?",
                respostas: [
                    "Londres",
                    "Dublin",
                    "Nova York"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é o nome da banda que Alex faz parte no filme?",
                respostas: [
                    "The Rats",
                    "The Rosies",
                    "The Gents"
                ],
                correta: 0
            },
            {
                pergunta: "Quantos anos Rosie e Alex têm quando se conhecem?",
                respostas: [
                    "5 anos",
                    "11 anos",
                    "16 anos"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é o evento importante que Rosie e Alex planejam ir juntos desde a infância?",
                respostas: [
                    "O baile de formatura",
                    "O casamento de Rosie",
                    "A viagem à Paris"
                ],
                correta: 2
            },
            {
                pergunta: "Qual é a profissão de Rosie em Simplesmente Acontece?",
                respostas: [
                    "Jornalista",
                    "Advogada",
                    "Médica"
                ],
                correta: 0
            },
            {
                pergunta: "Quem é o primeiro amor de Rosie no filme?",
                respostas: [
                    "Alex",
                    "Greg",
                    "Toby"
                ],
                correta: 1
            }
        ]
    },
    {
        titulo: "Invocação do Mal",
        perguntas: [
            {
                pergunta: "Quem são os protagonistas em Invocação do Mal?",
                respostas: [
                    "Ed e Lorraine Warren",
                    "Roger e Carolyn Perron",
                    "Katie e Micah"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o nome da família que se muda para a casa assombrada?",
                respostas: [
                    "Perron",
                    "Warren",
                    "Lutz"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o nome do demônio que assombra a família Perron?",
                respostas: [
                    "Pazuzu",
                    "Annabelle",
                    "Bathsheba"
                ],
                correta: 2
            },
            {
                pergunta: "Qual é a profissão de Ed Warren em Invocação do Mal?",
                respostas: [
                    "Padre",
                    "Demonologista",
                    "Cientista"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é a relação entre os Warren e os Perron?",
                respostas: [
                    "São vizinhos",
                    "São parentes distantes",
                    "São amigos de infância"
                ],
                correta: 1
            },
            {
                pergunta: "Onde se passa a maior parte do filme?",
                respostas: [
                    "Em uma casa assombrada",
                    "Em um hospital psiquiátrico",
                    "Em um cemitério"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o objeto que é um portal para o mundo dos espíritos?",
                respostas: [
                    "Um espelho",
                    "Um tabuleiro ouija",
                    "Uma caixa de música"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o destino final da família Perron no filme?",
                respostas: [
                    "Eles fogem da casa",
                    "Eles morrem",
                    "Eles conseguem expulsar o demônio"
                ],
                correta: 0
            },
            {
                pergunta: "Quantos filmes compõem a série principal de Invocação do Mal até 2024?",
                respostas: [
                    "3",
                    "4",
                    "5"
                ],
                correta: 2
            },
            {
                pergunta: "Qual é a ocupação da mãe, Carolyn Perron, em Invocação do Mal?",
                respostas: [
                    "Médica",
                    "Professora",
                    "Dona de casa"
                ],
                correta: 2
            }
        ]
    },
    {
        titulo: "Shrek",
        perguntas: [
            {
                pergunta: "Quem é o protagonista principal em Shrek?",
                respostas: [
                    "Shrek",
                    "Fiona",
                    "Burro"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o nome do reino onde Shrek mora?",
                respostas: [
                    "Reino de Far Far Away",
                    "Reino de Duloc",
                    "Reino de Camelot"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o nome completo de Fiona?",
                respostas: [
                    "Princesa Fiona Duloc",
                    "Princesa Fiona Farquaad",
                    "Princesa Fiona Ogress"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é a espécie de animal do Burro em Shrek?",
                respostas: [
                    "Cavalo",
                    "Gato",
                    "Burro"
                ],
                correta: 2
            },
            {
                pergunta: "Quem é o vilão principal em Shrek?",
                respostas: [
                    "Lord Farquaad",
                    "Fada Madrinha",
                    "Príncipe Encantado"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é a missão dada a Shrek por Lord Farquaad?",
                respostas: [
                    "Resgatar a Princesa Fiona",
                    "Capturar um dragão",
                    "Conquistar o Reino de Duloc"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o animal de estimação de Fiona quando ela está na torre?",
                respostas: [
                    "Gato",
                    "Rato",
                    "Dragão"
                ],
                correta: 2
            },
            {
                pergunta: "Qual é o verdadeiro amor de Fiona em Shrek?",
                respostas: [
                    "Príncipe Encantado",
                    "Shrek",
                    "Burro"
                ],
                correta: 1
            },
            {
                pergunta: "O que Shrek e seus amigos usam para invadir o castelo de Lord Farquaad?",
                respostas: [
                    "Um barco",
                    "Um avião",
                    "Um dragão"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o nome do pântano onde Shrek vive?",
                respostas: [
                    "Pântano de Swampville",
                    "Pântano de Duloc",
                    "Pântano de Far Far Away"
                ],
                correta: 2
            }
        ]
    },
    {
        titulo: "Premonição",
        perguntas: [
            {
                pergunta: "Qual é o principal tema do filme Premonição?",
                respostas: [
                    "Viagens no tempo",
                    "Assassinato em série",
                    "Morte inevitável"
                ],
                correta: 2
            },
            {
                pergunta: "Quem é o diretor do filme Premonição?",
                respostas: [
                    "Wes Craven",
                    "James Wan",
                    "David R. Ellis"
                ],
                correta: 2
            },
            {
                pergunta: "Qual é o meio de transporte envolvido no acidente inicial de Premonição?",
                respostas: [
                    "Avião",
                    "Ônibus",
                    "Carro"
                ],
                correta: 0
            },
            {
                pergunta: "O que os personagens principais de Premonição descobrem sobre a morte?",
                respostas: [
                    "Que podem prever o futuro",
                    "Que estão amaldiçoados",
                    "Que podem evitar a morte se souberem o que vai acontecer"
                ],
                correta: 2
            },
            {
                pergunta: "Qual é a ordem correta das mortes dos personagens principais em Premonição?",
                respostas: [
                    "De acordo com a idade",
                    "De acordo com a cor do cabelo",
                    "De acordo com a ordem que deveriam ter morrido"
                ],
                correta: 2
            },
            {
                pergunta: "Quem é o sobrevivente final de Premonição?",
                respostas: [
                    "O herói",
                    "A heroína",
                    "Ninguém, todos morrem"
                ],
                correta: 2
            },
            {
                pergunta: "O que os personagens principais de Premonição fazem para tentar evitar a morte?",
                respostas: [
                    "Se trancam em casa",
                    "Buscam ajuda da polícia",
                    "Tentam burlar as leis naturais"
                ],
                correta: 2
            },
            {
                pergunta: "Quem é o primeiro a ter uma premonição do acidente?",
                respostas: [
                    "O protagonista",
                    "A namorada do protagonista",
                    "Um estranho"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é o principal elemento usado pelo destino para matar as vítimas?",
                respostas: [
                    "Água",
                    "Fogo",
                    "Ar"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é a faixa etária dos personagens principais em Premonição?",
                respostas: [
                    "Adolescentes",
                    "Adultos jovens",
                    "Adultos"
                ],
                correta: 1
            }
        ]
    },
    {
        titulo: "Jurassic Park",
        perguntas: [
            {
                pergunta: "Quem é o criador do parque em Jurassic Park?",
                respostas: [
                    "John Hammond",
                    "Alan Grant",
                    "Ian Malcolm"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é a espécie de dinossauro que é clonada em Jurassic Park?",
                respostas: [
                    "Tiranossauro Rex",
                    "Velociraptor",
                    "Dilofossauro"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o nome da ilha onde Jurassic Park está localizado?",
                respostas: [
                    "Isla Nublar",
                    "Isla Sorna",
                    "Isla Muerta"
                ],
                correta: 0
            },
            {
                pergunta: "Quem é o paleontólogo principal em Jurassic Park?",
                respostas: [
                    "Alan Grant",
                    "Ellie Sattler",
                    "Ian Malcolm"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é a espécie de dinossauro que é inicialmente pensada como vegetariana em Jurassic Park?",
                respostas: [
                    "Tricerátops",
                    "Stegossauro",
                    "Brachiossauro"
                ],
                correta: 2
            },
            {
                pergunta: "Qual é o nome da empresa que financiou a criação de Jurassic Park?",
                respostas: [
                    "InGen",
                    "BioSyn",
                    "Masrani Global"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é a espécie de dinossauro que é conhecida por cuspir veneno em Jurassic Park?",
                respostas: [
                    "Dilofossauro",
                    "Compsognathus",
                    "Troodon"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é a razão pela qual os dinossauros começam a se reproduzir descontroladamente em Jurassic Park?",
                respostas: [
                    "Os ovos são fertilizados por raios solares",
                    "As barreiras de contenção são quebradas por um terremoto",
                    "Os cientistas deliberadamente querem criar mais dinossauros"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é o motivo principal pelo qual Jurassic Park falha?",
                respostas: [
                    "Os dinossauros escapam e causam estragos",
                    "Os visitantes não estão interessados ​​nos dinossauros",
                    "Os cientistas não podem controlar o comportamento dos dinossauros"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o nome do matemático que é convidado a avaliar a segurança de Jurassic Park?",
                respostas: [
                    "Ian Malcolm",
                    "Alan Grant",
                    "Robert Muldoon"
                ],
                correta: 0
            }
        ]
    },
    {
        titulo: "Harry Potter: E a Pedra Filosofal",
        perguntas: [
            {
                pergunta: "Qual é a casa em Hogwarts à qual Harry Potter pertence?",
                respostas: [
                    "Gryffindor",
                    "Slytherin",
                    "Ravenclaw"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o nome completo do personagem principal em Harry Potter?",
                respostas: [
                    "Harry James Potter",
                    "Harry Daniel Potter",
                    "Harry John Potter"
                ],
                correta: 0
            },
            {
                pergunta: "Quem é o melhor amigo de Harry Potter?",
                respostas: [
                    "Ron Weasley",
                    "Hermione Granger",
                    "Neville Longbottom"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o nome do vilão principal em Harry Potter: E a Pedra Filosofal?",
                respostas: [
                    "Voldemort",
                    "Grindelwald",
                    "Malfoy"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o esporte favorito de Harry Potter em Hogwarts?",
                respostas: [
                    "Quidditch",
                    "Futebol",
                    "Xadrez"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o nome do diretor de Hogwarts em Harry Potter: E a Pedra Filosofal?",
                respostas: [
                    "Dumbledore",
                    "Snape",
                    "McGonagall"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é a varinha mágica de Harry Potter feita de?",
                respostas: [
                    "Teixo",
                    "Azevinho",
                    "Videira"
                ],
                correta: 1
            },
            {
                pergunta: "Quem é o professor de poções em Hogwarts em Harry Potter: E a Pedra Filosofal?",
                respostas: [
                    "Snape",
                    "Slughorn",
                    "Lockhart"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o nome do fantasma que assombra a torre do Gryffindor em Hogwarts?",
                respostas: [
                    "Caveira",
                    "Nicky",
                    "Sir Nicholas de Mimsy-Porpington"
                ],
                correta: 2
            },
            {
                pergunta: "Qual é o nome do gigante guardião de Hogwarts?",
                respostas: [
                    "Hagrid",
                    "Grawp",
                    "Fluffy"
                ],
                correta: 2
            }
        ]
    },
    {
        titulo: "Your Name",
        perguntas: [
            {
                pergunta: "Qual é o nome do personagem masculino principal em Your Name?",
                respostas: [
                    "Taki",
                    "Mitsuha",
                    "Tessie"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o nome do personagem feminino principal em Your Name?",
                respostas: [
                    "Taki",
                    "Mitsuha",
                    "Tessie"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é o elemento central da trama de Your Name?",
                respostas: [
                    "Troca de corpos",
                    "Viagem no tempo",
                    "Conspiração governamental"
                ],
                correta: 0
            },
            {
                pergunta: "Onde se passa a maior parte da história de Your Name?",
                respostas: [
                    "Tóquio",
                    "Kyoto",
                    "Hida"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é o desejo de Mitsuha em Your Name?",
                respostas: [
                    "Tornar-se famosa",
                    "Fugir de sua cidade",
                    "Conhecer o garoto dos seus sonhos"
                ],
                correta: 2
            },
            {
                pergunta: "Qual é o desejo de Taki em Your Name?",
                respostas: [
                    "Tornar-se um bom desenhista",
                    "Encontrar o amor verdadeiro",
                    "Tornar-se um político"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é o evento catastrófico que acontece perto do final de Your Name?",
                respostas: [
                    "Terremoto",
                    "Tsunami",
                    "Erupção vulcânica"
                ],
                correta: 0
            },
            {
                pergunta: "Quem é Tessie em Your Name?",
                respostas: [
                    "Irmã de Taki",
                    "Irmã de Mitsuha",
                    "Amiga de Taki"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é o método de comunicação usado por Taki e Mitsuha após o evento principal em Your Name?",
                respostas: [
                    "Cartas",
                    "E-mails",
                    "Mensagens de texto"
                ],
                correta: 2
            },
            {
                pergunta: "Qual é o destino final de Taki e Mitsuha em Your Name?",
                respostas: [
                    "Eles vivem felizes para sempre",
                    "Eles nunca se encontram",
                    "Eles se encontram novamente"
                ],
                correta: 2
            }
        ]
    }
];

console.log(filmes[1]);*/

const movies = [
    {
        titulo: "Sexta-Feira 13",
        imagem : "./images/sexta-feira-13.jpg",
        
    },

    {
        titulo: "O auto da Compadecida",
        imagem : "./images/auto-compadecida.jpg",
        
    },

    {
        titulo: "Vingadores: Guerra Infinita",
        imagem : "./images/vingadores.jpg",
    },

    {
        titulo: "Simplesmente Acontece",
        imagem : "./images/simplesmente-acontece.png",
        
    },

    {
        titulo: "Invocação do Mal",
        imagem : "./images/invocacao-mal.jpg",
        
    },

    {
        titulo: "Shrek",
        imagem : "./images/shrek.jpg",
        
    },

    {
        titulo: "Premonição",
        imagem : "./images/premonicao.jpg",
        
    },

    {
        titulo: "Jurassic Park",
        imagem : "./images/jurassic-park.jpg",
        
    },

    {
        titulo: "Harry Potter: E a Pedra Filosofal",
        imagem : "./images/harry-potter.jpg",
        
    },

    {
        titulo: "Your Name",
        imagem : "./images/your-name.jpg",
        
    },
   
  ];


for (let i = 0; i < movies.length; i++) {
    movies[i].valor = i + 1; // Valor começa em 1 e aumenta a cada filme
    movies[i].posicao = i + 1; // Posição começa em 1 e aumenta a cada filme
}

// Exibir a posição de cada filme no console
for (let i = 0; i < movies.length; i++) {
    console.log(`Título: ${movies[i].titulo}, Posição: ${movies[i].posicao}`);
}
