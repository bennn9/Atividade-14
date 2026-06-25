let codigo = [1,2,3,4,5,6,7,8,9,10];
let qual = Number(prompt("Qual o código você deseja rastrear. "));
let ind = -1

for (let i = 0; i <= codigo.length; i++){
    if(qual === codigo[i]){
        ind = i 
        break
    }
}
if(ind !== -1){
    console.log(`O código digitado está no indice ${ind} .`)
    
}else{
    console.log(`Código não cadastrado. `)
}