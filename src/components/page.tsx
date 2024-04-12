function page() {

  const handleSubmit = () => {
    open("https://gemini.google.com/app", "popup", "width=600,height=600");
  }

  function textChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const newValue = e.target.value;
    chrome.storage.local.set({ key: newValue });
  }

  return (
    <>
      <h1>Ai-Extension</h1>
      <p>
        This is a simple extension that allows you to write prompts and Ai generate the solution! using LLM.
      </p>
      <div>
        <button id="Gemini">
          <a id="Gemini">Gemini</a>
        </button>
        <button>
          <a id="ChatGPT">ChatGPT</a>
        </button>
      </div>

      <form id="Form">
        <textarea onChange={(e) => textChange(e)} placeholder="write your prompt here">
        </textarea>
      </form>

      <div>
        <button >
        <a>Reflection</a>
        </button>
        <button >
        <a>Tool use</a>
        </button>
        <button >
        <a>Planning</a>
        </button>
        <button >
        <a>Multi-agent</a>
        </button>
      </div>
        <button id="Submit" onClick={handleSubmit}>
        <a>Enviar</a>
        </button>
    </>
  )
}

export default page