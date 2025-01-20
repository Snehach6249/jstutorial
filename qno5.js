
var myVar = "Initial value of var";
let myLet = "Initial value of let";
const myConst = "Initial value of const";


console.log("myVar:", myVar); 
console.log("myLet:", myLet);  
console.log("myConst:", myConst); 


myVar = "New  value of var";
myLet = "New value of let";

console.log("After reassignment:");
console.log("myVar:", myVar); 
console.log("myLet:", myLet); 


try {
    myConst = "New value of const"; 
} catch (error) {
   console.error("Error when reassigning myConst:", error.message);
}

