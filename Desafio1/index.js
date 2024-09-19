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
console.log(fibonacci(numero));