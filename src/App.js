import Navbar from "./components/Navbar";
import Home_body from "./components/Home_body";
import Pg2 from "./components/Pg2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Transactions from "./components/Transactions";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/pg2" key="pg2" element={<Pg2 />} />
          <Route
            exact
            path="/"
            key="home"
            element={
              <>
                {" "}
                <Navbar />
                <Home_body /> <Footer />
              </>
            }
          />
          <Route
            exact
            path="/transactions"
            key="transactions"
            element={<Transactions />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
