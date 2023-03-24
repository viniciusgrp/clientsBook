import styled from "styled-components";

export const DashboardStyle = styled.div`
  main {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    button {
        background-color: purple;
        padding: 10px;
        color: white;
        border: none;
        border-radius: 8px;
        margin-bottom: 1rem;
        cursor: pointer;
    }

    .contacts {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    ul {
      list-style: none;
      width: 70%;
      border: 1px solid black;
      border-radius: 8px;

      .noClients { 
        text-align: center;
        margin: 0 auto;
        padding: 5px;
      }

      li {
        display: grid;
        grid-template-columns: 3fr 3fr 1fr 2fr 1fr 1fr 1fr;
        text-align: center;
        border-bottom: 1px solid black;
        padding: 5px;

        p {
            width: 100%;
            border-right: 1px solid black;
        }
        a {
            width: 100%;
            border-right: 1px solid black;
        }
        .contactBook {
            cursor: pointer;
        }
      }
    }
  }
`;
