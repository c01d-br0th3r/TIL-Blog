import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Posts from "../Components/Posts";
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
  padding: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  font-size: 2em;
  font-family: "Baloo Tamma 2", cursive;
  div {
    display: block;
    border-bottom: 3px solid #c2c2c2;
    padding: 0 0.5em;
  }
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

const Main: React.FC<{}> = () => {
  const [data, setData] = useState<IData[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:8000/api/`);
      setData(data);
    };
    fetchData();
  }, []);
  console.log(data);
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
        <div>Today I Learned</div>
      </TIL>
      {data === null ? (
        <Loader>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </Loader>
      ) : (
        <Posts data={data} />
      )}
    </Wrapper>
  );
};

export default Main;
