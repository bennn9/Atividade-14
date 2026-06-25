let matriz = []
let maior = 0
for (let l = 0;l < 3; l++){
    matriz [l]= []
    for (let c = 0;c < 4; c++){
      matriz [l][c]=Number(prompt("Digite os numeros necessarios."));
      
    }
}
for(l=0; l<3; l++){
    for(c=0;c<4;c++){
        if(matriz[l][c]>maior){
            maior = matriz[l][c];
        }
    }   
    console.log(`Equipe: ${l+1} ====> Maior pontuação: ${maior} `);
}