document.addEventListener("click", filter);
document.addEventListener("DOMContentLoaded", filter);

function filter() {
  var skills = getSkills();
  var entries = getEntries(document);
  var sections = getSections();

  filterEntries(entries, skills);
  filterSections(sections);
}

function filterEntries(entries, skills) {
  entries.forEach(entry => {
    var tags = getTags(entry);
    if (shouldHideEntry(skills, tags)) {
      hide(entry);
    } else {
      show(entry);
    }
  });
}

function filterSections(sections) {
  sections.forEach(section => {
    if (shouldHideSection(section)) {
      hide(section);
    } else {
      show(section);
    }
  })
}

function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

function shouldHideEntry(skills, tags) {
  if (skills == undefined || skills.length === 0) {
    return !tags.includes("Default")
  } else {
    return skills.filter(skill => tags.includes(skill)).length === 0
  }
}

function shouldHideSection(section) {
  return getEntries(section).filter(entry => {
      return !entry.classList.contains("hidden");
  }).length === 0
}

function getSkills() {
  var skills = document.getElementsByClassName('js-skill');
  return [...skills].filter(skill => {
    return skill.checked;
  }).map(skill => {
    return skill.id
  });
}

function getEntries(parent) {
  return [...parent.getElementsByClassName('content-entry')]
}

function getSections() {
  return [...document.getElementsByClassName('js-content-section')]
}

function getTags(entry) {
  return entry.getElementsByClassName("js-skill-tags")[0].innerHTML.split(",")
}
