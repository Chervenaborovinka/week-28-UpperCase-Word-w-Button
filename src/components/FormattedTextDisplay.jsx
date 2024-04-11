import React, { useState } from 'react';

const FormattedTextDisplay = () => {
    const [inputText, setInputText] = useState('');
    const [displayText, setDisplayText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }

    const handleButtonClick = () => {
        setDisplayText(inputText.toUpperCase());
    }

    return (
        <div>
            <input type="text" 
            value={inputText} 
            onChange={handleInputChange} 
            />
            <button onClick={handleButtonClick}> Display Text</button>
            <p style={{ textTransform: 'uppercase' }}>{displayText}</p>
        </div>
    );
}

export default FormattedTextDisplay;
