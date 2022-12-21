import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = (props) => {

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
            <Link to="/">Leaderboards</Link>
          </List>
          <List>
            <Link to="/multiplechoice">Multiple Choice Quiz</Link>
          </List>
          <List>
            <Link to="/mapquiz">Map Quiz</Link>
          </List>
          <List>
            <Link to="/singlechoice">Single choice Quiz</Link>
          </List>
          <List>
            <Link to="/dragndrop">Drag n Drop</Link>
          </List>
          <List>
            <Link to="/forum">Forum</Link>
          </List>
          <h1>user: {props.currUser}</h1>
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
