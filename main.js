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

/* Under Construction Alert */
function underConstruction() {
    alert("Resume page is currently under construction.\nPlease check back later!");
}

/* Scrolling Text Opacity */
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    if (currentScrollPos <1000) {
        document.getElementById("text-first-h1").style.opacity = "100%";
        document.getElementById("intro-paragraph").style.opacity = "75%";
    }
  } else {
    if (currentScrollPos > 1000) {
        document.getElementById("text-first-h1").style.opacity = "0";
        document.getElementById("intro-paragraph").style.opacity = "0";
    }
  }
  prevScrollpos = currentScrollPos;
}