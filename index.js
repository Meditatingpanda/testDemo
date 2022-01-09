let input=document.querySelector('input');
let btn=document.querySelector('.btn');
let ul=document.querySelector('ul');
let ulList=document.querySelectorAll('li');

input.addEventListener('keyup',(e)=>{
   if(e.keyCode==13){
     btn.click();
   }
})

btn.addEventListener('click',()=>{
//  ul.innerHTML+=`<li class=" listStyle">${input.value}</li>`;
//  input.value='';
 let li =document.createElement('li');
 li.innerText='* '+input.value;
 input.value='';
 li.setAttribute('class','shadow-sm pl-3 mb-3 hover:shadow-md ');
 ul.append(li);
})

// ulList.forEach(key=>{
//   key.addEventListener('click',(e)=>{
//    e.target.remove();

//   })
// })
ul.addEventListener('click',(e)=>{
  console.log(e.target.tagName);
  if(e.target.tagName=="LI")
e.target.remove();
})