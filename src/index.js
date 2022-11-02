import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



document.getElementById("saucygreenscreenmenu").onchange = changeListener;

function changeListener() {
  var value = this.value;
  console.log(value);

  if (value == "mini") {
    document.querySelector(".videoContainer").style.height = "100px";
    document.querySelector(".videoContainer").style.width = "100px";
  }

  if (value == "small") {
    document.querySelector(".videoContainer").style.height = "200px";
    document.querySelector(".videoContainer").style.width = "200px";
  }

  if (value == "medium") {
    document.querySelector(".videoContainer").style.height = "300px";
    document.querySelector(".videoContainer").style.width = "300px";
  }

  if (value == "large") {
    document.querySelector(".videoContainer").style.height = "400px";
    document.querySelector(".videoContainer").style.width = "400px";
  }

  if (value == "xl") {
    document.querySelector(".videoContainer").style.height = "500px";
    document.querySelector(".videoContainer").style.width = "500px";
  }
}