import "./styles.css";
import Calculadora from "./components/Calculadora";
//import { useState } from "react";
export default function App() {
  //const [result, setResult] = useState([]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Calculadora />
    </div>
  );
}
