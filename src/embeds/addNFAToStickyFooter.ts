import { generateNFA } from "../utils/generateNFA"
import { addNFAStyles } from "../utils/addNFAStyles"
import { createSlideDownButton } from "../utils/createSlideDownButton"

export async function addNFAToStickyFooter(tokenId: number) : Promise<void> {
    try {
      
        // create NF container
        const container = document.createElement('div')

        // generate NFA for the token ID passed
        const nfa = await generateNFA(tokenId)

        if(nfa) {
            container.appendChild(nfa)

            // set th NFA token ID as a data attribute
            container.dataset.tokenId = String(tokenId)
        } 

        const slideDownButton = createSlideDownButton()
        container.appendChild(slideDownButton)
        document.body.appendChild(container)
        
        // apply css styling for all NFA container
        container.className = 'nfa-sticky-footer'
        setNFAContainerStyles() 
        
    } catch (error) {
        console.error('Failed to place NFA as a sticky footer', error)
    }
}

function setNFAContainerStyles() : void {
    const styles = `
        .nfa-sticky-footer {
            display: none;
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 8em;
            padding: 0.5em;
            background-color: #f5f5f5;
            border-top: 1px solid #d6d6d6;
            border-bottom: 1px solid #d6d6d6; 
            box-sizing: border-box; 
            transition: bottom 450ms ease-in-out;               
        }

        .nfa-sticky-footer.hide {
            bottom: -7.5em;
        }

        .nfa-sticky-footer.hide .nfa-slide-down-btn svg {
            transform: scaleY(-1);
            margin-top: 0.25em;
        }

        @media(min-width: 64em) {
            .nfa-sticky-footer {
                display: block;
            } 
        }
    `
    addNFAStyles(styles, 'nfa-sticky-footer')
}