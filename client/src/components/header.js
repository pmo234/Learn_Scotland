import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderOne>
        <H1>
          <A href="/">Learn Scotland</A>
        </H1>
      </HeaderOne>
      <HeaderTwo>
        <UnorderedList>
          <List>
            <A href="/home">Home</A>
          </List>
          <List>
            <A href="/multiplechoice">Multiple Choice Quiz</A>
          </List>
          <List>
            <A href="/singlechoice">Single choice Quiz</A>
          </List>
          <List>
            <A href="/dragndrop">Drap n Drop</A>
          </List>
          <List>
            <A href="/">Forum</A>
          </List>
        </UnorderedList>
      </HeaderTwo>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  height: 6.3vw;
  background-color: darkblue;
`;

const HeaderOne = styled.div`
  float: left;
  height: 100%;
  width: 25%;
`;

const HeaderTwo = styled.div`
  float: left;
  margin-bottom: 0;
  width: 70%;
`;

const H1 = styled.h1`
  color: white;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  font-size: 3vw;
  margin-top: 0;
  padding-top: 5%;
  padding-left: 10%;
`;

const UnorderedList = styled.ul`
  padding-top: 1.9%;
  list-style: none;
`;

const List = styled.li`
  height: 100%;
  font-size: 1.4vw;
  float: left;
  margin-right: 2vw;
`;

const A = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    color: yellow;
  }
  &:active {
    color: green;
  }
`;

export default Header;
