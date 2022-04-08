import "./App.css";

import Navbar from "./Components/Layout/Navbar";
import { Footer } from "./Components/Layout/Footer";
import { Routing } from "./Routing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
