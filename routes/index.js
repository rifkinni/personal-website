var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  params = {
    bio: bio(),
    skillCategories: skillCategories(),
    resumeCategories: resumeCategories()
  }
  res.render('index', params);
});

router.get('/cats', function(req, res, next) {
  res.render('cats');
});

router.get('/about', function(req, res, next) {
  params = {
    bio: bio()
  }
  res.render('about', params);
});

module.exports = router;

function skillCategories() {
	return JSON.parse(fs.readFileSync('content/skills.json', 'utf8'));
}

function resumeCategories() {
  return JSON.parse(fs.readFileSync('content/resume.json', 'utf8'));
}

function bio() {
  return JSON.parse(fs.readFileSync('content/bio.json', 'utf8'));
}