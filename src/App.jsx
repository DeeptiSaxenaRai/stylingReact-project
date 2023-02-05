import "./App.css";
import "./styles/palette.css";
import Employee from "./components/Employee";

function App() {
  return (
    <div className="App">
      <h1>Best Employee of the Year</h1>
      <Employee name="Hilde" imgsrc="..\src\assets\Images\Hilde.avif" />
      <Employee name="John" imgsrc="..\src\assets\Images\John.avif" />
      <Employee name="Anik" imgsrc="..\src\assets\Images\Anik.avif" />
    </div>
  );
}
export default App;
