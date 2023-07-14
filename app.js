
// May not actually use this? Shouldn't shoehorn it in if it doesn't make sense
function calculateCurrentAge() {
    const date = new Date();

    const day   = date.getDay();
    const month = date.getMonth();
    const year  = date.getFullYear();

    let age = year - 1998;

    // Birth date: 08/09/1998
    if (month-8 == 0) {
        if (day-9 >= 0) {
            return age;
        }
    } else if (month-8 > 0) {
        return age;
    }
    return age - 1;
}

/**
 * Changes card plus buttons to minus buttons and vice versa.
 */
function toggleCard(imgID, dropdownID) {
    if (document.getElementById(imgID).src.includes("plus_button.png")) {
        document.getElementById(imgID).src = "res/minus_button.png";
        document.getElementById(dropdownID).style.display = "block";
    } else {
        document.getElementById(imgID).src = "res/plus_button.png";
        document.getElementById(dropdownID).style.display = "none";
    }
}

// Update age.
// document.getElementById("age").innerHTML = calculateCurrentAge();

