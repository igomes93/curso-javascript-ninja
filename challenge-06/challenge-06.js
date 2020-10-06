/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship='carioca';
console.log(championship)

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/

var teams=['botafogo','flamengo','fluminense','vasco','bangu']
console.log('Os times são:',teams)

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
// ?

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
// ?

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var count=20
while(count<31){
  console.log(count++)
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
// ?

function convertToHex(cor){
  switch(cor){
    case 'red':
    console.log ("o hexadecimal para red é 0982038")
    break;
    
    case 'Amarelo':
    console.log('o Hexadecimal para amarelo é 1223345')
    break;

    case 'roxo':
    console.log('o Hexadecimal para roxo é 8239239')
    break;
    
    case 'verde':
    console.log('o Hexadecimal para verde é 7232387')
    break;

    case 'azul':
    console.log('o Hexadecimal para azul é 10101010')
    break;

    default:
    console.log('Não temos o equivalente hexadecimal para '+cor)

  }
}
/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
// ?
console.log(convertToHex('verde'))
console.log(convertToHex('azul'))
console.log(convertToHex('red'))
console.log(convertToHex('amarelo'))
console.log(convertToHex('roxo'))
console.log(convertToHex('branco'))
console.log(convertToHex('preto'))
console.log(convertToHex('lilas'))
