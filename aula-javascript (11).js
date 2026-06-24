let produto = [];
let soma = 0;

for(let i=1; i <= 8; i++){
    produto[i] = Number(prompt("Digite a quantidade de caixa de 8 produtos diferentes: "));
    soma += produto[i];
    console.log (`A quantidade de caixas ${i} é: ${produto[i]}.`);
}
console.log (`A soma total de caixas é : ${soma}`);