module.exports = function solveEquation(equation) {
// your implementation
  //ax^{2}+bx+c=0,
  //где x — неизвестное, a,b,c — коэффициенты, причём a != 0.
  //-20 * x^2 - 108797540 * x - 130011773690520

  let arr = equation.split(' ');
  let a = arr[0];
  let b = arr[4];
  let c = arr[8];
  let x;
  let y;
  let solutions = [];

 if(arr[3] === '-') {
  b = -1*b;
 };

 if(arr[7] === '-') {
  c = -1*c;
 };


const d = b*b - 4*a*c;

    if (d > 0) {
    x = Math.round((-1*b + Math.sqrt(d))/(2*a));
    y = Math.round((-1*b - Math.sqrt(d))/(2*a));
    
      if (x > y) {
        solutions[0] = y;
        solutions[1] = x;
      } else {
      solutions[0] = x;
      solutions[1] = y;
      }
  
    } else if (d == 0) {
    x = Math.round((-1 * b)/(2 * a));
    solutions[0] = x;
    }  

return solutions;
}