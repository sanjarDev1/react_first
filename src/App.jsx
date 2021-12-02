import React from "react";
import Card from "./Card";
import './App.css';
import paypal from "./images/PayPal.png";
import ebay from "./images/ebay.png";
import air from "./images/air.png";
import google from "./images/google.png";
import amazon from "./images/amazon.png";
import payme from "./images/payme.png";





class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <Card img={paypal} />
                <Card img={ebay} />
                <Card img={air} />
                <Card img={google} />
                <Card img={amazon} />
                <Card img={payme} />
            </div>
        )
    }
}

export default App;


