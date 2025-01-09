// let num=Math.trunc(Math.random()*1000 +1)
// console.log(num);


const fun = () =>{
    let str1 =document.querySelector('#abc1')
    let str2 =document.querySelector('#abc2')
    let str3 =document.querySelector('#abc3')


    str1.innerHTML=Math.trunc(Math.random()*20+1)
    str2.innerHTML=Math.trunc(Math.random()*20+1)
    str3.innerHTML=Math.trunc(Math.random()*20+1)
}
