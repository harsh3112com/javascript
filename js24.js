// function validate(){

// let name=document.querySelector('#name').value
// let age=document.querySelector('#age').value
// let contact=document.querySelector('#contact').value
// let email=document.querySelector('#email').value
// let password=document.querySelector('#password').value
// let cpassword=document.querySelector('#cpassword').value


// if(name == '')
// {    alert("please fil out the name")
//     document.querySelector('#name').focus()
//     return false


// }
// else if(age ==''){
//     alert("please fill out the age sir")
//     document.querySelector('#age').focus()
//     return false

// }
// else if(isNaN(age)){
//     alert("age should be number sir")
//     document.querySelector('#age').focus()
//     return false

// }
// else if(contact=''){
//     alert("enter your cntact number sir please")
//     document.querySelector('#contact').focus()
//     return false
// }
// else if(isNaN(contact)){
//     alert("enter number in digit sir ")
//     document.querySelector('#contact').focus()
//     return false
// }
// else if(contact.length>10 || contact.length<10){
//     alert("please write a valid contact number")
//     document.querySelector('#contact').focus()
//     return false
// }
// else if(email ==''){
//     alert("please enter email")
//     document.querySelector('#email').focus()
//     return false
// }
// else if(!(email.include('@'))){
//     alert("please enter valid email")
//     document.querySelector('#email').focus()
//     return false
// }

// else if(password==''){
//     alert("please enter password")
//     document.querySelector('#password').focus()
//     return false
// }
// else if(!(password.match(/[~!@#$%^&*{}?]/)) ){
//     alert("please enter password containing special character")
//     document.querySelector('#password').focus()
//     return false
// }
// else if(password!=cpassword){
//     alert("passwoed mis match")
//     document.querySelector('#cpassword').focus()
//     return false
// }



//}
// Arrow Function -> single line fuction pass so use this
// ()=>{return value}
// ()=>()
// ()=>
//   =>

let fnmae = ()=>{return 'Harsh'}
console.log(fnmae());

let u=(a)=>{return a+a}
console.log(u(10))