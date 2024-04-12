function handleElementPresence() {
    const div = document.querySelector("rich-textarea .ql-editor");
    div.innerHTML = '<p>hola</p>';
}

const observer = new MutationObserver(() => {
    if (document.querySelector("rich-textarea .ql-editor")) {
        observer.disconnect();
        handleElementPresence();
        
        // Agregar event listener al botón
        const sendButton = document.querySelector(".send-button-container button");
        sendButton.addEventListener("click", () => {
            // Aquí puedes realizar las acciones que desees cuando se presione el botón
            console.log("Se ha presionado el botón");
        });
    }
});

observer.observe(document.documentElement, { childList: true, subtree: true });