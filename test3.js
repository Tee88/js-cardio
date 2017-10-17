function patternCheck(str) {
    var regex = /^[a-zA-Z0-9_-]+$/;
    var words = str.split(".");
    for (i = 0; i < words.length; i++) {
        if (!regex.test(words[i])) return 0;
    }
    return words.length;
}

console.log(patternCheck('lower.UPPER._.-.21323.abc-DEF_123'));
console.log(patternCheck(''));
console.log(patternCheck('xtech.guru'));
console.log(patternCheck('@tech.guru'));