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