/* --------------- Lista de filmes --------------- */

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

  /*--------------- Perguntas --------------------*/

  const perguntas = [
    {
        pergunta: "Quem foi o diretor do filme 'Sexta-Feira 13' de 1980?",
        respostas: [
            "Wes Craven",
            "Tobe Hooper",
            "Sean S. Cunningham"
        ],
        correta: 2
    },
    {
        pergunta: "Onde se passa a maior parte da ação do filme?",
        respostas: [
            "Numa cidade pequena",
            "Numa ilha deserta",
            "Num acampamento de verão"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do assassino em 'Sexta-Feira 13'?",
        respostas: [
            "Michael Myers",
            "Jason Voorhees",
            "Freddy Krueger"
        ],
        correta: 1
    },
    {
        pergunta: "Quem é a protagonista do filme?",
        respostas: [
            "Laurie Strode",
            "Nancy Thompson",
            "Alice Hardy"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o motivo do assassino em 'Sexta-Feira 13'?",
        respostas: [
            "Vingança por uma injustiça sofrida",
            "Loucura súbita",
            "Adoração ao sobrenatural"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o título original do filme?",
        respostas: [
            "Friday the 13th",
            "Nightmare on Elm Street",
            "Halloween"
        ],
        correta: 0
    },
    {
        pergunta: "Quantos filmes da série 'Sexta-Feira 13' foram lançados até 2022?",
        respostas: [
            "3",
            "10",
            "12"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do acampamento onde ocorrem os assassinatos no filme?",
        respostas: [
            "Camp Crystal Lake",
            "Camp Green Lake",
            "Camp Firewood"
        ],
        correta: 0
    },
    {
        pergunta: "Quem foi o responsável pelo roteiro do filme?",
        respostas: [
            "Wes Craven",
            "John Carpenter",
            "Victor Miller"
        ],
        correta: 2
    },
    {
        pergunta: "Qual foi a principal influência para a criação do filme?",
        respostas: [
            "Halloween",
            "A Noite dos Mortos-Vivos",
            "O Massacre da Serra Elétrica"
        ],
        correta: 0
    }
  ];

  /*------------------------------------------------------------------------*/

  const template = document.querySelector('template')
  const filmes = document.querySelector('#filmes')
  

  for (item of movies) {
    const movieItem = template.content.cloneNode(true)
    movieItem.querySelector('p').textContent = item.titulo
    movieItem.querySelector('img').src = item.imagem
   
    

    filmes.appendChild(movieItem)
    
  }

  