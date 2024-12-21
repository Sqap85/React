import { useState } from "react"; // React'ten useState hook'unu içe aktarır.
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCounter from "./hooks/useCounter"; // useCounter custom hook'u
import useToggle from "./hooks/useToggle"; // useToggle custom hook'u
import useCopyToClipboard from "./hooks/useCopyToClipboard"; // useCopyToClipboard custom hook'u

function App() {
  // useCounter hook'u: sayma işlevi için
  const { count, increase, decrease } = useCounter();

  // useToggle hook'u: açık/kapalı durumu için
  const { open, change } = useToggle();

  // useCopyToClipboard hook'u: metni kopyalamak için
  const [copied, copy] = useCopyToClipboard("85 is the biggest");

  return (
    <div>
      {/* 1. custom hook(useCounter): Sayacı artırıp azaltır */}
      <div>
        <h3>1. custom hook(useCounter)</h3>
        <div>{count}</div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>

      {/* 2. custom hook(useToggle): Bir öğeyi göster/gizler */}
      <div>
        <h3>2. custom hook(useToggle)</h3>
        {open && (
          <div style={{ width: 100, height: 100, backgroundColor: "red" }}></div>
        )}
        <button onClick={change}>{open ? "Hide" : "Show"}</button>
      </div>

      {/* 3. custom hook(useCopyToClipboard): Metni panoya kopyalar */}
      <div>
        <h3>3. custom hook(useCopyToClipboard)</h3>
        {copied && "Copied"} {/* Kopyalandığında mesaj gösterir */}
        <button onClick={copy}>Copy</button>
        <input type="text" placeholder="try paste" /> 
      </div>
    </div>
  );
}

export default App;