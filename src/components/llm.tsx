export default  function llm(handleButtonClick: (value: string) => void) {
    return (
        <div>
            <button onClick={() => handleButtonClick("Reflection")}>
                <a>Reflection</a>
            </button>
            <button onClick={() => handleButtonClick("Tool use")}>
                <a>Tool use</a>
            </button>
            <button onClick={() => handleButtonClick("Planning")}>
                <a>Planning</a>
            </button>
            <button onClick={() => handleButtonClick("Multi-agent")}>
                <a>Multi-agent</a>
            </button>
        </div>
    );
}