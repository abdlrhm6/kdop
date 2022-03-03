let menu = document.querySelector("header .menu");
let ul = document.querySelector("nav ul");
menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  if (menu.classList.contains("open")) {
    ul.classList.add("opened");
  } else {
    ul.classList.remove("opened");
  }
});

//testimonials

let leftn = document.querySelector(".testimonials .left h4");
let leftp = document.querySelector(".testimonials .left p");
let leftimage = document.querySelector(".testimonials .left::before");
let lefts = document.querySelector(".testimonials .left img");

let centern = document.querySelector(".testimonials .center h4");
let centerp = document.querySelector(".testimonials .center p");
let centerimage = window.getComputedStyle(
  document.querySelector(".testimonials .center"),
  "::before"
);
let centers = document.querySelector(".testimonials .center img");

let rightn = document.querySelector(".testimonials .right h4");
let rightp = document.querySelector(".testimonials .right p");
let rightimage = document.querySelector(".testimonials .right::before");
let rights = document.querySelector(".testimonials .right img");

let arrright = document.querySelector(".testi .stats  .arrr");
let arrleft = document.querySelector(".testi .stats .arrl");
let npage = document.querySelector(".testi .stats  span.n");

// --------------events

let feed = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asfficia.",
  "Lorem ipsum dolt amet consectetur adipisicing elit. Voluptas, placeat labore?",
  "Loremnsectetur adipisicing elit. Aliquid porro dolorem numquam.",
  "Lortur adipisicing elit. Magni sed aperiam iusto mollitia?",
  "Loreisicing elit. Aliquam dolor molestias repellat quae officia.",
  "Lorem ipdis, reprehenderit id nesciunt!",
  "Lorem, ipsure assumenda harum minus asperiores?",
  "Lorem ipsum dbore et, libero impedit illum maiores!",
];
let names = [
  "ERIK JONS",
  "TOM LAFY",
  "SNEAK PIK",
  "RATTOW RAT",
  "MEOW A3E",
  "RANDOMS MOR",
  "NOMRE OKDSL",
  "LASTI LAST",
];

let imgs = ["img1", "img2", "img3", "img2", "img1", "img2", "img3", "img1"];

let current = 0;

centern.innerHTML = names[current];
centerp.innerHTML = feed[current];
leftn.innerHTML =
  names[current - 1] == undefined ? "Name " : names[current - 1];
leftp.innerHTML = feed[current - 1] == undefined ? "about" : feed[current - 1];
rightn.innerHTML =
  names[current + 1] == undefined ? "Name" : names[current + 1];
rightp.innerHTML = feed[current + 1] == undefined ? "about" : feed[current + 1];

arrright.addEventListener("click", () => {
  console.log(centerimage);
  current++;
  if (current == 8) {
    current = 0;
  }

  centern.innerHTML = names[current];
  centerp.innerHTML = feed[current];
  leftn.innerHTML =
    names[current - 1] == undefined ? "Name" : names[current - 1];
  leftp.innerHTML =
    feed[current - 1] == undefined ? "about" : feed[current - 1];
  rightn.innerHTML =
    names[current + 1] == undefined ? "Name" : names[current + 1];
  rightp.innerHTML =
    feed[current + 1] == undefined ? "about" : feed[current + 1];
  npage.innerHTML = current + 1;
});
arrleft.addEventListener("click", () => {
  current--;
  if (current == -1) {
    current = 7;
  }

  centern.innerHTML = names[current];
  centerp.innerHTML = feed[current];
  leftn.innerHTML =
    names[current - 1] == undefined ? "Name" : names[current - 1];
  leftp.innerHTML = feed[current - 1] == undefined ? "p" : feed[current - 1];
  rightn.innerHTML =
    names[current + 1] == undefined ? "Name" : names[current + 1];
  rightp.innerHTML = feed[current + 1] == undefined ? "p" : feed[current + 1];
  npage.innerHTML = current + 1;
});


// forms

let login=document.querySelector(".register .forms .l");
let register=document.querySelector(".register .forms .re");
let form =document.querySelector(".register .forms .formscontainer");

login.addEventListener("click", ()=>{
  register.classList.add("active");
  form.classList.add("active");
})
register.addEventListener("click", ()=>{
  register.classList.remove("active");
  form.classList.remove("active");
})