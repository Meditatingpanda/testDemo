let input=document.querySelector('input');
let btn=document.querySelector('.btn');
let ul=document.querySelector('ul');
let ulList=document.querySelectorAll('li');

let body=document.querySelector('body');
body.style.backgroundImage=`url(./bgSmall.jpg)`;
input.addEventListener('keyup',(e)=>{
   if(e.keyCode==13){
     btn.click();
   }
})

btn.addEventListener('click',()=>{
//  ul.innerHTML+=`<li class=" listStyle">${input.value}</li>`;
//  input.value='';
 let li =document.createElement('li');
 if(input.value.length!==0){
  li.innerHTML='<i class="fas fa-check"></i>'+input.value;
 }
 input.value='';
 li.setAttribute('class','shadow-sm pl-3 mb-3 hover:shadow-md ');
 ul.append(li);
})

ul.addEventListener('click',(e)=>{
  console.log(e.target.tagName);
  if(e.target.tagName=="LI")
e.target.remove();
})