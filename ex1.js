/*this is a farenheit to celcius program
*/
function cToF(celsius) {
  // this is celsius to Fahrenheit
  var fahr = (celsius * 1.8) + 32;
  return (celsius+'\xB0'+"C is "+fahr+'\xB0'+"F");
}

function fToC(fahrenheit) {
  // this is Fahrenheit to Celsius
	var cels = (5/9) * (fahrenheit - 32);
	return (fahrenheit+'\xB0'+"F is "+cels+'\xB0'+"C");
} 

console.log(cToF(60));

console.log(fToC(45)); 
