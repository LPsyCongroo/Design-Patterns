// Javascript uses Constructor functions to create new instances of objects

function Car ( model, year, miles){
  // props and methods in the constructor are different for each instance
  this.model = model || '';
  this.year = year || 0;
  this.miles = miles || 0;
}

// Props and Methods in the prototype exist in one object and are referenced by each instance.
Car.prototype.toString = function(){
  return `This ${this.year} ${this.model} has done ${this.miles} miles`;
}

const civic = new Car ('Honda Civic', 2008, 20000);

console.log(civic.toString());