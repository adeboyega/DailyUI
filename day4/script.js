const lightbtn = document.querySelector('.lightbtn')
const body = document.querySelector('.bod')
const mainbody = document.querySelector('body')

lightbtn.addEventListener('click',()=>{
    body.classList.toggle('bg-gray-800')
    mainbody.classList.toggle('text-white')
})