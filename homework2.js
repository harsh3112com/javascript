function val(){
    let name =document.querySelector('#name').value
    let contact =document.querySelector('#contact').value

    if(name ==''){
        alert("please fill your name")
        document.querySelector('#name').focus()
        return false
    }
    else if(contact == ''){
        alert("plese fill your contact")
        document.querySelector('#contact').focus
        return false
    }
    else if(contact<="10"){
        alert('worng number')
        return false
    }




}