const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let a = input[0].split(" ").map(Number);
let b = input[1].split(" ").map(Number);

let gcdvalueA = gcd(a[0], a[1]);
a[0] /= gcdvalueA;
a[1] /= gcdvalueA;
let gcdvalueB = gcd(b[0], b[1]);
b[0] /= gcdvalueB;
b[1] /= gcdvalueB;

let numLCD = lcd(a[1], b[1]);
let demLCD = (numLCD / a[1]) * a[0] + (numLCD / b[1]) * b[0];

let resultGCD = gcd(numLCD, demLCD);
numLCD /= resultGCD;
demLCD /= resultGCD;
console.log(demLCD, numLCD);
function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function lcd(a, b) {
  let gcdvalue = gcd(a, b);
  return gcdvalue * parseInt(a / gcdvalue) * parseInt(b / gcdvalue);
}
