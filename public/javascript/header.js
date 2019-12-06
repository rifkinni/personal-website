document.addEventListener('DOMContentLoaded', function () {
  unfurl();
  document.getElementById("bio-dropdown-arrow").addEventListener("click", unfurl);
  document.getElementById("sidebar").addEventListener("click", furl);
  document.getElementById("resume").addEventListener("click", furl);
  document.getElementById("bio-up-arrow").addEventListener("click", furl);
});

function unfurl() {
  show(document.getElementById("bio-dropdown"));
  hide(document.getElementById("bio-dropdown-arrow"));
  fade("sidebar");
  fade("resume");
}

function furl() {
  hide(document.getElementById("bio-dropdown"));
  show(document.getElementById("bio-dropdown-arrow"))
  unFade("sidebar");
  unFade("resume");
}

function fade(id) {
  addClass(id, "faded");
}

function unFade(id) {
  removeClass(id, "faded");
}

function addClass(id, className) {
  var element = document.getElementById(id);
	element.classList.add(className);
}

function removeClass(id, className) {
  var element = document.getElementById(id);
	element.classList.remove(className);
}