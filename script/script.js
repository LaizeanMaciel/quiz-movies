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

  const template = document.querySelector('template')
  const filmes = document.querySelector('#filmes')
  

  for (item of movies) {
    const movieItem = template.content.cloneNode(true)
    movieItem.querySelector('p').textContent = item.titulo
    movieItem.querySelector('img').src = item.imagem
   
    

    filmes.appendChild(movieItem)
    
  }