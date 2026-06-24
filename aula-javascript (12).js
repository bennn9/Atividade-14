let dias= [10]
let maior = []
let indice = []

for (let i=1;i<=10;i++){
    dias[i] = Number(prompt("Informe a temperatura."));
    if (dias[i]>maior){
        maior = dias[i]
        indice = i
    }
   
}
 console.log (`A maior temperatura nesse tempo foi: ${maior} e a sua posição foi ${indice}`)