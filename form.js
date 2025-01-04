function add(){
    let num1=parseInt(document.querySelector('#num1').value)
    let num2=parseInt(document.querySelector('#num2').value)

    let ans1=document.querySelector('#ans')
    ans1.innerHTML=num1+num2

    return false

}