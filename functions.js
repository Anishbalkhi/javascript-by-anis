// function hello(){
//     for(let i = 0; i<=5; i++){
//         console.log(i);
//     }
// }
// hello();

// function print_name(){
//     let name = prompt("enter the name" )
//     console.log(name)
// }
// print_name();

// //functions with argument
// function Info(name, age){
//     console.log(`${name}'s age is ${age}`)
// } 
// Info("aman", 23);
// Info("aman")

// // order is very important in function
// Info(23)

// //ex of functions
// function table(n)
// {
//     for(let i =n;i<=n*10; i= i+n){
//         console.log(i);
//     }
// }
// table(4);

// //return
// function sum(a,b){
//     return a+b;
// }


// //it don't  print the sum
// sum(12,3)
// console.log(sum(12,3))

//any statment written after retrun is never run

// //example of return 
// function getsum(n){
//     let sum = 0;
//     for(let i = 1; i<=n; i++){
//         sum = sum+i
//     }
//     return sum;
// }
// console.log(getsum(5))


// //scope: it means accessibility if any variable,object or function from diiferent part of code
// function Calsum(a,b){
//     let sum = a+b; //function scope : we only use variable into function that define into function
// }
// let sum = 54; //global scope
// console.log(sum)

// //block scope : block{}
// let age = 19;
// if(age>=18){
//     let str = "adult" //block scope: only accessable in block {}
//     console.log(str)
// }
// // console.log(str)  //you don't access it


// //lexical scope/nested scope: inner function is called the outer function but vice-versa is not true
// function outer(){
//     let a = 5
//     let b = 6
//     // console.log(c) //it is not possible
//     function inner(){
//         let c = 3
//         console.log(a) //it is possible

//     }
//     inner();
// }
// outer();


// //function expression: it is only a way to define the function, and by this method we can use function as a variable
// let sum = function (a,b){
//     return a+b;
// }
// console.log(sum(2,4))



// //higher order function : when you user function in the funtion as an argument
// function namste(greet, count){   //higher order function: because it use greet function as an argument
//     for(i = 0; i<=count; i++){
//         console.log(greet(),i)}
//     }
//     let greet = function()          //vese code to galat h but aap mere bhavnye to samajh he gye honge
//     {
//         console.log("hello")
//     }

//     namste(greet,1000)


//functions as method: we wrote the in key and value pair
let calculator = { //this is an object
sum:function(a,b){
    return a+b;
},
 sub: function(a,b){
    return a-b;
},
 mul: function(a,b){
    return a*b;
}
}
console.log(calculator.mul(5,3))
console.log(calculator.sum(1,4))



