import { addNFAStyles } from "./addNFAStyles";
import { createCloseButton } from "./createCloseButton";
import { createInfoButton } from "./createInfoButton";
import { fetchNFAImage } from "./fetchNFAImage";


export async function generateNFA (tokenId: number): Promise<HTMLElement | undefined> {

    try {

        // create NF wrapper
        const wrapper = document.createElement('div')
        wrapper.setAttribute('title', 'Ads by Adguin')
        
        // set wrapper styles
        wrapper.className = 'nfa-wrapper'
        setWrapperStyles()
 
        // fetch NFA content
        const nfaImage = await fetchNFAImage(tokenId)  

        if(nfaImage) {
           const closeButton = createCloseButton()
           const infoButton = createInfoButton()
           wrapper.append(infoButton)
           wrapper.append(closeButton)
           wrapper.append(nfaImage)
        }

        return wrapper
        
    } catch (error) {
        console.error('Failed to create NFA', error)
    }

}


function setWrapperStyles() {
    const styles = `
        .nfa-wrapper {
            position: relative; 
            width: fit-content; 
            height: 100%; 
            margin: 0 auto
        }
    `

    addNFAStyles(styles, 'nfa-wrapper')
    
}