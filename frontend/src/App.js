import {BrowserRouter, Route, Routes} from "react-router-dom";
import Add from "./pages/Add";
import Shoes from "./pages/Shoes";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shoes />}/>
          <Route path="/add" element={<Add />}/>
          <Route path="/update" element={<Update />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
