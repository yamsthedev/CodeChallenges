// 6 Kyu Problem - Novemeber 1st 2022
// Can you keep a secret?
// Methods, functions, classes, constructors

/*
There's no such thing as private properties on a coffeescript object! But, maybe there are?

Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

getSecret() which returns the secret
setSecret() which sets the secret
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2
*/

// Using literal notation for objects
function createSecretHolder(secret) {
  return {
    getSecret : function(){return secret},
    setSecret : function(something) {secret = something}
  }
}

// Using classes, constructors, functions in classes
class obj{
  constructor(something){
    this.something = something
  }
  getSecret(){
    return this.something
  }
  setSecret(value){
    this.something = value
  } 
}

function createSecretHolder(secret){
  return new obj(secret)
}