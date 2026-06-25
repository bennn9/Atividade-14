let matriz = []
let linhas 
for (let i = 0;i<3;i++){
    matriz[i]= [];

for (let j = 0; j < 3;j++){
    let valor = Number(prompt("Digite um valor! "));
    matriz[i][j]= Number(valor);
}}
for (i=0;i<3;i++){
    let linhas = " ";
for (j=0;j<3;j++){
    linhas += matriz[i][j] + " "}
    console.log(linhas)
}
   

