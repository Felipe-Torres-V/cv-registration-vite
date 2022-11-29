import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
export const Title = styled.h1`
    text-transform: uppercase;
    margin-top: 20px;
    font-size: 50px;
`;

export const CadastroContainer = styled.form`
    display: flex;
    margin: 20px;
    background-color: #ffffff;
    min-height: 500px;
    transition: 0.7s ease;
    box-shadow: 0px 12px 18px -6px black;
    border-radius: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 900px;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const NormalInputs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: #dddddd;
    flex-wrap: wrap;
    border-radius: 10px;
    margin: 20px;
    justify-content: space-evenly;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    border-radius: 5px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    width: 250px;
`;

export const SelectInputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 10px;
    height: 70px;
    background-color: #ffffff;
    border-radius: 5px;
    width: 350px;
    justify-content: space-around;
`;

export const ExpContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #dddddd;
    margin: 10px;
    border-radius: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    width: 500px;
`;

export const Input = styled.input`
    outline: none;
    height: 25px;
    border-radius: 2px;
    border: 0;
    padding: 5px;
    width: 200px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const InputSelect = styled.div`
    display: flex;
    justify-content: center;
`;

export const ExpText = styled.textarea`
    resize: none;
    outline: none;
    border: none;
    padding: 10px;
    width: 400px;
    height: 70px;
    margin: 5px;
`;

export const Submit = styled.button`
    width: 150px;
    height: 40px;
    background-color: transparent;
    color: black;
    background-color: #c2c2c2;
    cursor: pointer;
    margin-bottom: 20px;
    transition: 0.3s ease;
    :active {
        background-color: grey;
    }
`;