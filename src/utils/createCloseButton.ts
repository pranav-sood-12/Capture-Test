import { addNFAStyles } from "./addNFAStyles";

export function createCloseButton(): HTMLElement{
    const closeButton = document.createElement('div');
   
    closeButton.setAttribute('role', 'button')
    closeButton.setAttribute('tabindex', '0')
    
    closeButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15">
        <path d="M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5"></path>
    </svg>
    `
    // add click event
    closeButton.addEventListener('click', removeNFA)

    // set close buttons styles
    closeButton.className = 'nfa-close-btn'
    setCloseButtonStyles()

    return closeButton
}

function setCloseButtonStyles() : void {
    const styles = `
        .nfa-close-btn {
            position: absolute;
            width: 1em;
            height: 1em;
            background-color: #fff;
            top: 0;
            right: 0;
            stroke: #7808FF;
            fill: #7808FF;
            stroke-width: 1.25;
            cursor: pointer;
        }

        .nfa-close-btn svg {
            pointer-events: none;
        }
    `

    addNFAStyles(styles, 'nfa-close-btn')
}


function removeNFA(event: Event) : void {
    const target = event.target as Node;
    const parent = target.parentNode as HTMLElement;
 
    parent.remove()
 }