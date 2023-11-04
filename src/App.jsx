import { Editor } from "@monaco-editor/react";
import Navbar from "./Components/Navbar";
import { useContext, useEffect, useState } from "react";
import CodePreview from "./Components/CodePreview";
import TabBar from "./Components/TabBar";
import NoMobileVersion from "./Components/NoMobileVersion";
import { ThemeContext } from "./Contexts/ThemeContext";

function App() {
  let [html, setHtml] = useState("");
  let [css, setCss] = useState("");
  let [js, setJs] = useState("");
  let [srcDoc, setSrcDoc] = useState("");

  const {darkMode} = useContext(ThemeContext);




  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
      <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Preview</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <style>${css}</style>
        <script>${js}</script>
      </body>
    </html>
      `);
    }, 500);
    return () => clearTimeout(timeOut);
  }, [html, css, js]);

  return (
    <div>
      <NoMobileVersion />
      <div className={`hidden md:grid grid-cols-8 grid-rows-10 h-screen w-screen overflow-hidden transition-all`}>
        <div className="col-span-8 h-full">
          <Navbar />
        </div>


        <div className={`col-span-8 row-span-4 row-start-2 h-full ${darkMode ? `bg-[#1E1E1E]`:`bg-white` }`}>
        <div className="grid grid-cols-3 py-2 mb-5 gap-10">
        <div className="col-span-1 text-center bg-slate-200 ml-5 font-medium">HTML</div>
        <div className="col-span-1 text-center bg-slate-200 font-medium">CSS</div>
        <div className="col-span-1 text-center bg-slate-200 mr-5 font-medium">JS</div>
      </div>
          <div className="grid grid-cols-3 h-4/6">
          
            <div >
              <Editor
                height="100%"
                language="html"
                value={html}
                onChange={setHtml}
                theme={darkMode ? "vs-dark" : "vs-light"}
          
              />
            </div>
            <div>
              <Editor 
                height="100%"
                language="css"
                value={css}
                onChange={setCss}
           
              />
            </div>
            <div>
              <Editor
                height="100%"
                defaultLanguage="javascript"
                value={js}
                onChange={setJs}
         
              />
            </div>
          </div>
        </div>


        <div className="col-span-8 row-span-5 row-start-6 min-w-0 min-h-0">
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <CodePreview srcDoc={srcDoc} />
        </div>
      </div>
    </div>
  );
}

export default App;
