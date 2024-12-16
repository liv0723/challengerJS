function inCapitalLetter(string) {
    let result = string.split(' ').map( element => {
      return element.replace(element[0],element[0].toUpperCase())
    })
    console.log(result.join(' '))
}

inCapitalLetter('pepe maria')


