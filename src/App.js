import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

function App() {
  return (
    //Provider은 value값을 명시해 주어야만 한다.
    <ColorContext.Provider value={{ color: "red" }}>
      <ColorBox />
    </ColorContext.Provider>
  );
}

export default App;
