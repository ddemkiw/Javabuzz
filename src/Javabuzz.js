var Javabuzz = function(){};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

Javabuzz.prototype.says = function(number) {
  if (this.isDivisibleByFifteen(number)) return "Javabuzz";
  if (this.isDivisibleByThree(number)) return "Java";
  if (this.isDivisibleByFive(number)) return "Buzz";
  return number;
};

Javabuzz.prototype.play = function(startNumber, endNumber) {
  if (startNumber < 0){
    console.log("start number must be greater than 0");
  }else{
    for(i=startNumber; i <= endNumber; i++){
      console.log(this.says(i));
    }
  }
};