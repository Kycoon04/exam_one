function handleElementPresence() {
    chrome.storage.local.get(["key", "Agent"]).then((result) => {
        const { key, Agent } = result;
        if (Agent === "Gemini") {
            const div = document.querySelector("rich-textarea .ql-editor");
            if (div) {
                div.innerHTML = `<p>${key}</p>`;
            }
        }
        if (Agent === "ChatGPT") {
            setTimeout(() => {
                const textarea = document.querySelector("#prompt-textarea");
                if (textarea) {
                    textarea.value = key;
                }
            }, 1000);
        }
    });
    chrome.storage.local.remove(["key", "Agent"]);
}

function handleElementPresenceClick() {
    const button = document.querySelector(".send-button-container button");
    const clickEvent = new Event('click', {
        bubbles: true,
        cancelable: true
    });
    button.dispatchEvent(clickEvent);
}

const observer = new MutationObserver(() => {
    if (document.querySelector("#prompt-textarea") || document.querySelector("rich-textarea .ql-editor")) {
        observer.disconnect();
        handleElementPresence();

    }
});

observer.observe(document.documentElement, { childList: true, subtree: true });
