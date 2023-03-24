import styled from "styled-components";

export const LoginStyle = styled.div`
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .login {
        margin-top: 100px;
        width: 50%;
        border: 2px solid gray;
        border-radius: 20px;
        display: flex;
        padding: 30px;
        flex-direction: column;
        align-items: center;

        h2 {
            margin: 2rem 0;
        }

        form {
            width: 80%;
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            
            input {
                padding: 10px 20px;
                border-radius: 8px;
                border: 1px solid black;
            }

            button {
                margin: 1rem 0;
                background-color: purple;
                border-radius: 10px;
                color: white;
                padding: 10px;
            }
        }
    }
    p {
        font-size: 18px;
    }

    .registerLink {
        margin-top: 1rem;
        font-size: 18px;
    }
  }
`;
