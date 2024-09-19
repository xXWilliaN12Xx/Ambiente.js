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
console.log(verificação(texto));