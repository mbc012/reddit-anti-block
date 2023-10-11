const removeItems = () => {
    let elements = document.querySelectorAll('[style]');
    elements.forEach(el => {
        let style = el.getAttribute('style');
        if (style.includes('pointer-events: none') || style.includes('overflow: hidden') || style.includes('filter: blur(4px)')) {
            el.removeAttribute('style');
        }
    });

    let xpromoElements = document.querySelectorAll('xpromo-nsfw-blocking-modal-desktop');
    xpromoElements.forEach(el => {
        el.remove();
    });
}

setInterval(removeItems, 2000);
