function handleElementPresence(): void {
    chrome.storage.local.get(["key", "Agent"]).then((result) => {
        const { key, Agent } = result;
        if (Agent === "Gemini") {
            const div = document.querySelector<HTMLDivElement>("rich-textarea .ql-editor");
            if (div) {
                div.innerHTML = `<p>${key}</p>`;

                let event = new KeyboardEvent('keydown', {
                    key: 'Enter',
                    code: 'Enter',
                    which: 13,
                    keyCode: 13,
                });
                div.dispatchEvent(event);

                let sendButton = document.querySelector<HTMLButtonElement>('button.send-button[aria-label="Send message"]');
                if (sendButton) {
                    sendButton.click();
                }
            }
        }
        if (Agent === "ChatGPT") {
            let promptTextArea = document.getElementById("prompt-textarea") as HTMLTextAreaElement;
            if (promptTextArea) {
                promptTextArea.value = key;

                let fakeInputEvent = new Event('input', { bubbles: true });
                promptTextArea.dispatchEvent(fakeInputEvent);

                let sendButton = document.querySelector<HTMLButtonElement>('button.absolute');
                if (sendButton) {
                    sendButton.click();
                }
            }
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