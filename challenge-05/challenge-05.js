/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['Marcus', 'Carvalho', 31, true, 72, 1.73];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg){
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(arr[1]); //'Carvalho'

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function newFunction(arg, index){
    return arg[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newArr = ['String', 10, true, [1, 2], { nome: 'Marcus', idade: 31 }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
newFunction(newArr, 0); //'String'
newFunction(newArr, 1); //10
newFunction(newArr, 2); //true
newFunction(newArr, 3); //[ 1, 2 ]
newFunction(newArr, 4); //{ nome: 'Marcus', idade: 31 }

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name){
    var allBooks = {
        book1: {
            quantidadePaginas: 200,
            autor: 'Autor Livro 1',
            editora: 'Editora livro 1'
        },
        book2: {
            quantidadePaginas: 300,
            autor: 'Autor Livro 2',
            editora: 'Editora livro 2'
        },
        book3: {
            quantidadePaginas: 400,
            autor: 'Autor Livro 3',
            editora: 'Editora livro 3'
        }
    };

    return !name ? allBooks : allBooks[name];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'book1';
console.log('O livro '  + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro '  + bookName + ' é ' + book(bookName).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro '  + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.');
