import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const temp_number = 5;
let text = "5?";
if(temp_number > 5) {
  text = "over_5";
} else {
  text = "under_5";
}

const myElement1 = <h1> I Love JSX!</h1>;
const myElement2 = <h1>React is {5 + 5} times better with JSX</h1>;
const myElement3 = <h1>{text}</h1>;
const myElement4 = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
)
const myElement5 = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p> 
  </>
)

const x = 5;
const myElement6 = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>

const myElement7 = <input type="text"></input>
const myElement8 = <h1 className="myclass">Hello World</h1>

const Header = () => {
  return (
    <>
    <h1 style={{color: "red"}}>Hello Style!</h1>
    <p>Add a little style!</p>
    </>
  )
}

const CSSSample = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return(
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
/*
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
root.render(CSSSample());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
