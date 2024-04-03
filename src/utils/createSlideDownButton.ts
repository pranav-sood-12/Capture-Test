import { addNFAStyles } from "./addNFAStyles"

export function createSlideDownButton(): HTMLElement {
    const slideDownButton = document.createElement('div')

    slideDownButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 35">   
        <g class="down" stroke="#616161" stroke-width="3px" stroke-linecap="square">
            <line x1="40" y1="17" x2="50" y2="27"></line>
            <line x1="50" y1="27" x2="60" y2="17"></line>
        </g>
    </svg>
    `

      // set close buttons styles
      slideDownButton.className = 'nfa-slide-down-btn'
      setSlideDownButtonStyles()

      // add click event
      slideDownButton.addEventListener('click', hideFooterNFA)

      return slideDownButton
}

function setSlideDownButtonStyles() {
    const styles = `
        .nfa-slide-down-btn {
            position: absolute;
            top: -1.6em;
            left: 0;
            width: 4em;
            height: 1.5em;
            border-radius: 0.5em 0.5em 0 0;
            background-color: #f5f5f5;
            border: 2px solid #d6d6d6;
            border-bottom: none;
            cursor: pointer;
        }
    `

    addNFAStyles(styles, 'nfa-slide-down-btn')
}

function hideFooterNFA(event: Event) {
    const target = event.target as Node;
    const parent = target.parentNode as HTMLElement;
    const nfaContainer = parent.parentNode as HTMLElement;

    console.log(nfaContainer)

    nfaContainer.classList.toggle('hide')
}