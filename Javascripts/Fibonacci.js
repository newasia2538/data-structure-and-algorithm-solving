function Fibonacci(index){
    if(index == 0 || index == 1) return index;

    let phi = 1.6180339887;
    
    return Math.floor((Math.pow(phi, index)/Math.sqrt(5))+0.5);
}


for(let i = 0; i<= 20; i++){
    console.log(Fibonacci(i));
}