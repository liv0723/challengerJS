function findElements(elements, element) {
  return elements.includes(element);
}

console.log(findElements([1,2,3], 1))

function sets(array1, array2, bool) {
  let commonElements = [];
  let unCommonElements ;
    if(bool) {
      array1.forEach( element => {
        if(findElements(array2, element)){
          commonElements.push(element)
        } else {
          unCommonElements = [...new Set([...array1, ...array2])];
        }
      })
    } else {
      console.log('must be true')
    }
    console.log(commonElements, unCommonElements);
}



sets([1,4,3], [4,5,6], true)
