import "./App.css";

import Navbar from "./Components/Layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/HomeComponets/Home";
import Offer from "./Page/OfferComponets/Offer";
import { Footer } from "./Components/Layout/Footer";
import { Tariff } from "./Components/Layout/Tariff/Tariff";
import { SearchR } from "./Components/Layout/SearchR.jsx/SearchR";
import { Login } from "./Components/Layout/Login/Login";
import { persistor, store} from "./Redux/store";
import { Provider } from "react-redux";
import { Signup } from "./Components/Layout/Signup/Signup";
import { Profile } from "./Components/Profile/Profile";
import { ProductDetails } from "./Components/Layout/ProductDetails";
import { Confirmed } from "./Components/Layout/Confirmed";
import { Partner } from "./Components/Partners/Partner";
import { Franchise } from "./Components/Partners/Franchise";
import { Woman } from "./Page/WomanComponents/Woman";
import { Terms } from "./Page/TermsComponents/Terms";
import { Privacy } from "./Page/PrivacyComponents/Privacy";
import { Blog } from "./Page/BlogComponents/Blog";
import { User } from "./Page/UserComponents/User";
import { City } from "./Page/CityComponents/City";
import { Summary } from "./Page/SummaryComponents/Summary";
import { Payment } from "./Page/PaymentComponents/Payment";
import { Faq } from "./Page/FaqComponents/Faq";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material";
import { Reach } from "./Page/ReachComponents/Reach";
import { SearchAll } from "./Components/Layout/SearchR.jsx/SearchAll";
import { TariffBook } from "./Page/HomeComponets/TariffBook";
import Form2 from "./Page/HomeComponets/Form2";
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(244, 51, 151);",
      },
      secondary: {
        main: "#1976d2",
      },
    },
    typography: {
      fontFamily: ["regular", "sans-serif"].join(","),
    },
  });

  return (
    <div className="App">
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<Offer />} />


          <Route path="/tariff" element={<Tariff />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<SearchAll />} />
          <Route path="/confirm" element={<Confirmed />} />
          <Route path="/searchR/:id" element={<SearchR />} />
          <Route path="/earnwithus" element={<Partner />} />
          <Route path="/ownafranchise" element={<Franchise />} />
          <Route path="/rbforwomen" element={<Woman />} />
          <Route path="/terms&conditions" element={<Terms />} />
          <Route path="/privacypolicy" element={<Privacy />} />

          <Route path="/form2/:id" element={<TariffBook />} />


          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<User />} />
          <Route path="/reach" element={<Reach />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/tariffBook" element={<TariffBook />} />

          <Route path="/payment" element={<Payment />} />
          <Route path="/city" element={<City />} />
        </Routes>

        <Footer />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
