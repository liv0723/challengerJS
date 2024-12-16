function factorial(num, sum) {
    if(num < 1) {
        console.log(sum); 
    } else {
        factorial(num-1, (sum + num));
    }
}
let sum = 0;
 factorial( 2, sum );


