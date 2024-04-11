import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleSubmit = () => {
    // Abrir la ventana
    const ventana = window.open("https://gemini.google.com/app");
    
    // Esperar a que la ventana se cargue completamente
    ventana?.addEventListener("load", () => {
        // Alerta cuando la ventana se ha cargado
        alert("La ventana se ha cargado");
        
        // Acceder al campo de texto después de que la ventana se ha cargado
        const campoTexto = ventana?.document.querySelector('.mat-drawer-container.mat-sidenav-container.mat-drawer-container-explicit-backdrop.ng-star-inserted input') as HTMLInputElement | null;

        // Verificar si se encontró el campo de texto
        if (campoTexto) {
            // Establecer el valor del campo de texto
            campoTexto.value = "Hola";
        } else {
            console.error("No se encontró el campo de texto con la clase especificada.");
        }
    });
}

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleSubmit}>
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
