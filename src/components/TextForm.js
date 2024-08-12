import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here.");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleDownClick = () => {
    // console.log("LowerCase was clicked " + text);
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleClearClick = (event) => {
    let newtext = "Enter your text here.";
    setText(newtext);
  };

  const handleCopy = ()=>{
    console.log("text has been coped");
    var text = document.getElementById("My-Box")
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter Your Text Here."
            id="My-Box"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#0f1e62':'white',color: props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary my-1" onClick={handleUpClick}>
          Convert to upercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary margen my-1" onClick={handleClearClick}>
          Clear
        </button>
        
      </div>

      <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}} >
        <h1>Your text summary.</h1>
        <p>
             {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>
            {0.008 * text.split(" ").length} This much time is requied to read your text in minutes.
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
