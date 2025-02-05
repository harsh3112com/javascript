// async function apifetch() {
//     let data = await fetch ("http://localhost:3000/student")
//     let final_data =await data.json()
// console.log(final_data);

// }
// apifetch()

async function apifetch() {
    let data = await fetch ("http://localhost:3000/student")
    let final_data =await data.json()
    let tdata = final_data.map((e)=>`
       <tr>
         <td> ${e.name}</td>
         <td> ${e.age}</td>
         <td> ${e.contact}</td>
          <td> ${e.city}</td>
         <td> ${e.id}</td>
      </tr>
    
    `).join("")
    document.querySelector("#displydata").innerHTML=tdata


}
apifetch()