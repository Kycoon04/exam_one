export default  function agent(handleAgenClick: (value: string) => void) {
    return (
        <div>
        <button id="Gemini">
          <a id="Gemini" onClick={() => handleAgenClick("Gemini")}>Gemini</a>
        </button>
        <button>
          <a id="ChatGPT" onClick={() => handleAgenClick("ChatGPT")}>ChatGPT</a>
        </button>
      </div>
    );
}