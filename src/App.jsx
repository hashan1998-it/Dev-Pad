import { Editor } from "@monaco-editor/react";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import CodePreview from "./Components/CodePreview";
import TabBar from "./Components/TabBar";
import NoMobileVersion from "./Components/NoMobileVersion";

function App() {
  let [html, setHtml] = useState("");
  let [css, setCss] = useState("");
  let [js, setJs] = useState("");
  let [srcDoc, setSrcDoc] = useState("");

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
      <div className="hidden md:grid grid-cols-8 grid-rows-10 h-screen w-screen overflow-hidden">
      
        <div className="col-span-8">
          <Navbar />
          <TabBar />
        </div>


        <div className="col-span-8 row-span-4 row-start-2 h-full">
          <div className="grid grid-cols-3 h-5/6">
            <div >
              <Editor
                height="100%"
                language="html"
                value={html}
                onChange={setHtml}
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
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <CodePreview srcDoc={srcDoc} />
        </div>
      </div>
    </div>
  );
}

export default App;
