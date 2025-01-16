let st


function start(){
    let head=document.querySelector('#head')
    let num =0
    st=setInterval(()=>{head.innerHTML=num++},1000) //callback function


}
function stop(){
    clearInterval(st)
}

setTimeout(()=>alert("setttiout call"), 2000);

let btn1=document.querySelector('.btn1')
btn1.addEventListener('click',function(){alert("clicked")})



// let st


// function start(){
//     let head=document.querySelector('#head')
//     let num =0
//     st=setInterval(()=>{head.innerHTML=num++},1000) //callback function


// }
// function stop(){
//     clearInterval(st)
// }

// let head=document.querySelector('#head')
// let btn=document.querySelector('#btn')
// let btn1=document.querySelector('#btn1')
// btn.addEventListener('click',()=>{head.innerHTML="cybrom"})

// btn1.addEventListener('click',()=>{head.innerHTML=""})

//------Array---------
// Stored multipale data in single variable is called Array.

//WAP to take 10 interger input to print sum of all odd numbers in an array  ?

//why be a use a for loop

// let ar =["aditya",34,'r',9.8]
// for(let v of ar){
//     console.log(v);
// }
// let ar=[]

// for(let a=0;a<10;a++){
//     ar[a]=parseInt(prompt("Enter a Numbers"))
// }
// let sum=0
// for(let v of ar){
//     if(v%2!=0){
//         sum = sum+v
//     }
// }
// console.log(sum);

// for(let k in ar){   //to print of inexing of array
//     console.log(k);
// }

//push function to add ajesting  array to use a an push function
//pop to delete the array elements

// let status =false
// function fun(){
//     let h=document.querySelector('#head')
//     let btn=document.querySelector('#btn')
//     status=!status
//     if(status){
//         h.innerHTML="Cybrom"
//         btn.innerHTML='Hide'
//     }
//     else{
//         h.innerHTML=""
//         btn.innerHTML="Show"
//     }
// }

// Destructuring extracting multiple values from data stored in objects and arrays.

// let [name,age,city]=["harsh",27,"Bhopal"]
// console.log(city,name)

// let ar=["Harsh",18,"Bhopal"]
// ar.unshift("code","laptop") // Add array first elemant so use Unshift
// console.log(ar);

// ar.shift() //
// console.log(ar)

// Spread Array
// let ar1=[1,2,3]
// let ar2=[4,5,6]
// let ar3=[...ar1,...ar2]

// console.log(ar3)

// let ar=[1,2,3,4,5,6,7]
// console.log(ar);

// let del=ar.slice(1,5)
// console.log(del)

// console.log(ar)

// let ar5=[1,2,3,4,5,6,7]
// console.log(ar5)
// // ar5.splice(1,4)
// ar5.splice(1,4,'code',5,6,8,9)
// console.log(ar5)

//. =acces member opretar

// let ob={
//     name : "prince",
//     age:34,
//     stack:"FSD",
//     contact:15555,

// }
// console.log(ob);

// for(let k in ob){
//     console.log(ob.k)
// }

// let ob={
//    
   

// }
// function add(){

//     let obj={
//         name :document.querySelector("#name").value,
//         age:document.querySelector("#age").value,
     
  
//     }

//     return false

// }
// console.log(obj)

// --------------object 2nd class-------------------

// let obj = {
//     name:"Harsh",
//     contact:454554
// }
// obj.city="Bhopal"
// obj.contact=543546

// console.log(obj)

//----object under object is called nested object

// let emp ={
//     emp_name:"Aditya",
//     emp_id:201,
//     emp_age:22,
//     emp_designation:"Developer",
//     emp_account:{
//         emp_salary:1500,
//         emp_acname:"SBI",
//         emp_acbalance:"Rs 4/- only"
//     }

// }
// console.log(emp.emp_account.emp_acbalance);

// let obj1={
//     name:"Anuj",
//     demo:function(){
//         alert("inside Object")
//     },
//     friends:["harsh","avisha","amisha","shivam"]
// }
// obj1.demo()
// console.log(obj1.friends[0])

// let ob2={
//     name:"Cybrom",
//     fun:function(){
//         console.log(this.name);
        
//     }
// }
// ob2.fun()

//------------------Object-03/01/2025------------

// let ob1={
//     name:"vivek",
//     age:19
// }
// let ob2={
//     contact:1235
// }

// let ob3={...ob1,...ob2} //...e

// console.log(ob3);

// let ob={
//     name:"vivek",
//     age:19
// }

// let val = Object.values(ob)
// console.log(val);

// let k=Object.keys(ob)
// console.log(ob[0]);

// delete ob.age

// console.log(ob);


let employee=[
    {
        emp_id:1,
        emp_name:"Chanchal Sir",
        emp_designation:"Technical Trainer"
    },
    {
        emp_id:2,
        emp_name:"Rahul",
        emp_designation:"Technical Trainer"
    },
]

// employee.shift();
// employee.push()
employee.unshift("Harsh")
// employee.pop()


console.log(employee);


