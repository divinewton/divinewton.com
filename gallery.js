/* Mobile Nav Open/Close */
function openMobileNav() {
    document.getElementById("mobile-nav-overlay").style.width = "100%";
}
function closeMobileNav() {
    document.getElementById("mobile-nav-overlay").style.width = "0";
}

/* All Button */
function showAll() {
    const elements = document.querySelectorAll("[id^='ui-img'], [id^='visual-img'], [id^='physical-img']");
    elements.forEach(element => {
        element.style.display = "block";
    });
    buttonAll();
}

/* User Interface Button */
function showUI() {
    const elements = document.querySelectorAll("[id^='ui-img']");
    elements.forEach(element => {
        element.style.display = "block";
    });
    hideVisual();
    hidePhysical();
    buttonUI();
}
function hideUI() {
    const elements = document.querySelectorAll("[id^='ui-img']");
    elements.forEach(element => {
        element.style.display = "none";
    });
}

/* Visual Art Button */
function showVisual() {
    const elements = document.querySelectorAll("[id^='visual-img']");
    elements.forEach(element => {
        element.style.display = "block";
    });
    hideUI();
    hidePhysical();
    buttonVisual();
}
function hideVisual() {
    const elements = document.querySelectorAll("[id^='visual-img']");
    elements.forEach(element => {
        element.style.display = "none";
    });
}

/* Physical Art Button */
function showPhysical() {
    const elements = document.querySelectorAll("[id^='physical-img']");
    elements.forEach(element => {
        element.style.display = "block";
    });
    hideUI();
    hideVisual();
    buttonPhysical();
}
function hidePhysical() {
    const elements = document.querySelectorAll("[id^='physical-img']");
    elements.forEach(element => {
        element.style.display = "none";
    });
}

/* Button Colors */
function buttonAll() {
    document.getElementById("all-word").style.background = "rgba(117, 127, 182, 0.45)";
    document.getElementById("ui-word").style.background = "none";
    document.getElementById("visual-word").style.background = "none";
    document.getElementById("physical-word").style.background = "none";
}
function buttonUI() {
    document.getElementById("all-word").style.background = "none";
    document.getElementById("ui-word").style.background = "rgba(117, 127, 182, 0.45)";
    document.getElementById("visual-word").style.background = "none";
    document.getElementById("physical-word").style.background = "none";
}
function buttonVisual() {
    document.getElementById("all-word").style.background = "none";
    document.getElementById("ui-word").style.background = "none";
    document.getElementById("visual-word").style.background = "rgba(117, 127, 182, 0.45)";
    document.getElementById("physical-word").style.background = "none";
}
function buttonPhysical() {
    document.getElementById("all-word").style.background = "none";
    document.getElementById("ui-word").style.background = "none";
    document.getElementById("visual-word").style.background = "none";
    document.getElementById("physical-word").style.background = "rgba(117, 127, 182, 0.45)";
}