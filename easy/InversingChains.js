
function inversingChains(chain) {
    let newChain = chain.split('');
    newChain = newChain.reverse().join('');
    console.log(newChain);
    console.log(typeof newChain)
}

function inversingChainsTwo(chain) {
  let newChain = [];
  let j= 0;
    for(let i = chain.length-1 ; i >= 0; i--){
      newChain[j++] = chain.charAt(i)
    }
    console.log(newChain.join(''));
}

inversingChains("hola")
inversingChainsTwo('hola');