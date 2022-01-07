// ? Strings
console.log("hello world");
let email = "mario@thenetninja.co.uk";
console.log(email);

// ** string concatenation
let firstname = "Brandon";
let lastname = "sandson";

let fullname = firstname + " " + lastname;
console.log(fullname);

//** getting characters */
console.log(firstname[0]);

// ** string length
console.log(firstname.length);

// ** string methods
console.log(fullname.toUpperCase());

let result = fullname.toLowerCase();
console.log(result);

let index = email.indexOf("@");

let indexResult = email.lastIndexOf("n");

console.log(indexResult);

let sliceResult = email.slice(0, 5);
console.log(sliceResult);

let substrResult = email.substring(0, 10);
console.log(substrResult);

let replaceResult = email.replace("m", "w");
console.log(replaceResult);

// ? Numbers
let radius = 10;
let pi = 3.14;

// console.log(radius, pi)

// ! math operators +,-,*,/,**,%

let resultNum = pi * radius ** 2;

// ! order of operation = BIDMAS

let resultBD = 5 * (10 - 3) ** 2;
// console(result)

// ! NaN - not a number
// let resultNAN = "the blog has " + likes + "likes";

//? templates strings
const title = "Best reads of 2019";
const author = "Mario";
likes = 30;

// ** concatenation
// let temp = 'the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(temp);

// ** template string
let temp = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(temp);

// ** creating html templates

let html = `
    <h2>${title}</h2>
    <p>By ${author} </p>
    <span> This blog has ${likes} likes </span>
`;

// ? console
// let age = 25;
// let year = 2019;

// console.log(age, year);

// const points = 100;

// points = 50;
// console.log(points);

// alert("hello, world");
// console.log(1);
// console.log(2);
