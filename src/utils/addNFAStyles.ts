export function addNFAStyles (cssRule: string, selector: string) {

    // check if our style element with id nfaStyles exists or not
    let styleElement = document.getElementById('nfaStyles');

    // Create a new style element
    if(!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'nfaStyles'
    }

    const isAdded = styleElement.innerHTML.indexOf(selector) !== -1; 

    // Set the CSS rule text
    if(!isAdded)
        styleElement.innerHTML += cssRule;

    // Append the style element to the document's head
    document.head.appendChild(styleElement);
}