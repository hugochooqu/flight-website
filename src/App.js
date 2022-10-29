import React from "react";
import "./bootstrap.min.css";
import Navigation from "./Components/Navigation/navbar.js";
import "./index.css";
import Content from "./Components/body.js";


function App() {
  return(
      <body>
        <div>
          <Navigation />
          <div className="container-fluid">
           <Content />
          </div>
        </div>
      </body>

       
    // <body>
    //   <div>
    //     <Navigation />
    //     <div className="container-fluid">
    //      <Content />
    //     </div>
        
    //   </div>
    // </body>
       
  )
};

export default App;