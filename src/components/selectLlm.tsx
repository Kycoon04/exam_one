import base from "../api/base";

const options = {
  Reflection: (key: string, Agent: string) =>
    `Aquí te paso un código por favor analizarlo ${key} y dime que piensas de él y dame el feedback necesario para mejorarlo. ${Agent}`,
  ToolUse: (key: string) => `Investiga y utiliza bases de datos y aplicaciones a las que tengas acceso para poder dar una solución optima para este código: ${key} e implementa la solución en el código proporcionado. Por favor, proporciona el código final que consideres mejor.`,
  Planning: (key: string) =>
    `Primero, necesito que analices el código que te voy a proporcionar. Aquí está el código:  ${key} Después de analizarlo, te pido que selecciones la mejor solución entre las opciones disponibles. probando dichas opciones en el código proporcionado. Por favor, proporciona el código final que consideres mejor.`,
  MultiAgent: (key: string) =>
    `Primeramente necesito que tomen el rol de analista de código y que analicen este código: ${key} después tomaras el rol de programador que implementara soluciones a los problemas encontrados en el codigo. Por favor, cada agente elija la solución que considere más adecuada. Asegúrense de compartir y discutir sus decisiones entre ustedes para llegar a un consenso informado y eficaz.`,
};

const reducer = (LLM: string, key: string, Agent: string): string => {
  const option = options[LLM];
  return option ? option(key, Agent) : key;
};

export const handleSubmit = (LLM: string, Agent: string) => {
  chrome.storage.local.get(["key"]).then((result) => {
    const newKey = reducer(LLM, result.key, Agent);
    chrome.storage.local.set({ key: newKey });

    if (Agent === "ChatGPT") {
      chrome.storage.local.set({ Agent: "ChatGPT" });
      PostAirTable(newKey);
      open("https://chat.openai.com/");
    }
    if (Agent === "Gemini") {
      chrome.storage.local.set({ Agent: "Gemini" });
      PostAirTable(newKey);
      open("https://gemini.google.com/app");
    }
  });
};

const PostAirTable = (consult:string) => {
  base('Objectives').create([
    {
      "fields": {
        "Consulta": consult,
      }
    }
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
  });
}