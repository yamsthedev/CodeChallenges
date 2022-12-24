// 6 Kyu Problem - December 24th 2022
// Validate my Password
// str.match(), regexp, .join(), negated set, regexp.test(), quantifier, positive lookahead

/*
I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:

More than 3 characters but less than 20.

Must contain only alphanumeric characters.

Must contain letters and numbers.
*/

function validPass(password){
  let alphanumeric = password.match(/[a-z0-9]/gi).join("")
  let numbers = alphanumeric.match(/[0-9]/g)
  let letters = alphanumeric.match(/[a-z]/gi)
  if(password.length <= 3 || password.length >= 20 || alphanumeric.length !== password.length || !numbers || !letters){
      return "INVALID"
  } 
  return "VALID"
}

// ?= is positive lookahead, which matches a group after the main expression without including it in the result
// . represents any character except line breaks
// * is a quantifier that matches 0 or more of the preceding token
// \d is any digits
// {4,19} matches between 4 and 19 of the preceding token
// ^ beginning of the string
// $ end of the string

function validPass(password){
  return /(?=.*[a-z])(?=.*\d)^[a-z\d]{4,19}$/i.test(password) ? 'VALID' : 'INVALID';
}

// \w matches any alphanumeric character and underscores
function validPass(password) {
  const t1 = /^\w{4,19}$/.test(password),
        t2 = /\d/.test(password),
        t3 = /[a-zA-Z]/.test(password);
  return t1 && t2 && t3 ? "VALID" : "INVALID";
}

// Alternative Answer
function validPass(password){
    let ok = 0;
    if(password.length < 4 || password.length > 20) return 'INVALID';
    if(/[a-z]/g.test(password)) ok++;
    if(/[A-Z]/g.test(password)) ok++;
    if(/[0-9]/g.test(password)) ok++;
    if(/[./:!'^*\s%$`]/g.test(password)) return 'INVALID';
    
    return ok < 2 ? 'INVALID' : 'VALID';
}