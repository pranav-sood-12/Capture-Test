import type { NFAContainersDetails } from "../types";

import { addNFAToStickyFooter } from "./addNFAToStickyFooter";
import { setNFAContainerHeight } from "../utils/setNFAContainerHeight";
import { generateNFA } from "../utils/generateNFA";
import { addNFAStyles } from "../utils/addNFAStyles";

export async function placeNFAsOnWebsite ( containerDetails : NFAContainersDetails[] ) : Promise<void> {

    try {

        for (let item of containerDetails) {
            
            if(item.footer) {
                addNFAToStickyFooter(item.tokenId)
            }

            if(item.containerId) {
                const container = document.getElementById(item.containerId)

                if(container) 
                   embedNFAInContainer(container, item.tokenId)
            }           
         }      
          // apply css styling for all NFA containers
          setNFAContainersStyles(containerDetails)        

    } catch (error) {
        console.error('Failed to place NFAs on your website')
    }
    
}

async function embedNFAInContainer(container: HTMLElement, tokenId: number) : Promise<void> {
     // generate NFA for the token ID passed
     const nfa = await generateNFA(tokenId)

     if(nfa) {
         container.innerHTML = ''
         container.appendChild(nfa)
           
         // set the height of NFA container
         setNFAContainerHeight(container)

         // set th NFA token ID as a data attribute
         container.dataset.tokenId = String(tokenId)
     }
}

function setNFAContainersStyles(containerDetails : NFAContainersDetails[]) : void {
    const containerIds = containerDetails.map((item) => item.containerId);
    const nfaIdSelector = containerIds.map(id => '#' + id ).join(', ')

    const styles = `
        ${nfaIdSelector} {
            width: 100%;
            margin: 1.5em 0;
            padding: 1em;
            background-color: #f5f5f5;
            border-top: 1px solid #d6d6d6;
            border-bottom: 1px solid #d6d6d6; 
            box-sizing: border-box;                
        }
    `

    addNFAStyles(styles, nfaIdSelector)
}