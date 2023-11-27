import "./App.css";
import About from "./components/About";
import Features from "./components/Features";
import Nav from "./components/Nav";
import { Route, Switch, Redirect } from "react-router-dom";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/features">
          <Features />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
