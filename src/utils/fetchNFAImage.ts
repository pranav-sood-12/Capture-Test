import { addNFAStyles } from "./addNFAStyles";

export async function fetchNFAImage(tokenId: number): Promise<HTMLImageElement | undefined> {
    
    try {
        const response = await fetch(`http://localhost:1323/nft/embed?type=image&tokenId=${tokenId}`, {
            method: 'GET',
            headers: {
                Accept: 'text/html'
            }
        })

        const nfaSrc = await response.text();

        // form the embed NFA image
        const nfaImage = document.createElement('img')
        nfaImage.src = nfaSrc
        nfaImage.className = "nfa-image"
        setNFAImageStyles()

        return nfaImage
        
    } catch (error) {
        console.error('Failed to generating embed code for NFA', error)
    }
}

function setNFAImageStyles() {
    const styles = `
        .nfa-image {
            width: 100%; 
            height: 100%; 
            object-fit: cover
        }
    `
    addNFAStyles(styles, 'nfa-image')
}

