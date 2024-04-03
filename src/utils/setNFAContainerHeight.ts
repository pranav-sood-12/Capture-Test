export function setNFAContainerHeight(container: HTMLElement) {
    const parent = container.parentElement;

    if(parent) {
        const width = Math.min(parent.offsetWidth * 0.8, 300);
        container.style.height = `${width}px`;
    }
}