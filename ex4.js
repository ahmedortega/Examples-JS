var gallary = document.getElementById('gallary'),
preview = document.getElementById('preview'),
divs = gallary.getElementsByTagName('div');

gallary.addEventListener("mouseover", Active);

function Active (e) {
  if (e.target.nodeName == "IMG") {
    preview.innerHTML = e.target.parentNode.innerHTML;
  }
}
