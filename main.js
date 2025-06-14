/* Ui by Divi Popup */
function openUibydivi() {
    document.getElementById("uibydivi-popout").style.height = "100%";
}
function closeUibydivi() {
    document.getElementById("uibydivi-popout").style.height = "0%";
}

/* personal Popup */
function openPersonalsite() {
    document.getElementById("personalsite-popout").style.height = "100%";
}
function closePersonalsite() {
    document.getElementById("personalsite-popout").style.height = "0%";
}

/* Apple Scoop Popup */
function openApplescoop() {
    document.getElementById("applescoop-popout").style.height = "100%";
}
function closeApplescoop() {
    document.getElementById("applescoop-popout").style.height = "0%";
}

/* GCI Popup */
function openGci() {
    document.getElementById("gci-popout").style.height = "100%";
}
function closeGci() {
    document.getElementById("gci-popout").style.height = "0%";
}

/* Data Structures Popup */
function openDS() {
    document.getElementById("data-structures-popout").style.height = "100%";
}
function closeDS() {
    document.getElementById("data-structures-popout").style.height = "0%";
}

/* Writing Popup */
function openWriting() {
    document.getElementById("writing-popout").style.height = "100%";
}
function closeWriting() {
    document.getElementById("writing-popout").style.height = "0%";
}

/* Scrolling Text Opacity */
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    if (currentScrollPos <1000) {
        document.getElementById("intro-container-top").style.opacity = "100%";
        document.getElementById("down-arrow-intro").style.opacity = "75%";
    }
  } else {
    if (currentScrollPos > 1000) {
        document.getElementById("intro-container-top").style.opacity = "0";
        document.getElementById("down-arrow-intro").style.opacity = "0";
    }
  }
  prevScrollpos = currentScrollPos;
}

/* Skills Show All Button */
function showSkills() {
    var skill1 = document.getElementById("extra-skill-1");
    skill1.style.display = "block";
    var skill2 = document.getElementById("extra-skill-2");
    skill2.style.display = "block";
    var skill3 = document.getElementById("extra-skill-3");
    skill3.style.display = "block";
    var skill4 = document.getElementById("extra-skill-4");
    skill4.style.display = "block";
    var skill5 = document.getElementById("extra-skill-5");
    skill5.style.display = "block";
    var skill6 = document.getElementById("extra-skill-6");
    skill6.style.display = "block";
    var skill7 = document.getElementById("extra-skill-7");
    skill7.style.display = "block";
    var skill8 = document.getElementById("extra-skill-8");
    skill8.style.display = "block";
    var skill8 = document.getElementById("extra-skill-9");
    skill8.style.display = "block";
    var skill8 = document.getElementById("extra-skill-10");
    skill8.style.display = "block";
    var skill8 = document.getElementById("extra-skill-11");
    skill8.style.display = "block";
    var skill8 = document.getElementById("extra-skill-12");
    skill8.style.display = "block";
    var button = document.getElementById("skill-show-btn");
    button.style.display = "none";
    var button = document.getElementById("skill-less-btn");
    button.style.display = "block";
}
function showLess() {
    var skill1 = document.getElementById("extra-skill-1");
    skill1.style.display = "none";
    var skill2 = document.getElementById("extra-skill-2");
    skill2.style.display = "none";
    var skill3 = document.getElementById("extra-skill-3");
    skill3.style.display = "none";
    var skill4 = document.getElementById("extra-skill-4");
    skill4.style.display = "none";
    var skill5 = document.getElementById("extra-skill-5");
    skill5.style.display = "none";
    var skill6 = document.getElementById("extra-skill-6");
    skill6.style.display = "none";
    var skill7 = document.getElementById("extra-skill-7");
    skill7.style.display = "none";
    var skill8 = document.getElementById("extra-skill-8");
    skill8.style.display = "none";
    var skill8 = document.getElementById("extra-skill-9");
    skill8.style.display = "none";
    var skill8 = document.getElementById("extra-skill-10");
    skill8.style.display = "none";
    var skill8 = document.getElementById("extra-skill-11");
    skill8.style.display = "none";
    var skill8 = document.getElementById("extra-skill-12");
    skill8.style.display = "none";
    var button = document.getElementById("skill-show-btn");
    button.style.display = "block";
    var button = document.getElementById("skill-less-btn");
    button.style.display = "none";
    var scrollDiv = document.getElementById("skill-show-btn").offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
}

/* Mobile Nav Open/Close */
function openMobileNav() {
    document.getElementById("mobile-nav-overlay").style.width = "100%";
}
function closeMobileNav() {
    document.getElementById("mobile-nav-overlay").style.width = "0";
}