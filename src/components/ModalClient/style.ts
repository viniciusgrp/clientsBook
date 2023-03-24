import styled from "styled-components";

export const ModalClientStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
    border-radius: 10px;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .formDiv {
        z-index: 10;
        position: relative;
        padding: 50px;
        width: 50vw;
        background-color: white;
        display: flex;
        justify-content: center;
        border-radius: 10px;
        
        h2 {
            margin: 0 auto;
        }

        .closeModal {
            position: absolute;
            top: 2rem;
            right: 50px;
            border-radius: 50%;
            background-color: red
        }

        form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 5px;

            input {
                margin-bottom: 1rem;
                width: 100%;
                padding: 10px;
                border-radius: 7px;
            }

            button {
                padding: 15px;
                background-color: purple;
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
            }
        }
    }
`