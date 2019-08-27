document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
  var sections =  document.getElementsByClassName("js-skill-section");
  loadCollapsibleMenu([...sections]);
  bindFilters([...sections]);
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

function bindFilters(sections) {
  sections.forEach(function(section) {
    getSiblings(section).forEach(function(skill) {
      skill.addEventListener("click", () => toggleSelected(skill));
    });
  });
}

function toggleSelected(skill) {
  skill.classList.toggle("selected");
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
