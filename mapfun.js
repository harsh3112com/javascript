let ar=[1,2,3,4,5]

// let neww=ar.map((t)=>{return t*t}) // map function = facting the data amd gives a new array
// console.log(neww);

// let nar=ar.filter((w)=>{return w%2==0})
// console.log(nar);

let stu=[
    {
        id:1,
        name:"Harsh",
        age:19,
        city:"Bhopal"
    },
    {
        id:2,
        name:"Rahul",
        age:20,
        city:"Bhopal"
    },
    {
        id:3,
        name:"Dhurv",
        age:21,
        city:"indore"
    }
]

// let stud=stu.map((e)=>{return e.id})
// console.log(stud)

let stude=stu.filter((e)=>{return e.age>20})
console.log(stude);


