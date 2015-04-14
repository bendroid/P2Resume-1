var bio = {
  "name": "Benjamin Turner",
  "role": "Web Developer",
  "contacts": {
    "mobile": "804-914-4337",
    "email": "turnerbk@gmail.com",
    "github": "TenBurner",
    "twitter": "benturner",
    "location": "Richmond, VA"
  },
  "welcomeMessage": "Welcome to my virtual resume",
  "skills": [
    "ambiturner", "flying above", "good at things and stuff"
  ],
  "bioPic":"images/ben.jpg"
 };

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedTwitter)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedTwitter)
        .append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

    $("#header").append(formattedBioPic).append(formattedWelcomeMsg);
    if(bio.skills.length > 0) {

      $("#header").append(HTMLskillsStart);

      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
      $("skills").append(formattedSkill);

    }
  };

 var education = {
   "schools": [
     {
       "name": "Virginia Commonwealth University",
       "city": "Richmond, VA",
       "degree": "Graduate Certificate",
       "major": "Certificate - Geographic Information Systems",
       "dates": "2009-2010",
       "url": "http://www.vcu.edu",
     },
     {
       "name": "James Madison University",
       "city": "Harrisonburg, VA",
       "degree": "BA",
       "major": "Foreign Languages and Literatures - Spanish",
       "dates": "2002-2007",
       "url": "http://www.jmu.edu",
     }],
   "onlineCourses": [
     {
       "title": "Front-End Web Developer Nanodegree",
       "school": "Udacity",
       "dates": 2015,
       "url": "http://www.udacity.com",
     }]
 };

 education.display = function(){
   education.schools.forEach(function(school) {
     $("#education").append(HTMLschoolStart);

     var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
     $(".education-entry:last").append(formattedSchoolName);

     var formattedSchoolCity = HTMLschoolLocation.replace("%data%", school.city);
     $(".education-entry:last").append(formattedSchoolCity);

     var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
     $(".education-entry:last").append(formattedSchoolDegree);

     var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
     $(".education-entry:last").append(formattedSchoolMajor);

     var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
     $(".education-entry:last").append(formattedSchoolDates);
   });

   if (education.onlineCourses.length > 0) {
     $("education-entry").append(HTMLonlineClasses);
     education.onlineCourses.forEach(function (course) {
       var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
       var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
       var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);

       $(".education-entry:last")
        .append(formattedOnlineTitle)
        .append(formattedOnlineSchool)
        .append(formattedOnlineDates);
    });
  }
};

 var work = {
   "jobs": [
     {
       "employer": "Capital One",
       "title": "Customer Service Coordinator",
       "dates": "August 2012 - Future",
       "description": "Provide superior customer service while managing high-value personal and small business credit card accounts.",
       "location": "Richmond, VA",
     },
     {
       "employer": "DoubleTree Richmond Conference Center",
       "title": "Guest Services Manager",
       "dates": "2003-2010",
       "description": "Manage and resolve questions and concerns from customers, guests, employees, and department heads for one of the largest conference centers in Richmond.",
       "location": "Richmond, VA",
     }
   ]
 };

function displayWork(){
   for (job in work.jobs) {
     $("#workExperience").append(HTMLworkStart);

     var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
     var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
     var formattedEmployerTitle = formattedEmployer + formattedTitle;
     $(".work-entry:last").append(formattedEmployerTitle);

     var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
     $(".work-entry:last").append(formattedDates);

     var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
     $(".work-entry:last").append(formattedLocation);

     var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
     $(".work-entry:last").append(formattedDescription);

   }
 }

 var projects = {
   "projects": [
     {
       "title": "James River Parks",
       "dates": "2010",
       "description": "This is a GIS map I created regarding access to James River Parks from my home.",
       "images": [
         "images/jamesriver.jpg"
       ]
     }
   ]
 };

 projects.display = function() {
   for (project in projects.projects) {
     $("#projects").append(HTMLprojectStart);

     var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
     $(".project-entry:last").append(formattedTitle);

     var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
     $(".project-entry:last").append(formattedDates);

     var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
     $(".project-entry:last").append(formattedDescription);

     if (projects.projects[project].images.length > 0) {
       for (image in projects.projects[project].images) {
         var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
         $(".project-entry:last").append(formattedImage);
       }
     }
   }
  };


displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];

}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

projects.display();
bio.display();
education.display();
