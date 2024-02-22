
// Ammo-8 color palette
const colorDark3  = "#040c06";
const colorDark2  = "#112318";
const colorDark1  = "#1e3a29";
const colorDark0  = "#305d42";
const colorLight0 = "#4d8061";
const colorLight1 = "#89a257";
const colorLight2 = "#bedc7f";
const colorLight3 = "#eeffcc";



/**
 * Open and close the sidebar menu for navigation when the hamburger is toggled.
 * @param {string} hamburgerID the hamburger button element id
 */
function toggleHamburger (hamburgerID) {
    let hamburger = document.getElementById(hamburgerID);
    let sidebar = document.getElementById("sidebar");
    let navbarList = sidebar.children[1].children[0];
    if (hamburger.value == "closed") {
        for (var bar = 0; bar < hamburger.children.length; bar++) {
            hamburger.children[bar].style.backgroundColor = colorDark2;
            hamburger.children[bar].style.borderColor     = colorLight2;
        }

        sidebar.style.translate = "0%";
        for (var li = 0; li < navbarList.children.length; li++) {
            navbarList.children[li].children[0].style.visibility = "visible";
        }

        hamburger.value = "opened";

    // Close the sidebar
    } else {
        for (let bar = 0; bar < hamburger.children.length; bar++) {
            hamburger.children[bar].style.backgroundColor = colorLight1;
            hamburger.children[bar].style.borderColor     = colorDark1;
        }

        sidebar.style.translate = "200%";
        for (let li = 0; li < navbarList.children.length; li++) {
            navbarList.children[li].children[0].style.visibility = "hidden";
        }

        hamburger.value = "closed";
    }
}


// function toggleDescription() {

// }

function toggleDescriptions(button) {
    let projectItems = document.getElementsByClassName("projectItem");
    if (button.value == "disabled") {
        for (let item = 0; item < projectItems.length; item++) {
            let headerStyle = projectItems[item].children[0].style;
            let description = projectItems[item].children[2];
            let descriptionStyle = description.style;
            descriptionStyle.position = "relative";
            descriptionStyle.opacity  = "1";
            descriptionStyle.height   = "fit-content";
            headerStyle.bottom = description.offsetHeight.toString() + "px";
        }
        button.value = "enabled"

    // Disable descriptions
    } else {
        for (let item = 0; item < projectItems.length; item++) {
            let headerStyle = projectItems[item].children[0].style;
            let description = projectItems[item].children[2];
            let descriptionStyle = description.style;
            descriptionStyle.position = "absolute";
            descriptionStyle.opacity  = ""; // If this is set to '0', it will cease to transition on hover
            descriptionStyle.height   = "100%";
            headerStyle.bottom = "0";
        }
        button.value = "disabled";
    }
}




