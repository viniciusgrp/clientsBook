import { HeaderStyle } from "./style";
import { Link } from "react-router-dom";

interface IProps {
  buttons: IButtonHeader[];
}

interface IButtonHeader {
  text: string;
  path: string;
}

export const Header = ({ buttons }: IProps) => {
  const clearStorage = () => {
    localStorage.clear();
  };

  return (
    <HeaderStyle>
      <h1>Client's Book</h1>
      <div className="rightHeader">
        {buttons.map((button) =>
          button.text === "Sair" ? (
            <Link
              onClick={clearStorage}
              className="linkHeader"
              to={button.path}
            >
              {button.text}
            </Link>
          ) : (
            <Link className="linkHeader" to={button.path}>
              {button.text}
            </Link>
          )
        )}
      </div>
    </HeaderStyle>
  );
};
