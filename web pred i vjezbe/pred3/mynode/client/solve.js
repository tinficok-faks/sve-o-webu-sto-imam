const a = 1.0;
const b = 2.0;
const c = 0.25;

const D = b * b - 4 * a * c;

const x_1 = (-b - Math.sqrt(D) / (2 * a));
const x_2 = (-b + Math.sqrt(D) / (2 * a));

console.log(x_1, x_2);