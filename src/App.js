import "./App.css";
// <<<<<<< partner
import { Franchise } from "./Components/Partners/Franchise";
import { Partner } from "./Components/Partners/Partner";
import Home from "./Page/HomeComponets/Home";
=======
// import { Partner } from "./Components/Partner";
// import Home from './Page/HomeComponets/Home';
import Offer from "./Page/OfferComponets/Offer";
// >>>>>>> main

function App() {
  return (
    <div className="App">
// <<<<<<< partner
      <Franchise />
      {/* <Partner /> */}
=======
      {/* <Partner /> */}
      {/* <Home/> */}
      <Offer/>
// >>>>>>> main
    </div>
  );
}

export default App;
