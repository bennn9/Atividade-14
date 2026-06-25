let a = []
let b = []
let cc = []

for (let l= 0;l<2;l++){
    a[l]=[]
    
    for (let c=0; c <3; c++){
        a[l][c]= Number(prompt("Digite um número: "));
    }
}
for (let l= 0;l<2;l++){
    b[l]=[]
    
    for (let c=0; c <3; c++){
        b[l][c]= Number(prompt("Digite os numeros de outra matriz: "));
    }
}
for (let l= 0;l<2;l++){
    cc[l]= a[l]=+b[l]
    
    for (let c=0; c <3; c++){
        cc[l][c]= a[c]=+b[c]
    }
    console.log(cc)
}
