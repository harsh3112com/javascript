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
         <td> <button onclick="mydelete('${e.id}')">Delete</button></td>
         <td> <button onclick="myedit('${e.id}')">edit</button></td>
      </tr>
    
    `).join("")
    document.querySelector("#displydata").innerHTML=tdata


}
apifetch()

function mydelete(id){
  fetch(`http://localhost:3000/student/${id}`,{
    method:"DELETE"
  })
  .then(res=>alert("Delete..!!"))
}

function savedata(){
let frmdata= {
    name:document.querySelector('#name').value,
    age:document.querySelector('#age').value,
    contact:document.querySelector('#contact').value,
    city:document.querySelector('#city').value  

}

fetch('http://localhost:3000/student',{
    method:"POST",
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(frmdata)
})
 .then(r=>alert("Data inserted successfully"))
}

async function myedit(id) {
    let data=await fetch(`http://localhost:3000/student/${id}`)
    let resdata =await data.json()
    let frm = `
      <input type="text" value="${resdata.id}" id="id1" readonly> <br><br>
      <input type="text" value="${resdata.name}" id="name1"> <br><br>
      <input type="text" value="${resdata.age}" id="age1"> <br><br>
      <input type="text" value="${resdata.contact}" id="contact1"> <br><br>
      <input type="text" value="${resdata.city}" id="city1"> <br><br>
      <input type="submit" value="update" onclick="finalupdate('${resdata.id}')">
      
    
    `
    document.querySelector('#editfrm').innerHTML=frm
    
}

function finalupdate(id){
    let frmdata= {
        id:document.querySelector('#id1').value,
        name:document.querySelector('#name1').value,
        age:document.querySelector('#age1').value,
        contact:document.querySelector('#contact1').value,  
        city:document.querySelector('#city1').value  
    
    }
    
    fetch(`http://localhost:3000/student/${id}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(frmdata)
    })
     .then(r=>alert("Data Update successfully"))
    }