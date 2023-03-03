import styled from "styled-components";
import { Link } from "react-router-dom";
import TitleWord from "./TitleWord";

const Header = (props) => {

  return (
    <HeaderContainer className="bg-blue-900 text-blue-50 flex justify-between border-b-2 border-b-blue-300">
      <HeaderOne className="ml-6">
        <H1>
          <TitleWord/>
        </H1>
      </HeaderOne>
      <HeaderTwo className="flex items-center">
        <UnorderedList className="flex flex-row">
          <List>
            <Link className="leader_link" to="/">Leaderboards</Link>
          </List>
          <List>
            <Link className="leader_link" to="/singlechoice">Input Quiz</Link>
          </List>
          <List>
            <Link className="leader_link" to="/multiplechoice">Multi Choice Quiz</Link>
          </List>
          <List>
            <Link className="leader_link" to="/dragndrop">Drag n Drop</Link>
          </List>
          <List>
            <Link className="leader_link" to="/mapquiz">Map Quiz</Link>
          </List>
          <List>
            <Link className="leader_link" to="/forum">Forum</Link>
          </List>
        </UnorderedList>
      </HeaderTwo>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  height: 5vw;
`;

const HeaderOne = styled.div`
  height: 100%;
`;

const HeaderTwo = styled.div`
  margin-bottom: 0;
`;

const H1 = styled.h1`
  colort-bluetext-blue-50;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  font-size: 3vw;
  margin-top: 0;
`;

const UnorderedList = styled.ul`
  list-style: none;
`;

const List = styled.li`
  font-size: 1.4vw;
  margin-right: 2vw;
`;

const A = styled.a`
  colort-bluetext-blue-50;
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
