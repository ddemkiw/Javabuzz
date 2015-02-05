 var Javabuzz = function() {}; 

 Javabuzz.prototype.isDivisibleByThree = function(number) {
   return this.isDivisibleBy(number, 3); 
 };

 Javabuzz.prototype.isDivisibleByFive = function(number) {
   return this.isDivisibleBy(number, 5);
 };

 Javabuzz.prototype.isDivisibleByFifteen = function(number) {
   return this.isDivisibleBy(number, 15);
 };

Javabuzz.prototype.isDivisibleBy = function(number, divisor) {
    return (number % divisor === 0);
};

Javabuzz.prototype.play = function(number) {
  if (this.isDivisibleByFifteen(number)) return 'Javabuzz';
  if (this.isDivisibleByFive(number)) return 'Buzz';
  if (this.isDivisibleByThree(number)) return 'Java';  
  return number;
};