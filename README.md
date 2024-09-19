# Processo Seletivo - Respostas aos Desafios

### Estou animado para compartilhar minha candidatura a esta oportunidade! Participar deste processo seletivo é uma chance incrível para mim, pois acredito que minha experiência e habilidades se alinham perfeitamente com os valores e objetivos da empresa. Estou comprometido em contribuir positivamente para a equipe e em aprender com os desafios que surgirem. Acredito que a colaboração e a troca de conhecimentos são essenciais para o crescimento profissional e pessoal. Estou ansioso para mostrar como posso agregar valor à equipe e, assim, avançar juntos em direção ao sucesso. Agradeço pela consideração e estou ansioso para a possibilidade de trabalhar com todos vocês.

#

### Introdução
Este documento contém as soluções para os desafios propostos durante o processo seletivo. Abaixo, cada desafio é apresentado com sua respectiva solução em código.

#

### Desafio 1: Sequência de Fibonacci

### Solução:
```javascript
// Código da solução
function fibonacci(numero) {
    let valor1 = 0, valor2 = 1, temp;

    if (numero === 0 || numero === 1) {
        return `O número ${numero} pertence à sequencia de Fibonacci.`;
    }

    while (valor2 < numero) {
        temp = valor2;
        valor2 = valor1 + valor2
        valor1 = temp;
    }

    if (valor2 === numero) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} Não pertence à sequência de Fibonacci.`;
    }
}

const numero = 21;
console.log(fibonacci(numero)); // O número 21 pertence à sequência de Fibonacci.
```
#

### Desafio 2: valor de uma string
### Solução:
```javascript
function verificação(string) {
    const lowerString = string.toLowerCase();

    let count = 0;

    for(let i = 0; i < lowerString.length; i++) {
        if (lowerString[i] === 'a') {
            count++
        }
    }

    if (count > 0) {
        return `A letra 'a' aparece ${count} vezes.`;
    } else {
        return `A letra 'a' não aparece.`
    }
}

const texto = 'Desejo passar na seleção!';
console.log(verificação(texto)); // Saída: A letra 'a' aparece 3 vezes.
```
#

### Desafio 3: valor da soma
### Solução:
```javascript
let indice = 12, soma = 0, k = 1;

while (k < indice) {
    k = k + 1;
    soma = soma + k;
}

console.log(soma); // Saída: 77
```
#

### Desafio 4: O próximo elemento
### Solução:
```javascript
let seqA = [1, 3, 5, 7];
console.log("Próximo de A:", proximoElementoA(seqA)); // 9

let seqB = [2, 4, 8, 16, 32, 64];
console.log("Próximo de B:", proximoElementoB(seqB)); // 128

let seqC = [0, 1, 4, 9, 16, 25, 36];
console.log("Próximo de C:", proximoElementoC(seqC)); // 49

let seqD = [4, 16, 36, 64];
console.log("Próximo de D:", proximoElementoD(seqD)); // 100

let seqE = [1, 1, 2, 3, 5, 8];
console.log("Próximo de E:", proximoElementoE(seqE)); // 13

let seqF = [2, 10, 12, 16, 17, 18, 19];
console.log("Próximo de F:", proximoElementoF(seqF)); // 20
```

#

### Desafio 5: Os Interruptores
### Solução:
```javascript
// Simulando os interruptores e lâmpadas
class Sala {
  constructor() {
    this.lampadas = [false, false, false];
  }

  ligarLampada(index) {
    this.lampadas[index] = true;
  }

  desligarLampada(index) {
    this.lampadas[index] = false;
  }

  verificarLampadas() {
    return this.lampadas.map((estado, index) => ({
      index: index + 1,
      estado: estado ? "acesa" : "apagada",
    }));
  }
}

function descobrirInterruptores() {
  const sala = new Sala();


  console.log("Ligando o Interruptor 1...");
  sala.ligarLampada(0);
  setTimeout(() => {
    console.log("Desligando o Interruptor 1 e ligando o Interruptor 2...");
    sala.desligarLampada(0);
    sala.ligarLampada(1);

    const resultado = sala.verificarLampadas();
    console.log("Estado das lâmpadas:");
    resultado.forEach((lampada) => {
      console.log(`Lâmpada ${lampada.index} está ${lampada.estado}.`);
    });
  }, 5000);
}

descobrirInterruptores(); 
// Saída: Ligando o Interruptor 1... 
// Desligando o Interruptor 1 e ligando o Interruptor 2... 
// Estado das lâmpadas: 
// Lâmpada 1 está apagada.
// Lâmpada 2 está acesa.
// Lâmpada 3 está apagada.
```
