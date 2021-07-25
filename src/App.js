import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactUs from "./components/ContactUs/ContactUs";
import AnimatedCursor from "react-animated-cursor";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  // optional configuration
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: "30px",
    transition: transitions.SCALE,
    type: "success",
  };

  return (
    <AlertProvider template={AlertTemplate} {...options}>
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
            <Route path="/contact" exact>
              <ContactUs />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </AlertProvider>
  );
}

export default App;
