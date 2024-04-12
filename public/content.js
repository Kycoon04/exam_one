function handleElementPresence() {
    chrome.storage.local.get(["key"]).then((result) => {
        const div = document.querySelector("rich-textarea .ql-editor");
        div.innerHTML = `<p>${result.key}</p>`;
    });
}
function handleElementPresenceClick() {
    const button = document.querySelector(".send-button-container button");
    button.click();
}

const observer = new MutationObserver(() => {
    if (document.querySelector("rich-textarea .ql-editor")) {
        observer.disconnect();
        handleElementPresence();
        handleElementPresenceClick();
    }
});

observer.observe(document.documentElement, { childList: true, subtree: true });
