
/**
 * Calculator which returns my accurate age for text purposes.
 * @returns age in years
 */
// function calculateCurrentAge() {
//     const date = new Date();

//     const day   = date.getDay();
//     const month = date.getMonth();
//     const year  = date.getFullYear();

//     let age = year - 1998;

//     // Birth date: 08/09/1998
//     if (month-8 == 0) {
//         if (day-9 >= 0) {
//             return age;
//         }
//     } else if (month-8 > 0) {
//         return age;
//     }
//     return age - 1;
// }

/**
 * Helper function for toggleCard
 * @param {*} imgID img Element ID to change the src of
 */
function toggleCardImg(imgID) {
    if (document.getElementById(imgID).src.includes("plus_button.png")) {
        document.getElementById(imgID).src = "res/minus_button.png";
    } else {
        document.getElementById(imgID).src = "res/plus_button.png";
    }
}

/**
 * Helper function for toggleCard
 * @param {*} dropdownID text id for card
 */
function toggleCardDropdown(divElement, dropdownID) {
    if (document.getElementById(dropdownID).style.display == "") {
        divElement.style.height = "200px";
        document.getElementById(dropdownID).style.display = "block";
    } else {
        divElement.style.height = "50px";
        document.getElementById(dropdownID).style.display = "";
    }
}

/**
 * Allows card to drop down and show more text onclick.
 * @param {*} imgID toggle img element id
 * @param {*} dropdownID text element id for dropdown
 */
// function toggleCard(imgID, dropdownID) {
//     toggleCardImg(imgID);
//     toggleCardDropdown(dropdownID);
// }

function toggleCard(divElement, imgID, dropdownID) {
    // divElement.style.height = "200px";
    toggleCardImg(imgID);
    toggleCardDropdown(divElement, dropdownID);
}

// Update age.
// document.getElementById("age").innerHTML = calculateCurrentAge();

