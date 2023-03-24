import styled from "styled-components";

export const HeaderStyle = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5%;
    background-color: blue;

    h1 {
        color: white;
        font-weight: 800;
    }

    .rightHeader {
        display: flex;
        gap: 2rem;
    }

    a {
        text-decoration: none;
        display: block;
        background-color: purple;
        padding: 15px 30px;
        color: white;
        border-radius: 8px;
    }
`