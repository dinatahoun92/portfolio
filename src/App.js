import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

import AnimatedCursor from "react-animated-cursor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <AnimatedCursor innerSize={8} outerSize={20} color="41,245,212" /> */}

        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
