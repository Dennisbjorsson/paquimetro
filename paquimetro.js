// Definir class

class CalcularEstacionamento{
    constructor(){
       this.tabelaPreco= [
       { preco:5, tempo:120},
       { preco:4, tempo:90 },
       { preco:3, tempo:60},
       { preco:1,tempo:30},

    ]
  }
   
  calcular(){
   const valor = parseFloat(document.getElementById("valor").value);
   const resultado = document.getElementById("resultado");
   

   if(isNaN(valor) || valor < 1){
      resultado.textContent= "Valor Insuficiente";
      return;
   }
  
  let tempoMin = 0;
  let valorCobrado = 0;


  for(let item of this.tabelaPreco){
   if (valor >= item.preco){
      tempoMin = item.tempo;
      valorCobrado = item.preco;
      break;

   }
  }
 
  const horas = Math.floor(tempoMin / 60);
  const minutos = tempoMin % 60;
  const troco = (valor - valorCobrado).toFixed(2);
  
  let mensagem = ` Tempo de estacionamento: ${horas} Horas ${minutos} Min. `;
  if(troco > 0){
   mensagem += ` \ntroco: ${troco}`;

  }
  
  resultado.textContent= mensagem;

}

  }

const paquimetro= new CalcularEstacionamento();  