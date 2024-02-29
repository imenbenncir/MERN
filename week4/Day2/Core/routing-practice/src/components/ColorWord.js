
import React from "react";
import { useParams } from "react-router-dom";

const ColorWord = () => {
        const { word = 'hello', textColor = 'black', bgColor = 'white' } = useParams();
        const style = {
        color: textColor,
        backgroundColor: bgColor,
        padding: '10px',
};
return <h1 style={style}>The word is: {word}</h1>;
};

export default ColorWord;
