import React, { useState } from 'react'

export default function Body(props) {

    const [text, setText] = useState("");

    const HandleOnChange = (e) => {
        setText(e.target.value);
        
    }
    const Upper = () => {
        const Utext = text.toUpperCase();
        setText(Utext);
        props.showAlert("Text converted to Uppercase","success")
    }
    const Lower = () => {
        const Ltext = text.toLowerCase();
        setText(Ltext);
        props.showAlert("Text converted to Lowercase !!","success")
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared","success")
        

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard","success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces are removed","success")
    }
    return (
        <>

            <div className='container my-3' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h3 >Enter your Text here</h3>
                <form>
                    <div className="mb-3" >
                        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                        <textarea className="form-control" value={text} onChange={HandleOnChange}
                            style={{
                                backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                                color: props.mode === 'dark' ? 'white' : '#042743'
                            }}
                            id="myBox" rows="4"></textarea>
                    </div>

                    <button type="button" disabled={text.length===0} onClick={Upper} className="btn btn-primary mx-3 my-3">Convert to Uppercase</button>
                    <button type="button" disabled={text.length===0} onClick={Lower} className="btn btn-primary mx-3 my-3">Convert to Lowercase</button>
                    <button type="button" disabled={text.length===0} onClick={handleClearClick} className="btn btn-primary mx-3 my-3">Clear Text</button>
                    <button type="button" disabled={text.length===0} onClick={handleCopy} className="btn btn-primary mx-3 my-3">Copy Text</button>
                    <button type="button" disabled={text.length===0} onClick={handleExtraSpaces} className="btn btn-primary mx-3 my-3">Remove Extra Spaces</button>
                </form>
              
               <hr />
                <h3>Summary of the text</h3>
                <div>Total characters : {text.length}</div>
                <div>Total words : {text.split(/\s+/).filter((e)=>{return e.length!==0}).length}</div>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read </p>
                <hr />
                <h3>Text Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
