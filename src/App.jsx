import SplitPane from "react-split-pane";
function App() {
  return (
    <div className="h-full">
      <SplitPane split="horizontal" defaultSize={"60%"}>
        <div className="bg-blue-100 h-full w-full">Pane 1</div>
        <div className="bg-red-200 h-full w-full">Pane 2</div>
      </SplitPane>
    </div>
  );
}

export default App;
