import { Link } from 'react-router-dom';
import styled from "styled-components";

const HeaderBar = styled.header`
    display: flex;
    justify-content: space-evenly;
    font-size: xx-large;
    font-weight: bold;
    color: black;
    padding: 10px;
`;
const Redirect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 400px;
    height: 70px;
    border-radius: 10px;
    transition: 0.3s ease;
    box-shadow: 0px 12px 28px -7px black;
    :hover {
      background-color: #d6d6d6;
    }
    :active {
      width: 390px;
      height: 67px;
    }
`;

const Header = () => {
  return (
    <div>
      <HeaderBar>
        <Redirect>
          <Link to="/">Cadastro</Link>
        </Redirect>
        <Redirect>
          <Link to="/listaCadastros">Lista de Cadastros</Link>
        </Redirect>
      </HeaderBar>
    </div>
  );
};

export default Header;