function proximoElementoA(seq) {
  let ultimo = seq[seq.length - 1];
  return ultimo + 2;
}

function proximoElementoB(seq) {
  let ultimo = seq[seq.length - 1];
  return ultimo * 2;
}

function proximoElementoC(seq) {
  let n = seq.length;
  return n * n;
}

function proximoElementoD(seq) {
  let n = (seq.length + 1) * 2;
  return n * n;
}

function proximoElementoE(seq) {
  let tamanho = seq.length;
  return seq[tamanho - 1] + seq[tamanho - 2];
}

function proximoElementoF(seq) {
  let ultimo = seq[seq.length - 1];
  if (ultimo === 19) {
    return 20;
  } else {
    return ultimo + 1;
  }
}

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
