document.getElementById('sidebar').addEventListener("click", filter);
document.getElementById('help-text').addEventListener("click", clearFilters);
document.addEventListener("DOMContentLoaded", filter);

function filter() {
  filterEntries();
  filterSections();
  updateHelpText();
}

function updateHelpText() {
  var skills = filterSkills();
  var helper = document.getElementById('help-text')

  if (skills == undefined || skills.length === 0) {
    helper.innerHTML = "Filter by experience"
    helper.classList.remove("clickable");
  } else {
    helper.innerHTML = "Clear filter"
    helper.classList.add("clickable");
  }
}

function filterEntries() {
  var skills = filterSkills();

  getEntries(document).forEach(entry => {
    var tags = getTags(entry);
    if (shouldShowEntry(skills, tags)) {
      show(entry);
    } else {
      hide(entry);
    }
  });
}

function filterSections() {
  getSections().forEach(section => {
    if (shouldShowSection(section)) {
      show(section);
    } else {
      hide(section);
    }
  })
}

function clearFilters() {
  getSkills().forEach(skill => { skill.checked = false });
  filter();
}

function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

function shouldShowEntry(skills, tags) {
  if (skills == undefined || skills.length === 0) {
    return tags.includes("Default")
  } else {
    return skills.filter(skill => tags.includes(skill)).length > 0
  }
}

function shouldShowSection(section) {
  return getEntries(section).filter(entry => {
      return !entry.classList.contains("hidden");
  }).length > 0
}

function filterSkills(allSkills) {
  return getSkills().filter(skill => {
    return skill.checked;
  }).map(skill => {
    return skill.id
  });
}

function getSkills() {
  return [...document.getElementsByClassName('js-skill')];
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
