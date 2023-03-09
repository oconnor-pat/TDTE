import styled, { createGlobalStyle } from "styled-components";
import trivianight2 from "./images/trivianight2.png";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        }

    body {
        background-image: url(${trivianight2});
        background-size: cover;
        image-rendering: optimizeQuality;
        background-position: center center;
        background-repeat: no-repeat;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

        * {
            box-sizing: border-box;
            font-family: 'Roboto+condensed', sans-serif;
        }
          }
        `;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #A020F0;
    }

    .score {
        color: #00FFFF;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: 'Roboto+condensed', sans-serif;
        background-size: 100%;
        font-size: 70px;
        text-align: center;
        margin: 20px;
        color: #A020F0;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #A020F0);
        border: 2px solid #A020F0;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }

    @media only screen and (min-width: 390px) and (max-height: 844px) and (-webkit-device-pixel-ratio: 3) {
        h1 {
            font-size: 25px;
        }

        .start, .next {
            height: 20px;
            margin: 10px 0;
            padding: 0 20px;
        }

        .start {
            max-width: 100px;
        }

        .score {
            font-size: 1rem;
        }
    }
    `;

export const QuestionCardWrapper = styled.div`
    background: ##00FFFF;
    background-color: #333;
    border-radius: 10px;
    border: 2px solid #00FFFF;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;

    .number {
        color: #A020F0;
        }

        .individualquestion {
            color: #FFD700;
            font-size: 1.5rem;
            font-weight: bold;
        }

        .questioncardbutton {
            cursor: pointer;
            user-select: none;
            background: linear-gradient(180deg, #fff, #A020F0);
            border: 2px solid #A020F0;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            height: 40px;
            margin: 20px 0;
            padding: 0 40px;
        }

        @media only screen and (min-width: 390px) and (max-height: 844px) and (-webkit-device-pixel-ratio: 3) {
            .number {
                font-size: 1.0rem;
            }

            .individualquestion {
                font-size: 1.0rem;
                text-align: center;
            }

            .questioncardbutton {
                height: 20px;
                margin: 10px 0;
                padding: 0 20px;
            }
        `;
