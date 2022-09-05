import "./App.css";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import StopWatch from "./components/StopWatch/StopWatch";

function App() {
  return (
    <div className="App">
      <Header />
      <Movies />
      <StopWatch />
    </div>
  );
}

export default App;
