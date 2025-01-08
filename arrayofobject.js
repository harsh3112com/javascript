let student=[
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
    },
    {
        id:4,
        name:"Dhurv",
        age:21,
        city:"indore"
    }
]






let finaldata=student.map((e)=>`
     
      <tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.city}</td>
     </th>




`).join("")

document.querySelector('#displaydata').innerHTML=finaldata