
function armnstrongNumber(numb) {
if( numb === 0) {
  return 'bad number';
} else {
  let sum = 0;
  Array.from(numb.toString()).forEach( element => {
    sum += parseInt(element) ** numb.toString().length;
  })
  if( sum === numb) {
    console.log('ok')
  } else {
    console.log('not ok')
  }
}
}

armnstrongNumber(153)
