import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    body {
        background: #d3d3d3;
        color: #333;    

        display: flex;
        justify-content: center;
    }

    main {
        padding: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        input, button {
            border: none;
            outline: none;
            padding: 1rem;
            border-radius: .5rem 0 0 .5rem;
            margin-bottom: 1rem;
        }

        button {
            border-radius: 0 .5rem .5rem 0;
            cursor: pointer;
        }

        .inputs {
            display: flex;
            align-items: center;
        }

        p {
           font-size: 1.2rem;
        }
    }
`;