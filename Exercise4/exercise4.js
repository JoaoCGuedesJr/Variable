/* 
    Buscando e contando dados em Arrays 

    Baseando no array de livros por categoria abaixo, faça os seguintes desafios
    
        * Contar o nùmero de categorias e o número de livros em cada categoria 
        * Contar o numero de aturores
        * Mostrar livros do Autor Augusto Cury
        * TRransformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor 

*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos damente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homeme mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T, Kiyesaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligêcia emocional",
    books: [
      {
        title: "Você é insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R Covey",
      },
    ],
  },
];

const totalDeCategorias = booksByCategory.length;

for (let categoria of booksByCategory) {
  console.log("O total de livros por categoria: ", categoria.category);
  console.log(categoria.books.length);
}

function contadorAutores() {
  let autores = [];

  for (let categoria of booksByCategory) {
    for (let livros of categoria.books) {
      if (autores.indexOf(book.author) == -1) {
        author.push(book.author);
      }
    }
  }
  console.log("total de autores ", autores.length);
}

contadorAutores(),
  /*
function livrosDoCury() {
    let livros = [];

    for (let categoria of booksByCategory) {
      for (let livros of categoria.books) {
        if (book.author == "Augusto Cury") {
          books.push(book.title);
        }
      }
    }
    console.log("total de autor ", books);
  };

livrosDoCury();
*/

  function livrosPorAutor() {
    let livros = [];

    for (let categoria of booksByCategory) {
      for (let livros of categoria.books) {
        if (book.author == "Augusto Cury") {
          books.push(book.title);
        }
      }
    }
    console.log("total de autor ", books);
  };

livrosDoCury();
