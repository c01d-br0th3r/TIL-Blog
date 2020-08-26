import React, { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import Posts from "../Components/Posts";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../Store/reducers";
import allActions from "../Store/actions";
import { IData } from "../Interfaces";

const Wrapper = styled.div`
  background-color: #121212;
  color: #f2f2f2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  font-family: "Noto Sans KR", sans-serif !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3em;
  @media (max-width: 768px) {
    padding: 2em;
  }
`;

const Title = styled.span`
  font-size: 8vw;
  font-weight: 700;
  background-color: #555;
  display: inline-block;
  padding: 0 0.2em;
  @media (min-width: 900px) {
    font-size: 72px;
  }
`;

const Nick = styled.div`
  margin-top: 1.5em;
  margin-bottom: 0.3em;
  font-size: 4vw;
  font-weight: 600;
  @media (min-width: 900px) {
    font-size: 36px;
  }
  @media (max-width: 868px) {
    font-size: 24px;
  }
`;

const Info = styled.div`
  font-size: 2vw;
  font-weight: 400;
  margin-bottom: 2.9em;
  @media (min-width: 900px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Heading = styled.span`
  display: inline-block;
  margin-bottom: 0.1em;
  font-size: 6vw;
  background-color: #444;
  padding: 0 0.2em;
  font-weight: 700;
  @media (min-width: 900px) {
    font-size: 54px;
  }
`;

const Blue = styled.span`
  color: #0abde3;
`;

const LightBlue = styled.span`
  color: #7ed6df;
`;
const TIL = styled.div`
  width: 100%;
  padding: 0.5em;
  padding-top: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  font-size: 2em;
  font-family: "Baloo Tamma 2", cursive;
  header {
    display: block;
    padding: 0 0.5em;
  }
  i {
    margin-left: 0.3em;
    font-size: 0.7em;
    color: #fff;
    background-color: #222222;
    padding: 0.5em;
    border-radius: 2em;
    position: relative;
    bottom: 0.2em;
  }
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const TILBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.3em;
`;

const TILSearch = styled.div`
  cursor: pointer;
`;

const Ul = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2em;
`;

const Li = styled.div`
  display: flex;
  margin-right: 1.2em;
  align-items: center;
  i {
    margin-right: 0.4em;
  }
  margin-bottom: 0.4em;
`;

const Loader = styled.div`
  width: 100%;
  text-align: center;
  background-color: #fff;
  color: #000;
  padding: 5em;
`;

const TILWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

const TILInput = styled.div`
  background-color: #fff;
  color: #000;
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  padding: 1em 3em;
  @media (max-width: 768px) {
    padding: 1em 2em;
  }
  padding-top: 0.5em;
`;

const Input = styled.input`
  all: unset;
  font-family: "Noto Sans KR", sans-serif !important;
  border-bottom: 3px solid #d2d2d2;
  font-size: 1.3em;
  padding: 0.2em 0.5em;
  width: 100%;
`;

const Main: React.FC<{}> = () => {
  const [filtered, setFiltered] = useState<IData[]>([]);
  const posts = useSelector((store: RootStore) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.postsActions.fetchData());
  }, []);

  useEffect(() => {
    setFiltered(posts.lists);
  }, [posts.lists]);

  const handleSearchClick = () => {
    const inputDiv = document.querySelector(".search__input") as HTMLDivElement;
    inputDiv.classList.toggle("hide");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let {
      target: { value },
    } = e;
    if (posts.lists.length !== 0) {
      let filtered = posts.lists.filter((post) => post.title.includes(value));
      setFiltered(filtered);
    }
  };

  return (
    <Wrapper>
      <Container>
        <div>
          <Title>코드 좀 칩니다.</Title>
          <br />
          <Title>더 잘 치고 싶습니다.</Title>
          <Nick>
            <Blue>c01d</Blue>-br0th3r
          </Nick>
          <Info>
            <div>세종대학교 컴퓨터공학과 이찬형입니다.</div>
            <div>웹에 관심이 많아 이것저것 만들어보고 있습니다.</div>
            <div>
              보안 공부에 재미를 느껴 취미로 시스템 / 웹 해킹을 공부합니다.
            </div>
            <div>
              누구나 안전하게 사용할 수 있는 웹페이지를 만들고 싶습니다.
            </div>
          </Info>
        </div>
        <div>
          <Heading>
            <LightBlue>FRONT-END</LightBlue> DEVELOPER
          </Heading>
          <Nick>
            <Blue>React</Blue> + Typescript
          </Nick>
          <Info>
            <div>프론트엔드 개발자가 되고 싶습니다.</div>
            <div>
              꾸미는 것이 재밌습니다. 사용자 친화적이고 "예쁜" 웹페이지를
              좋아합니다.
            </div>
            <div>
              React와 Typescript의 매력을 알고 있기 때문에 잘 쓰기 위해
              공부중입니다.
            </div>
          </Info>
        </div>
        <Ul>
          <Li>
            <a href="https://www.instagram.com/c01d_br0th3r/">
              <i className="fab fa-instagram"></i>
              <span>c01d_br0th3r</span>
            </a>
          </Li>
          <Li>
            <a href="https://github.com/c01d-br0th3r">
              <i className="fab fa-github"></i>
              <span>Github</span>
            </a>
          </Li>

          <Li>
            <a href="https://powerco3e-lch.tistory.com/">
              <i className="fas fa-shield-alt"></i>
              <span>Tistory</span>
            </a>
          </Li>
          <Li>
            <a href="https://velog.io/@lchyung1998">
              <i className="fab fa-dev"></i>
              <span>Velog</span>
            </a>
          </Li>
          <Li>
            <i className="fas fa-envelope"></i>
            <div>lchyung1998@gmail.com</div>
          </Li>
        </Ul>
      </Container>
      <TIL>
        <TILBlock>
          <header>Today I Learned</header>
          <TILSearch onClick={handleSearchClick}>
            <i className="fas fa-search"></i>
          </TILSearch>
        </TILBlock>
      </TIL>
      <TILWrapper>
        <TILInput className="search__input hide">
          <Input
            type="text"
            placeholder="검색어를 입력하세요.."
            onChange={handleChange}
          />
        </TILInput>
      </TILWrapper>
      {posts.lists.length === 0 ? (
        <Loader>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </Loader>
      ) : (
        <Posts data={filtered} />
      )}
    </Wrapper>
  );
};

export default Main;
