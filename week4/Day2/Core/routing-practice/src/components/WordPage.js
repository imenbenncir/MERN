
import React from "react";
import { useParams } from "react-router-dom";

const WordPage = () => {
    const { word } = useParams();
    return <h1>The word is: {word ? word : 'hello'}</h1>
};

export default WordPage;
