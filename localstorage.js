// let person_ob = {
//     name :"harsh",
//     email : "h@mail.com",
//     password :"123545r"
// }

// localStorage.setItem("userdata",JSON.stringify(person_ob))
// let data = JSON.parse(localStorage.getItem('userdata'))
// console.log(data);
// console.log(name);

const datastorage=()=>{
    let userdata ={
        name :document.querySelector('#num1').value,
        email :document.querySelector('#num2').value,
        password :document.querySelector('#num1').value
    }
    localStorage.setItem("userdata",JSON.stringify(userdata))
}
