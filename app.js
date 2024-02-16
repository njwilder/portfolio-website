

function buttonClicked(button) {
    console.log("Button clicked...");
}

















/**
 * Helper function for toggleCard
 * @param {*} imgId img Element Id to change the src of
 */
function toggleCardImg(imgId) {
    if (document.getElementById(imgId).src.includes("plus_button.png")) {
        document.getElementById(imgId).src = "res/minus_button.png";
    } else {
        document.getElementById(imgId).src = "res/plus_button.png";
    }
}

/**
 * Helper function for toggleCard
 * @param {*} dropdownId text id for card
 */
function toggleCardDropdown(dropdownId) {
    if (document.getElementById(dropdownId).style.display == "") {
        document.getElementById(dropdownId).style.display = "block";
        document.getElementById(dropdownId).style.height = "200px";
    } else {
        document.getElementById(dropdownId).style.height = "0px";
        document.getElementById(dropdownId).style.display = "";
    }
}

/**
 * Allows card to drop down and show more text onclick.
 * @param {*} imgId toggle img element id
 * @param {*} dropdownId text element id for dropdown
 */
function toggleCard(imgId, dropdownId) {
    toggleCardImg(imgId);
    toggleCardDropdown(dropdownId);
}








