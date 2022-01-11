let input = document.querySelector(".input1");
let btn = document.querySelector(".btn");
let ul = document.querySelector("ul");
let ulList = document.querySelectorAll("li");

let body = document.querySelector("body");
//body.style.backgroundImage = `url(https://images.pexels.com/photos/5184954/pexels-photo-5184954.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)`;
input.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    btn.click();
  }
});

btn.addEventListener("click", () => {
  //  ul.innerHTML+=`<li class=" listStyle">${input.value}</li>`;
  //  input.value='';
  let li = document.createElement("li");
  if (input.value.length !== 0) {
    li.innerHTML =
      '<i class="fas fa-check"></i>' +
      input.value +
      '<i class="fas fa-trash-alt absolute right-2 "></i>';
  }
  input.value = "";
  li.setAttribute("class", "shadow-sm pl-3 mb-5 hover:shadow-md relative");
  ul.append(li);
});

ul.addEventListener("click", (e) => {
  // console.log(e.target.tagName);
  // console.log(e);
  if (e.target.tagName == "I")
  // e.target.parent.remove();
   e.target.parentElement.remove();
});
