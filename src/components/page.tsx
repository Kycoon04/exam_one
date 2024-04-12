const handleSubmit = () => {
  open("https://gemini.google.com/app");
}
export const text = "Hello, world!"
function page() {
  return (
    <>
      <h1>Ai</h1>
      <div className="card">
        <button onClick={handleSubmit}>
          Click me
        </button>
      </div>
    </>
  )
}

export default page