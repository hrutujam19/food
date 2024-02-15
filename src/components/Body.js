
// import { Fragment } from "react";
import Cardcontainer from "./Cardcontainer";
import Footer from "./Footer.js";
import React from "react";
const Body =()=>{
    console.log("react",React);
    return(
        <React.Fragment>
        <Cardcontainer/>
        <Footer/>
        </React.Fragment>
    );
}
export default Body;
