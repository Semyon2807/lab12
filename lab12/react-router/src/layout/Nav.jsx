import React from "react";
import {Link} from "react-router-dom";
import logo from "../img/logo.png";
import calculation from "../img/calculation.png";
import measering from "../img/measering.png";
import classs from "./Nav.module.css"
function Semyon(){
    return(
        <header>
            <div >
                <img className={classs.i0} src={logo} alt="logo"></img>
                <Link className={classs.L} to ="/Services">Services</Link>
                <Link className={classs.L} to ="/Products">Products</Link>
                <Link className={classs.L} to ="/About_us">About_us</Link>
                <Link className={classs.L} to ="/Portfolio">Portfolio</Link>
                <Link className={classs.L} to ="/FAQ">FAQ</Link>
                <Link className={classs.L} to ="/Contacts">Contacts</Link>
                <button className={classs.b1}><img className={classs.i1} src={calculation} alt="calculation"></img></button>
                <button className={classs.b2}><img className={classs.i2} src={measering} alt="measering"></img></button>
            </div>
        </header>
    );
}

export default Semyon;