import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    margin-top: 20px;
    font-size: 50px;
`;

export const Lista = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  min-width: 0px;
  min-height: 0px;
  background-color: white;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const InfoList = styled.div`
    display: flex;
    justify-content: center;
    background-color: #bdbdbd;
    border-radius: 10px;
    width: 300px;
    margin: 10px;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const InfoName = styled.h3`
    font-size: 26px;
    padding: 0;
    text-transform: capitalize;
`;
export const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    margin: 5px;
    padding: 2px;
    border-radius: 5px;
`;