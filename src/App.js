import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route, withRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import Exprience from "./pages/Exprience";
import Error from "./pages/Error";
import Footer from "./components/Footer";
// import ReactGA from "react-ga4";


// ReactGA.isInitialized("G-8BP9YYP0MR")
const App = withRouter(({ location }) => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home title="Rishav Raj" />
        </Route>
        <Route path="/about">
          <About title="About | Rishav Raj" />
        </Route>
        <Route path="/exprience">
          <Exprience title="Exprience | Rishav Raj" />
        </Route>
        <Route path="/project">
          <Project title="Project | Rishav Raj" />
        </Route>
        <Route path="/blog">
          <Blog title="Blog | Rishav Raj" />
        </Route>
        <Route path="*">
          <Error title="Error" />
        </Route>
      </Switch>

      {location.pathname !== "/" && <Footer />}
    </>
  );
});

export default App;
