import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from "./Header";


const QuizDragDrop = () => {

    

    return (
        <>
        <Header />
        <QuizTitle>Drag and Drop!</QuizTitle>

        <QuizContainer id="quizContainer">

            
        </QuizContainer>
        </>
    )
};

const QuizContainer = styled.section`
    height: 33vw;
    width: 65%;
    margin: auto;
    margin-top: 3%;
    margin-bottom: 3%;
    border: solid darkblue;
    border-width: .5vw;
    border-radius: 2vw;
`;

const QuizTitle = styled.h1`
    color: darkblue;
    font-size: 3vw;
    height: 4vw;
    margin: auto;
    margin-top: 1%;
    margin-bottom: 2vw;
    padding-top: .5vw;
    text-align: center;
    width: 50%;
`





export default QuizDragDrop;