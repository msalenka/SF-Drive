import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import "../styles/App.css"

import Footer from "./Common/Footer";
import Header from "./Common/Header";
import AboutUs from "./AboutUs/AboutUs";
import FAQ from "./FAQ/FAQ";



function App() {
    return (
      
        <div className="wrapper">
            
            <Header />

            <Switch>

                <Route path="/faq">
                    <FAQ/>
                </Route>
                
                <Route path="/">
                    <AboutUs/>
                </Route>

            </Switch>
            
            <Footer />

            
        </div>
      
  );
}

export default App;