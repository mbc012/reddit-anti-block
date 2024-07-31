const isReddit = () => {
    return window.location.hostname.includes('reddit.com');
}

const removeItems = () => {
    console.log("[Reddit-Anti-Block] Sweeping for reddit anti-* blocks")

    // Check if page has reddit.com
    if (!isReddit()) {
        return;
    }

    // Check for all desktop blocking modals and remove
    var elements = document.querySelectorAll('[bundlename="desktop_rpl_nsfw_blocking_modal"]');
    elements.forEach(function(element) {
        element.parentNode.removeChild(element);
    });

    // Check for all desktop blocking modals and remove (2)
    var elements = document.querySelectorAll('[bundlename="nsfw_blocking_modal"]');
    elements.forEach(function(element) {
        element.parentNode.removeChild(element);
    });

    // Cont.
    let xpromoElements = document.querySelectorAll('xpromo-nsfw-blocking-modal-desktop');
    xpromoElements.forEach(el => {
        el.remove();
    });

    // Remove overflow and pointerEvent restriction from body
    var body = document.querySelector('body.v2');
    if (body && body.style.pointerEvents === 'none' && body.style.overflow === 'hidden') {
        body.style = "";
    }

    // Remove blue from presentation div
    var pres = document.querySelectorAll("div[role='presentation']");
    pres.forEach(element => {
        var computedStyle = window.getComputedStyle(element);
        if (computedStyle.filter.includes('blur')) {
            element.style.filter = '';
        }
    });


}

setInterval(removeItems, 2000);
