import './index.scss'

const el = document.createElement("div");
el.innerText = "Hello";
el.classList.add("title");

const rootEl = document.getElementById("root");

rootEl.appendChild(el);
