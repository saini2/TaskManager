// React Imports
import React from "react";
import { withRouter } from "react-router-dom";
import Router from "../routes/routes";
import { ToastContainer } from "react-toastify";

// Stylesheet Imports
import "../commonstyles/common.scss";
import "react-toastify/dist/ReactToastify.css";


class App extends React.Component {
  componentDidMount() {
    const tomorrow = new Date();
    const date = tomorrow.setDate(tomorrow.getDate() + 1);

    
    const todayDate = new Date().getTime()
    //set data in starting 
    let data =[{
          "id":1,
          "name": "Auto Chess",
          "region": "US",
          "createdOn": 1559807714999,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap" 
        },
       {
        "id":2,
          "name": "PUBG MOBILE",
          "region": "US",
          "createdOn": 1559807714999,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap2" 
        },
        {
          "id":3,
          "name": "FLOW FREE",
          "region": "US",
          "createdOn": 1559807714999,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap3" 
        },
        {
          "id":4,
          "name": "Garena Free Fire...",
          "region": "US",
          "createdOn": 1559807714999,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap4" 
        },
        {
          "id":5,
          "name": "MORTAL KOMBAT",
          "region": "US",
          "createdOn": 1559807714999,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap5" 
        },
        {
          "id":6,
          "name": "Summoners War",
          "region": "US",
          "createdOn": 1559807714999,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap6" 
        },
        {
          "id":7,
          "name": "Need for Speed No Limits",
          "region": "US",
          "createdOn": 1559807714999,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap7" 
        },
        {
          "id":8,
          "name": "Shodow Fight 3",
          "region": "US",
          "createdOn": 1559806711124,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap8" 
        },
        {
          "id":9,
          "name": "Shodow Fight 3",
          "region": "US",
          "createdOn": todayDate,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap8" 
        },
        {
          "id":10,
          "name": "Need for Speed No Limits",
          "region": "US",
          "createdOn": todayDate,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap7" 
        },
        {
          "id":11,
          "name": "MORTAL KOMBAT",
          "region": "US",
          "createdOn": todayDate,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap5" 
        },
        {
          "id":12,
          "name": "Garena Free Fire...",
          "region": "US",
          "createdOn": todayDate,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap4" 
        },
        {
          "id":13,
          "name": "FLOW FREE",
          "region": "US",
          "createdOn": todayDate,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap3" 
        },
        {
          "id":14,
          "name": "Auto Chess",
          "region": "US",
          "createdOn": date,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap" 
        },
       {
        "id":15,
          "name": "PUBG MOBILE",
          "region": "US",
          "createdOn": date,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap2" 
        },
        {
          "id":16,
          "name": "FLOW FREE",
          "region": "US",
          "createdOn": date,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap3" 
        },
        {
          "id":17,
          "name": "Garena Free Fire...",
          "region": "US",
          "createdOn": date,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap4" 
        },
        {
          "id":18,
          "name": "MORTAL KOMBAT",
          "region": "US",
          "createdOn": date,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap5" 
        },
        {
          "id":19,
          "name": "Summoners War",
          "region": "US",
          "createdOn": date,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap6" 
        },
        {
          "id":20,
          "name": "Need for Speed No Limits",
          "region": "US",
          "createdOn": date,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap7" 
        },
        {
          "id":21,
          "name": "Shodow Fight 3",
          "region": "US",
          "createdOn": date,
          "price": {month:100,halfYear:500,year:900},
          "csv": "",
          "report": "",
          "image_url":"bitmap8" 
        },
      ]
    let currentList = JSON.parse(localStorage.getItem('data') ? localStorage.getItem('data') : null);
    if(currentList === null){
      localStorage.setItem('data', JSON.stringify(data));
    }
  }

  render() {
    return (
      <div className="App">
        <ToastContainer autoClose={3000} />
        <Router />
      </div>
    );
  }
}

export default withRouter(App);
