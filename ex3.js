var mydiv = document.getElementById('div1') ,
ul = document.getElementById('ulList') ,
Lists = ul.getElementsByTagName('li'),
button =document.getElementById('button');
counter = 1;

ul.addEventListener("click", MakeChange);

function MakeChange(e) {
  if (e.target.nodeName == "LI") {
    mydiv.innerHTML = e.target.innerHTML;
    for (var i = 0; i < e.target.parentNode.children.length; i++) {
      e.target.parentNode.children[i].classList.remove("active");
    }
    e.target.classList.add("active");
  }
}

button.addEventListener("click", Add);

function Add () {
  ul.innerHTML += "<li> Item number "+ counter +"</li>";
  counter ++;
}
