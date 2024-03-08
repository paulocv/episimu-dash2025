
console.groupCollapsed("visibility.js")
console.log("Loading visibility.js")


/**
 * Toggles the visibility of the specified HTML element.
 *
 * @param {string} elementId - The id of the HTML element to toggle
 * @return {void} 
 */
function toggleElementVisibility(elementId) {
    var x = document.getElementById(elementId);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/**
 * Hides the HTML element with the specified ID.
 *
 * @param {string} elementId - The ID of the HTML element to be hidden
 * @return {void} 
 */
function hideElement(elementId) {
    let x = document.getElementById(elementId);
    x.style.display = "none";
    console.log("Hidden element: ", elementId)
}

/**
 * Shows the element with the specified ID by setting its display style to "block".
 *
 * @param {string} elementId - The ID of the element to be shown
 * @return {void} 
 */
function showElement(elementId) {
    let x = document.getElementById(elementId);
    x.style.display = "block";
    console.log("Displayed element: ", elementId)
}

console.groupEnd()