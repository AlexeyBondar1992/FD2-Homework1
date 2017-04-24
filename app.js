/*задача №2*/
function operation(...args) {
    for (let i = 0; i < args.length - 1; i++) {
        args[i] = args[args.length - 1](args[i]);
        console.log(args[i]);
    }
    return args;
}

operation('abc', 'def', 'foo', function (str) {
    return str.toUpperCase();
});


/*задача №1*/
function palindromeCheck(string) {
    let strUp = string.toUpperCase().split(' ').join('');
    for (let i = 0, l = strUp.length; i < l; i++) {
        if (strUp.charAt(i) !== strUp.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}

console.log(palindromeCheck('Киса краба на баркасик'));