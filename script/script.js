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

  /*-------------------------------------------------------------------*/


  const perguntas = [
    {
        pergunta: "Quem é o assassino no filme Sexta-Feira 13 de 1980?",
        respostas: [
            "Jason Voorhees",
            "Pamela Voorhees",
            "Freddy Krueger"
        ],
        correta: 1
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
  ];


  

  /*----------------------------------------------------------------------*/

  const template = document.querySelector('template')
  const filmes = document.querySelector('#filmes')
  
  

  for (item of movies) {
    const movieItem = template.content.cloneNode(true)
    movieItem.querySelector('p').textContent = item.titulo
    movieItem.querySelector('img').src = item.imagem

    filmes.appendChild(movieItem)
    
  }

    const quizItens = document.querySelector('.quiz-itens')
    const quiz = document.querySelector('.quiz')
    const corretas = new Set()

    for (let i = 0; i < perguntas.length; i++) {
        const item = perguntas[i];
        const quizPerguntas = quizItens.cloneNode(true);
        quizPerguntas.querySelector('h2').textContent = item.pergunta;
    
        for (let resposta of item.respostas) {
            const dt = quizPerguntas.querySelector('dl dt').cloneNode(true)
            dt.querySelector('p').textContent = resposta
            dt.querySelector('input').setAttribute('name', 'pergunta-' + i); // Corrigido para usar o índice 'i'
            dt.querySelector('input').value = item.respostas.indexOf(resposta)
            dt.querySelector('input').onchange = (event) => {
                const estaCorreta = event.target.value == item.correta

                    corretas.delete(item)
                if (estaCorreta) {
                    alert('acertou')
                    corretas.add(item)
                }
                alert(corretas.size)
            }
    
            quizPerguntas.querySelector('dl').appendChild(dt)
        }
    
        quiz.appendChild(quizPerguntas)
        quizPerguntas.querySelector('dl dt').remove()

    }  quizItens.remove()


/*---------------------MODAL-1-----------------------*/
    
var quizbtn = $(".quiz-btn");
var modal = $("#modal");
var modalClose = $("#modal .modal-close");
var modalBackground = $("#modal .modal-bg");

quizbtn.click(function () {
    modal.fadeIn(500);
});

modalClose.click(function () {
    modal.fadeOut(500);
});

/*---------------------MODAL-2-----------------------*/

var resultBtn = $(".result-btn")
var modal2 = $("#modal-2")
var modalClose2 = $("#modal-2 .modal-close-2")
var modalBackground2 = $('#modal-2 .modal-bg-2')

resultBtn.click(function () {
    modal2.fadeIn(500)
})

modalClose2.click(function () {
    modal2.fadeOut(500);
})


   


