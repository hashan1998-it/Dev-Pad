import { Editor } from "@monaco-editor/react";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import CodePreview from "./Components/CodePreview";
import TabBar from "./Components/TabBar";

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
    <div className="grid grid-cols-8 grid-rows-10 h-screen w-screen">
      <div className="col-span-8 row-span-1">
        <Navbar />
        <TabBar />
      </div>
      <div className="col-span-8 row-span-5 row-start-2">
        <div className="grid grid-cols-3 sm:h-1/2">
          <div>
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
              className="hidden sm:block"
            />
          </div>

          <div>
            <Editor
              height="100%"
              defaultLanguage="javascript"
              value={js}
              onChange={setJs}
              className="hidden sm:block"
            />
          </div>
        </div>
      </div>
      <div className="col-span-8 row-span-4 row-start-7">
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <CodePreview srcDoc={srcDoc} />
      </div>
    </div>
  );
}

export default App;
