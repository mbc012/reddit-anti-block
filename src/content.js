const isReddit = () => {
    return window.location.hostname.includes('reddit.com');
}

const removeItems = () => {
    console.log("[Reddit-Anti-Block] Sweeping for reddit anti-* blocks")

    // Check if page has reddit.com
    if (!isReddit()) {
        return;
    }

    let removeIds = [
        "blocking-modal",
        "nsfw-qr-dialog"
    ];

    let removeTags = [
        "auth-landing-experience-xpromo-cbau-wrapper"
    ];

    for (let removeId of removeIds) {
        let element = document.getElementById(removeId);
        if (element !== null)
            element.remove();
    }

    for (let removeTag of removeTags) {
        let elements = document.getElementsByTagName(removeTag);
        let elementsArray = Array.from(elements);
        for (let element of elementsArray) {
            if (element !== null) {
                element.remove();
            }
        }
    }
}

setInterval(removeItems, 2000);
