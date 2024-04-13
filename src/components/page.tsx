import Llm from "./llm";
import Agent from "./agent";
import {handleSubmit} from "./selectLlm"

function page() {

  let LLM: string = "Reflection";
  let agent: string = "Gemini";

  function textChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const newValue = e.target.value;
    chrome.storage.local.set({ key: newValue });
  }
  const handleLlmClick = (buttonName: string) => {
    LLM = buttonName;
  }
  const handleAgentClick = (buttonName: string) => {
    agent = buttonName;
  }
  const handleClick = () => {
    handleSubmit(LLM,agent);
  }
  return (
    <>
      <h1>Ai-Extension</h1>
      <p>
        This is a simple extension that allows you to write prompts and Ai generate the solution! using LLM.
      </p>
      {Agent(handleAgentClick)}
      <form id="Form">
        <textarea onChange={(e) => textChange(e)} placeholder="write your prompt here">
        </textarea>
      </form>

      {Llm(handleLlmClick)}
      
      <button id="Submit" onClick={handleClick}>
        <a>Enviar</a>
      </button>
    </>
  )
}

export default page