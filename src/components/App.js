import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import "../styles/App.css"

import Footer from "./Common/Footer";
import Header from "./Common/Header";
import AboutUs from "./AboutUs/AboutUs";
import FAQ from "./FAQ/FAQ";
import Regpage from "./Registration/Regpage";



function App() {
    return (
      
        <div className="wrapper">
            
            <Header />

            <Switch>

                <Route path="/faq">
                    <FAQ/>
                </Route>

                <Route path="/reg">
                    <Regpage/>
                </Route>
                
                <Route exact path="/">
                    <AboutUs/>
                </Route>

            </Switch>

            <Route exact path="/"> 
                <Footer />
            </Route>

            <Route exact path="/faq"> 
                <Footer />
            </Route>
            
            

            
        </div>
      
  );
}

export default App;