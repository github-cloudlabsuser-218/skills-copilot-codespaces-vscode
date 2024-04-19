import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };
};
return (
    <div>
        <textarea value={markdown} onChange={handleMarkdownChange} />
        <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
);
export default MarkdownEditor;

const reversedSentence = markdown.split(' ').reverse().join(' ');
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

const names = markdown.match(/[A-Za-z]+/g);

const namesArray = names.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
console.log(namesArray);