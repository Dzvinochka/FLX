function addOne(x) {
    return x + 1;
}

function pipe() {
    let num = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        num = arguments[i](num);
    }
    return num;
}

addOne(1);
pipe(1, addOne);