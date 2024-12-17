function sortList(arr, order) {
    if(order === 'Asc'){
        console.log(arr.sort());
    } else {
        console.log(arr.sort((a, b) => b - a))
    }
}

function sortListManual(arr, order) {
    if(order === 'Asc') {
        for(let i = 0; i < (arr.length - 1); i++){
            for(let j = (i + 1); j <= arr.length ; j++){
                if(arr[j] < arr[i]){
                    let aux = arr[i];
                    arr[i] = arr[j];
                    arr[j] = aux
                }
            }
        }
    }
    console.log(arr)
}

sortList([2,1,6,3], 'Desc')
sortListManual([3,7,1,2, 0], 'Asc')