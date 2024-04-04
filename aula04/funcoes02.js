const TestImparPar = (n) => {
    let calculoTest = n % 2

    if (calculoTest == 1){
        return "Numero Impar"
    }
    else{
        return "Numero Par"
    }
}

console.log(TestImparPar(17))
console.log(TestImparPar(64))
console.log(TestImparPar(1500))
