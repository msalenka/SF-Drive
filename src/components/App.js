import React from "react";

import "../styles/App.css"
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import Main from "./AboutUs/Main";
import FAQ from "./FAQ/FAQ";


function App() {
    return (
      
        <div className="wrapper">
            
            <Header />
            <Main />
            <FAQ/>
            <Footer />

            


        </div>
      
  );
}

export default App;