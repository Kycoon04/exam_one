export  const handleSubmit = (LLM: string, Agent:string) => {
    chrome.storage.local.get(["key"]).then((result) => {
      result.key =
      LLM === "Reflection"
        ? `Aquí te paso un código por favor analizarlo ${result.key} y dime que piensas de él y dame el feedback necesario para mejorarlo. ${Agent}`
        : LLM === "Tool use"
        ? `Inicio_ToolUse_${result.key}_Fin_ToolUse`
        : LLM === "Planning"
        ? `Primero, necesito que analices el código que te voy a proporcionar. Aquí está el código:  ${result.key} Después de analizarlo, te pido que selecciones la mejor solución entre las opciones disponibles. probando dichas opciones en el código proporcionado. Por favor, proporciona el código final que consideres mejor.`
        : LLM === "Multi-agent"
        ? `Primeramente necesito que tomen el rol de analista de código y que analicen este código: ${result.key} después tomaras el rol de programador que implementara soluciones a los problemas encontrados en el codigo. Por favor, cada agente elija la solución que considere más adecuada. Asegúrense de compartir y discutir sus decisiones entre ustedes para llegar a un consenso informado y eficaz.`
        : result.key;

      chrome.storage.local.set({ key: result.key });
    });
    if(Agent === "ChatGPT"){ chrome.storage.local.set({ Agent: "ChatGPT" }); open("https://chat.openai.com/");}
    if(Agent === "Gemini"){ chrome.storage.local.set({ Agent: "Gemini" }); open("https://gemini.google.com/app");}
    
  }