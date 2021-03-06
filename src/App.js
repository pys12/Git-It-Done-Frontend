import React from "react";
import { Route, Switch } from "react-router-dom";
import Index from "./pages/Index/Index";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route component={Home} path="/home" />
        <Route component={Index} path="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
