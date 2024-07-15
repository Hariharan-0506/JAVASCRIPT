let n;
for(n=1;n<=100;n++)
{
    if(n%3==0 && n%5==0){
        console.log("FizzBuzz");
    }
    else if(n%3==0){
        console.log("Fizz");
    }
    else{
        console.log("Buzz");
    }
    console.log(n);
}


// pallindrome

 function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

//  celsius to fahrenheit

function celsiusToFahrenheit(celsius){
    return(celsius*9/5)+32;
}
console.log(celsiusToFahrenheit(0));

//array

let arr=[12,34,56,78,90];
let arr1=arr.sort();
console.log(arr1[(arr1.length)-1])

//Factorial

function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
document.write(factorial(5));


8.Given an array containing n distinct numbers taken 

let arr = [0, 1, 2, 3, 5, 6, 7, 8, 9];

function Find(arr) {
    let pre = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != i) {
            console.log(i);
            break;
        }
    }
}
Find(arr);

//char count

function charCount(str){
    const count={};
    for(let i=0;i<str.length;i++){
        const char=str[i];
        if(count[char]){
            count[char]++;
        }
        else{
            count[char]=1;
        }
    }
    return count;
}
console.log(charCount("HARIHARAN"));