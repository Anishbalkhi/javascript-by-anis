// trim method
// this method is use for remove the whitespace b/w string
let msg = "   anish   ";
 let name = msg.trim( );
console.log(name);
let myname = "   my Name is anis"
let newpass = myname.trim();
console.log(newpass);
//in js all string are immutable(means they are not changalbe)
//ex.
console.log(myname)

//toUppercase and toLowercase method
let test = "ANIS"

console.log(test.toLowerCase())
let test1 = "anis"
console.log(test1.toUpperCase())

//indexOf method
//show the index of letter
let test2 = "Ilovecoding";
console.log(test2.indexOf("e"))
console.log(test2.indexOf("z"))

//method channig
//combin two or more methods
let test3 = "    sunny   "
let newtest = test3.toUpperCase().trim();
console.log(newtest)


//slice method
//use to give a part of string

let test4 = "mynameisbunny"
console.log(test4.slice(0,2))
console.log(test4.slice(2,6))
//if we put any -ve value then it start counting with ending
console.log(test4.slice(-10))

//replace method
console.log(test4.replace("my", "your"))
//repeate method
console.log(test4.repeat(5))
