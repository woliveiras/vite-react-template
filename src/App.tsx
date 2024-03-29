import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const baseEnvExample = import.meta.env.VITE_ENV_EXAMPLE_ALL;
const devEnvExample = import.meta.env.VITE_ENV_EXAMPLE_DEV;
const prodEnvExample = import.meta.env.VITE_ENV_EXAMPLE_PROD;

function App() {
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
        <p>{baseEnvExample}</p>
        <p>{devEnvExample ? devEnvExample : prodEnvExample}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
