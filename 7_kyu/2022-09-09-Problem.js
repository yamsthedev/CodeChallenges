// 7 Kyu Problem - September 9th 2022
// Is it a letter?
// RegExp.prototype.test(str), Boundrys: ^ and $, case insensitive flag, character set, [a-zA-Z] is different from \w as \w considers [a-zA-Z0-9_], Methods and prototypes, | disjunction is basically OR in regex, Quantifier {}

/*
Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
*/

String.prototype.isLetter = function() {
    return /^[a-z]$/i.test(this);
};

String.prototype.isLetter = function() {
    return /^[a-zA-Z]$/.test(this)
}

String.prototype.isLetter = function(){
    if (this.length !== 1) {
        return false;
    }

    return /[a-z]|[A-Z]/.test(this)
}

String.prototype.isLetter = function() {
    return /^[A-Z]{1}$/i.test(this);
  }