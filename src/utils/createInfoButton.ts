import { addNFAStyles } from "./addNFAStyles";

export function createInfoButton(): HTMLElement{
    const infoButton = document.createElement('div');
    
    infoButton.setAttribute('role', 'button')
    infoButton.setAttribute('tabindex', '0')
    
    infoButton.innerHTML = `
    <span class="info-content">Ads by Adguin</span>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15">
       <path d="M7.5,1.5a6,6,0,1,0,0,12a6,6,0,1,0,0,-12m0,1a5,5,0,1,1,0,10a5,5,0,1,1,0,-10ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75a1,1,0,1,0,0,2a1,1,0,1,0,0,-2Z"></path>
    </svg>
    `
    // set info buttons styles
    infoButton.className = 'nfa-info-btn'
    setInfoButtonStyles()

    return infoButton
}

function setInfoButtonStyles() {
    const styles = `
        .nfa-info-btn svg {
            position: absolute;
            height: 1em;
            width: 1em;
            top: 0;
            right: calc(1em + 3px);
            background-color: #fff;
            fill: #7808FF;
            cursor: pointer;
        }

        .nfa-info-btn .info-content {
            display: none;
            position: absolute;
            top: 0;
            right: 2.75em;
            padding: 0.1em 0.5em;
            font-size: 0.75rem;    
            background-color: #fff;
            border-radius: 0 0 0 0.5em;
        }

        .nfa-info-btn:hover .info-content {
            display: block;
        }
    `

    addNFAStyles(styles, 'nfa-info-btn')
}