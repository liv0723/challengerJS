function isPrime(num) {
    let div = 2;
    while( div < num) {
        if( num % div === 0) return false;
        div++;
    }
    return true;
}

function mainPrime() {
    let num = 3;
    while(num <= 100) {
        (isPrime(num)) ? console.log( `${num++} \n` ) : num++;
        // if(isPrime(num)) console.log(`${num} \n`);
        // num++
    }
} 

mainPrime();
//console.log( isPrime(7) )


