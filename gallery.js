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
}

/* User Interface Button */
function showUI() {
    const elements = document.querySelectorAll("[id^='ui-img']");
    elements.forEach(element => {
        element.style.display = "block";
    });
    hideVisual();
    hidePhysical();
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
}
function hidePhysical() {
    const elements = document.querySelectorAll("[id^='physical-img']");
    elements.forEach(element => {
        element.style.display = "none";
    });
}