import {n, fun_2} from "./some_modules"

// tipizacija
const x : number = 5;
const b: boolean = false;
const s: string = "";

// slozeni tipovi
let o : object = {a:1, x};
let o_2 : {a:number, x:number} = {a:1, x};
o = {username: "tin"};
o_2 = {a:2, x:3.14}

// tipizacija funkcije
const f: (n:number) => number = (n:number) => n + 1;
console.log(f(5));

const g = (x:number, cb:(y:number) => void) => {
    cb(x + 1);
};

type n_fun = (y : number) => void;
g(3.14, console.log);

// polje jednostavnog tipa
const n_arr: number[] = [1, 2, 3, 4, 5];
const n_arr_ : any[] = [1, false, "hello world"];

const n_arr_3 : (number | boolean)[] = [1, false, 2, 3, 4, true];

const y : number | string = "hello";
const z: any = 4;

interface Car {
    brand : string,
    model : string,
    n : number,
};

const car: Car = { brand: "VW", model: "Golf", n: 5 };