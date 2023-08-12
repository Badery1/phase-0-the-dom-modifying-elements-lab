const ul = document.getElementsByTagName("main")[0];
ul.remove();

const newHeader = document.createElement("h1");
newHeader.textContent = "Michael is the champion";
newHeader.setAttribute("id", "victory");
document.head.appendChild(newHeader);