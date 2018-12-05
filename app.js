const bodyEl = document.querySelector("body");

// const divEl = document.getElementById("nice")
const paragraphEl = document.querySelector("p");
const divEl = document.querySelector("div");

// console.log(bodyEl.getAttribute("class"));

// bodyEl.setAttribute("id", "ds");

// divEl.setAttribute("class", "now");

// divEl.removeAttribute("class");

// paragraphEl.classList.remove("random");
// paragraphEl.classList.add("red-giant");

// bodyEl.classList.toggle("on");

const switchEl = document.querySelector("button");
// const switch2El = document.querySelector("button");

// switched to ES6 (old version below with other examples)
switchEl.onclick = () => bodyEl.classList.toggle("on");

// switchEl.onclick = function() {
//   bodyEl.classList.toggle("on");
//   paragraphEl.classList.toggle("on");
//   divEl.classList.toggle("on");
// }

// switch2El.onclick = function() {
//   paragaphEl.classList.toggle("on");
// }
