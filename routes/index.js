var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { bio: bio() });
});

router.get('/about', function(req, res, next) {
  res.render('about', { bio: bio() });
});

router.get('/resume', function(req, res, next) {
  params = {
    bio: bio(),
    skillCategories: skillCategories(),
    resumeCategories: resumeCategories()
  }
  res.render('index', params);
});

router.get('/cats', function(req, res, next) {
  res.render('cats', { bio: bio() });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { bio: bio(), portfolio: portfolio() });
});

module.exports = router;

function skillCategories() {
	var categories = JSON.parse(fs.readFileSync('content/skills.json', 'utf8'));
  categories.forEach(category => {
    category.skills.forEach( skill => {
      skill.level = "&#9733; ".repeat(skill.level).concat("&#9734;".repeat(3 - skill.level))
    })
  })
  return categories
}

function resumeCategories() {
  return JSON.parse(fs.readFileSync('content/resume.json', 'utf8'));
}

function bio() {
  return JSON.parse(fs.readFileSync('content/bio.json', 'utf8'));
}

function portfolio() {
  return {
    'Blog': JSON.parse(fs.readFileSync('content/blog.json', 'utf8')),
    'Open Source Contributions': JSON.parse(fs.readFileSync('content/open_source.json', 'utf8'))
  }
}
