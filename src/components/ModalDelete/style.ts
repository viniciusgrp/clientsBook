import styled from "styled-components";

export const ModalDeleteStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.3);

    div {
        padding: 50px;
        background-color: white;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        gap: 30px;
        position: relative;

        .closeModal {
            position: absolute;
            top: 1rem;
            right: 30px;
            padding: 10px;
            border-radius: 50%;
            background-color: blue;
        }

        button {
            background-color: red;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 15px 70px;
            cursor: pointer;
        }
    }
`