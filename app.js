
// Ammo-8 color palette
const colorDark3  = "#040c06";
const colorDark2  = "#112318";
const colorDark1  = "#1e3a29";
const colorDark0  = "#305d42";
const colorLight0 = "#4d8061";
const colorLight1 = "#89a257";
const colorLight2 = "#bedc7f";
const colorLight3 = "#eeffcc";

const hamburgerId = "hamburger";
const projectItemClassName = "projectItem";
const projectDescriptionButtonId = "projectDescriptionButton";



/**
 * Open and close the sidebar menu for navigation when the hamburger is toggled.
 */
function toggleHamburger () {
    let hamburger = document.getElementById(hamburgerId);
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


/**
 * Helper function for toggleDescriptions, broken out functionality for other functions to use
 * @param {string} startValue "enabled" or "disabled" to know how to manipulate the project description
 * @param {*} projectItem projectItem element to be manipulated  
 */
function toggleDescription(startValue, projectItem) {
    let header = projectItem.children[0]
    let description = projectItem.children[2];
    let descriptionStyle = description.style;
    
    if (startValue == "disabled") {
        descriptionStyle.position = "relative";
        descriptionStyle.opacity  = "1";
        descriptionStyle.height   = "fit-content";

        header.style.top = (projectItem.children[1].clientHeight - header.clientHeight).toString() + "px";
        header.style.bottom = "";
    } else {
        descriptionStyle.position = "absolute";
        descriptionStyle.opacity  = "";
        descriptionStyle.height   = "100%";

        header.style.top = "";
        header.style.bottom = "0";
    }
}

function toggleDescriptions() {
    let button = document.getElementById(projectDescriptionButtonId);
    let projectItems = document.getElementsByClassName(projectItemClassName);
    for (let item = 0; item < projectItems.length; item++) {
        toggleDescription(button.value, projectItems[item]);
    }
    if (button.value == "enabled") {
        button.value = "disabled";
    } else {
        button.value = "enabled";
    }
}

function updateProjItemHeaderHeight() {
    let buttonVal = document.getElementById("projectDescriptionButton").value;
    // Reset the header size
    if (buttonVal == "enabled") {
        console.log("Firing off update event");
        let projectItems = document.getElementsByClassName(projectItemClassName);
        for (let item = 0; item < projectItems.length; item++) {
            // Redo the toggleDescription calculations to ensure proper text heights
            toggleDescription("enabled", projectItems[item]);
            toggleDescription("disabled", projectItems[item]);
        }
    }
}


const fontScalarMin = window.matchMedia("(min-width: 700px)");
const fontScalarMax = window.matchMedia("(max-width: 700px)");

// Whenever the 700px threshold is passed, we need to recalculate header heights for potentially
// enabled descriptions.
fontScalarMin.addEventListener("change", e => {
    if (e.matches) {
        updateProjItemHeaderHeight();
    }
})
fontScalarMax.addEventListener("change", e => {
    if (e.matches) {
        updateProjItemHeaderHeight();
    }
})