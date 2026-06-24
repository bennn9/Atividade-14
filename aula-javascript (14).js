let alunos= [5]
let media = []
let aprovados = 0
for(let i = 0; i <=4;i++){
    alunos[i]=Number(prompt("Qual a sua nota aluno " + (i+1) + " ?"));
   
} 
media = (alunos[0] + alunos[1] + alunos[2] + alunos[3] + alunos[4])/5
for (i=1;i<=5;i++){
    if(alunos>=media)
    aprovados += 1 
}
    
console.log(`A quantidade de alunos aprovados foi: ${aprovados}.`)

console.log(`E a média da sala é: ${media}`)