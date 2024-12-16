function bynaryDecimal(num, bin) {
  let binary = bin
    if(num == 1) {
        console.log(binary)
      } else {
        binary = (num % 2) + binary
        bynaryDecimal(Math.floor(num / 2), binary);
      }
}
bynaryDecimal(30,'');
