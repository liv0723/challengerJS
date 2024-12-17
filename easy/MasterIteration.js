function masterIterationFor() {
    for( let i = 1; i <= 100; i++ ) {
        console.log(i);
    }
}

function masterIterationWhile() {
    let cont = 1;
    while( cont <= 100) {
        console.log(cont++);
    }
}

function masterIterationDoWhile() {
    let cont = 1;
    do {
        console.log(cont++)
    } while(cont < 100)
}

function masterIterationRecursive(cont) {
    if(cont === 101) {
        return;
    }
    console.log(cont++);
    masterIterationRecursive(cont)
}




