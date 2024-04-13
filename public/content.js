function handleElementPresence() {
    chrome.storage.local.get(["key", "Agent"]).then((result) => {
        const { key, Agent } = result;
        if (Agent === "Gemini") {
            const div = document.querySelector("rich-textarea .ql-editor");
            div.innerHTML = `<p>${key}</p>`;

            let event = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                which: 13,
                keyCode: 13,
              });
            div.dispatchEvent(event);
            let sendButton = document.querySelector('button.send-button[aria-label="Send message"]');
            sendButton.click()
        }
        if (Agent === "ChatGPT") {
            let propmptTextArea = document.getElementById("prompt-textarea");
            propmptTextArea.value = key;

            let fakeInputEvent = new Event('input', { bubbles: true });
            propmptTextArea.dispatchEvent(fakeInputEvent);

            let sendButton = document.querySelector('button.absolute');
            sendButton.click()
        }
    });
    chrome.storage.local.remove(["key", "Agent"]);
}

const observer = new MutationObserver(() => {
    if (document.getElementById("prompt-textarea") || document.querySelector("rich-textarea .ql-editor")) {
        observer.disconnect();
        handleElementPresence();
    }
});

observer.observe(document.documentElement, { childList: true, subtree: true });
