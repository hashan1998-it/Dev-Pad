import { Editor } from "@monaco-editor/react";
import Navbar from "./Components/Navbar";
import { useContext, useEffect, useState } from "react";
import CodePreview from "./Components/CodePreview";
import NoMobileVersion from "./Components/NoMobileVersion";
import { ThemeContext } from "./Contexts/ThemeContext";
import Drawer from "./Components/Drawer";
import { DrawerContext } from "./Contexts/DrawerContext";
import { StyleMethodContext } from "./Contexts/StyleMethodContext";
import { FullScreenContext } from "./Contexts/FullScreenContext";
import useLocalStorage from "./Hooks/useLocalStorage";
import Favicon from "react-favicon";

function App() {
  const { darkMode } = useContext(ThemeContext);
  const { hidden } = useContext(DrawerContext);
  const { styleMethod } = useContext(StyleMethodContext);
  const { isFullScreen } = useContext(FullScreenContext);

  let [html, setHtml] = useLocalStorage("html", "");
  let [css, setCss] = useLocalStorage("css", "");
  let [js, setJs] = useLocalStorage("js", "");
  let [srcDoc, setSrcDoc] = useState("");
  let content = null;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
      <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${
          styleMethod === "bootstrap"
            ? `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">`
            : "" || styleMethod === "tailwind"
            ? `  <script src="https://cdn.tailwindcss.com"></script>`
            : ""
        }
        <title>Preview</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <style>${css}</style>
        <script>${js}</script>
       ${
         styleMethod === "bootstrap"
           ? `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>`
           : ""
       }
      </body>
    </html>
      `);
    }, 500);
    return () => clearTimeout(timeOut);
  }, [html, css, js, styleMethod, darkMode]);

  if (!isFullScreen) {
    content = (
      <div
        className={`col-span-8 row-span-4 row-start-2 h-full ${
          darkMode ? `bg-[#1E1E1E]` : `bg-white`
        }  `}
      >
        <div className="grid grid-cols-3 py-2 mb-5 gap-10">
          <div className="col-span-1 text-center bg-slate-200 ml-5 font-medium">
            HTML
          </div>
          <div className="col-span-1 text-center bg-slate-200 font-medium">
            CSS
          </div>
          <div className="col-span-1 text-center bg-slate-200 mr-5 font-medium">
            JS
          </div>
        </div>
        <div className="grid grid-cols-3 h-4/6">
          <div>
            <Editor
              height="100%"
              language="html"
              value={html}
              onChange={setHtml}
              theme={darkMode ? "vs-dark" : "vs-light"}
              loading={true}
            />
          </div>
          <div>
            <Editor
              height="100%"
              language="css"
              value={css}
              onChange={setCss}
              loading={true}
              theme={darkMode ? "vs-dark" : "vs-light"}
            />
          </div>
          <div>
            <Editor
              height="100%"
              defaultLanguage="javascript"
              value={js}
              onChange={setJs}
              loading={true}
              theme={darkMode ? "vs-dark" : "vs-light"}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      
      <NoMobileVersion />
      <div
        className={`hidden md:grid grid-cols-8 grid-rows-10 h-screen w-screen overflow-hidden transition-all`}
      >
        <div className="col-span-8 row-span-1 h-full">
          {hidden ? "" : <Drawer />}
          <Navbar />
        </div>
        {content}
        <div
          className={`col-span-8  min-w-0 min-h-0 ${
            isFullScreen
              ? "row-span-6 row-start-2 h-screen"
              : "row-span-5 row-start-6"
          }`}
        >
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <h1
            className={`text-center bg-slate-200 font-medium ${
              isFullScreen ? "" : "hidden"
            }`}
          >
            Preview
          </h1>
          <CodePreview srcDoc={srcDoc} />
        </div>
      </div>
    </div>
  );
}

export default App;
