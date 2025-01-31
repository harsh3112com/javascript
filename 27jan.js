async function apifetch() {
    let data = await fetch ("https://jsonplaceholder.typicode.com/posts")
    let final_data =await data.json()
    let tdata = final_data.map((e)=>`
       <tr>
         <td> ${e.id}</td>
         <td> ${e.title}</td>
         <td> ${e.body}</td>
      </tr>
    
    `).join("")
    document.querySelector("#displydata").innerHTML=tdata


}
apifetch()