// Question 01:
let Numbers = [23,56,32,12,14];
console.log(Numbers);


// Question 02:
let Fruits = ["Orange","Kiwi","Grapes"];
console.log(Fruits[0]);
console.log(Fruits[2]);


// Question 03:
let fruits = ["Apple","Melon","Guava"];
Fruits.push("Mango");
console.log(Fruits);


// Question 04:
let Nums = [10, 20, 30, 40, 50];
console.log(Nums.length);


// Question 05:
function Welcome(){
    console.log("Hello World");
}

Welcome();


// Question 06:
function sum(){
    let num1 = Number(prompt("Enter your first number"));
    let num2 = Number(prompt("Enter your secound number"));
    let result = num1 + num2
    console.log(result);
}

sum();


// Question 07:
function square(){
    let n = Number(prompt("Enter Your Num"));
    return  n * n;

}

console.log(square());


// Question 08:
function checker(){
    let num = Number(prompt('Enter Your Number'));
    if (num % 2 === 0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}

checker();


// Question 09:
function largest(){
    let NUM1 = Number(prompt("Enter your NUM 1"));
    let NUM2 = Number(prompt("Enter your NUM 2"));

    if (NUM1 >= NUM2){
        console.log("The Largest no is",NUM1);
    }
    else{
        console.log("The Largest no is",NUM2);
    }
}

largest();


// Question 10:
function msg(){
    let name = prompt("Enter Your Name");
    console.log("Welcome",name);
}

msg();


// Question 11:
let student = {
    Name : "Dua Sehar",
    Age : 17 ,
    Class : 12 ,
};

console.log(student.Name);
console.log(student.Age);
console.log(student.Class);


// Question 12:
let Car = {
     color : "White",
     brand : "Toyota",
     model : "Corolla",
};

console.log(Car.brand);


// Question 13:
let STUDENT = {
    Name : "Alice",
    Age : 19,  
};

STUDENT.Age = 20;
console.log(STUDENT.Age);


// Question 14:
let Student = {
    Name : "Johan",
    Marks : 94 , 
};

function printStudent(Student) {
     console.log(Student.Name);
     console.log(Student.Marks);
}

printStudent(Student);


// ------------------------------------------------------------ //

