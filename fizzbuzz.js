/*
Sarah Dabbs
9/3/18

Write a program that shows all numbers between 1 and 100 
with the following exceptions:

-It shows "Fizz" instead if the number is divisible by 3.
-It shows "Buzz" instead if the number is divisible by 5 
    and not by 3.
-When it's done, improve it so that the program shows 
    "FizzBuzz" instead for numbers divisible both by 3 
    and by 5.

This exercise has many, many solutions It's a job 
interview classic that a significant number of candidates 
fail. Try your best!
*/

let output = 1;
for(let i = 1; i <= 100; i++){
    output = i;

    if((output%5===0) && (output%3===0)){
        console.log("FizzBuzz");
    }
    else if(output%3===0){
        console.log("Fizz");
    }
    else if(output%5===0){
        console.log("Buzz");
    }    
    else{
        output = i;
        console.log(output);
    }
    
}