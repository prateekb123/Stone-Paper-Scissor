
// Object
const product = {
    productName : "Pen",
    productPrice : 40,
    rating : "4.5/5",
    disc : "Deal of the day",
    discunt : 5,
    numberOfRating : 7200,
};

// conditional operation
let mode = "dark";
let color;

if (mode==='dark'){
    color = 'Black';
}
else if (mode === 'light'){
    color  = 'write';
} else {
    color = 'Blue';
}

// Ternary Operation
let result = 15<10 ? "prateek" : "rohan"


// prompt
// let num = prompt("Enter a number : ")
// if (num%5===0){
//     // console.log(true)
// } else{
//     // console.log(false)
// }

// for loop
let s = 0
for(let i=1;i<=5;i++){
    s+=i
}


// while loop
let s1 = 0
let j = 1
while (j<=5){
    s1+=j
    j++
}

// do while loop
let s2 = 0
let j1 = 10
do{
    // console.log(s2);
    j1++
}
while (j1<=20)

// for of  (for iterating over each value of string/array)
s = "hey"
// for(let i of s){
//     console.log(i)
// }

//game gussing
let num = 8
// let gussedNum = prompt("Guess the Number : ");
// while (gussedNum!=num){
//     gussedNum = prompt("Wrong Number Gussed Try Again:");
// }
// alert("Number gussed (gussedNum) is right" + num);


// Template literal
// let name = "Prateek"
// // console.log(`hey my name is ${name}`)

// // Array
// let arr = [5,10,15,20]
// let dis = 10
// for(let i=0;i< arr.length; i++){
//     arr[i] *= (100-dis)/100
// }
// // console.log(arr)

// // arrow fucntion
// // const mul = (a, b) => {
// //     return a*b
// // }


// // foreach 
// arr = [1,2,3]
// // arr.forEach((val)=> console.log(val**2))

// //filter method
// arr = [100,80,95, 79]
// let ansArray = arr.filter((val)=> {return val>90})
// // console.log(ansArray)

// //reduce method
// n = 5
// let num3 = []
// for(i=1;i<=n;i++){
//     num3.push(i)
// }
// let ansArray1 = num3.reduce((res, val) => {return res*val})
// console.log(ansArray1)


// const title1 = document.getElementById("title").innerHTML
// document.getElementById("title").innerHTML += " this is prateek"

// let divList = document.getElementsByClassName("box")
// let i = 0
// for(div of divList){
//     div.innerHTML = `Heya Prateek you are ${i}`;
//     i++;
// }

// let div1 = document.querySelector("div")
// div1.style.backgroundColor = "blue";

// // const listwalaDiv = document.getElementsByClassName("listwala")
// const listwalaDiv = document.querySelector("div")
// const btn = document.createElement("button")
// btn.innerHTML = "Click Me!"
// listwalaDiv.after(btn)

// const btnAss = document.createElement("button")
// btnAss.innerHTML = "Click Me 1!"
// btnAss.style.color = "white"
// btnAss.style.backgroundColor = "Red"
// const bdy = document.querySelector("body")
// bdy.prepend(btnAss)

// const para = document.querySelector("p")
// console.log(para)
// para.classList.add("paraNew")

// const btn1 = document.querySelector("#btn1")
// btn1.onclick = () => console.log("btn clicked")



const toggle = (btn1) => {
    const body = document.querySelector("body");
    if(btn1.innerHTML==="White"){
        body.style.backgroundColor = "Black"
        btn1.innerHTML= "Black"
    }else{
        body.style.backgroundColor = "White"
        btn1.innerHTML = "White"
    }
}

const btn1 = document.querySelector("#btn1")
btn1.addEventListener("click", () => {
    const body = document.querySelector("body");
    if(btn1.innerHTML==="White"){
        body.style.backgroundColor = "Black"
        btn1.innerHTML= "Black"
    }else{
        body.style.backgroundColor = "White"
        btn1.innerHTML = "White"
    }
})







