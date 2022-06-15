import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
