import "./App.css";
import Header from "./components/Header";
import TextArea from "./components/TextArea";
import Notelists from "./components/NoteLists";

function App() {
  return (
    <div className="App">
      <Header />
      <TextArea />
      <Notelists />
    </div>
  );
}

export default App;
