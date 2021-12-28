let input=document.querySelector('input');
let btn=document.querySelector('.btn');
let ul=document.querySelector('ul');
let ulList=document.querySelectorAll('li');
let temp=null;
//ulList=Array.from(ulList);

let list=document.createElement('li');
list.classList.add('shadow-lg','pl-3','mb-3');

btn.addEventListener('click',()=>{
    temp=input.value;
    list.innerText=temp;
    ul.appendChild(list);
    input.value='';
})
ulList.forEach(key=>{
  key.addEventListener('click',(e)=>{
   e.target.style.textDecoration='line-through';

  })

})