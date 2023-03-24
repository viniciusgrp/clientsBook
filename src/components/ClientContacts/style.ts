import styled from "styled-components";

export const ClientContactsStyle = styled.div`
    main {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        position: relative;

        .backButton {
            background-color: blue;
            position: absolute;
            left: 50px;
            padding: 10px;
            top: 0px;
        }

        button {
            background-color: purple;
            padding: 15px 30px;
            border: none;
            border-radius: 10px;
        }   

        .clientLi{
            grid-template-columns: 2fr 2fr 1fr  1fr 1fr 1fr;
        }
    }
`