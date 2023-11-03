import React from "react";

function CodePreview({srcDoc}) {
  return (
    <iframe
      srcDoc={srcDoc}
      frameBorder="0"
      sandbox="allow-scripts"
      title="code-preview"
      className="w-full h-full"
    ></iframe>
  );
}

export default CodePreview;
