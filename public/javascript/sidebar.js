document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
  var sections =  document.getElementsByClassName("js-skill-section");
  loadCollapsibleMenu([...sections]);
}

function loadCollapsibleMenu(sections) {
  sections.forEach(function(section) {
    section.addEventListener("click", function() {
      getSiblings(this).forEach(function(element) {
        element.classList.toggle("hidden");
      });
      turnArrow(this);
    });
  });
}

function getSiblings(element) {
  var siblings = [];
  var sibling = element.nextElementSibling
  while (sibling) {
    siblings.push(sibling)
    sibling = sibling.nextSibling
  }
  return siblings
}

function turnArrow(element) {
  var sibling = element.previousElementSibling
  while (sibling) {
    if (sibling.classList.contains("arrow")) {
      return sibling.classList.toggle("arrow--down")
    }
  }
}
