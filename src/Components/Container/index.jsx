import React from "react";
import Title from "../Title";
import Account from "../Account";
import { styled } from "styled-components";
import List from "../List";

const StyleConteiner = styled.div`
  background-color: ${({theme}) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`

const StyleContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Container = () => {
  return (
    <StyleConteiner >
      <Title>Smart Bank</Title>
      <StyleContent>
        <Account />
        <List/>
      </StyleContent>
    </StyleConteiner>
  );
};

export default Container;
