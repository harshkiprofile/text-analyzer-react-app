import React, { useState } from "react";




export default function TextForm() {
    const [Text, setText] = useState('');

    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    const onButtonClick = () => {
        let newText = Text.toUpperCase();
        setText(newText);
    }

    const onButtonClick2 = () => {
        let newText = Text.toLowerCase();
        setText(newText);   
    }

    return (
        <>
            <h1>Enter Text Here to Analyze</h1>
            <div className="form-floating mb-3">

                <textarea className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                    onChange={onChangeHandler}
                    value={Text}>
                </textarea>
                <label htmlFor="floatingTextarea" >Start typing...</label>
            </div>
            <button className="btn btn-primary" onClick={onButtonClick}>Change To Uppercase</button>

            <button className="btn btn-success ms-2" onClick={onButtonClick2}>Change To Lowercase</button>

        </>
    );
}