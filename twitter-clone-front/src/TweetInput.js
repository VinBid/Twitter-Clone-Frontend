import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`;

const Input = styled.input`
    flex: 1;
    padding: 1rem; // Increase padding
    border: none;
    border-radius: 10px; // Decrease border radius
    margin-right: 1rem;
    outline: none;
    font-size: 1rem;
    background-color: #e8f5fe; // Change background color
    width: 80%; // Set a specific width
    max-width: 500px; // Set a maximum width
`;

const Button = styled.button`
    background-color: #1da1f2;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0d95e8;
    }
`;


const TweetInput = ({ onNewTweet }) => {
    const [newTweet, setNewTweet] = useState('');

    const handleInputChange = (event) => {
        setNewTweet(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onNewTweet(newTweet);
        setNewTweet('');
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Input
                type="text"
                value={newTweet}
                onChange={handleInputChange}
                placeholder="What's happening?"
            />
            <Button type="submit">Tweet</Button>
        </Form>
    );
}
export default TweetInput;