import React from "react";
import styled from "styled-components";
import { IData } from "../Interfaces";
import { Link } from "react-router-dom";

interface IDataProps {
  data: IData[];
}

const Container = styled.div`
  background-color: #fff;
  color: #000;
  width: 100%;
  font-family: "Noto Sans KR", sans-serif !important;
  display: flex;
  justify-content: center;
`;

const List = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 3em;
  padding-top: 0;
  @media (max-width: 768px) {
    padding: 2em;
    padding-top: 0;
  }
`;

const Card = styled.div`
  width: 100%;
  padding: 1.5em 0;
  border-bottom: 1px solid #c2c2c2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Tags = styled.div`
  display: flex;
  div {
    margin-right: 0.6em;
  }
`;

const Title = styled.div`
  font-size: 1.4em;
  font-weight: 600;
  padding-top: 0.8em;
`;

const Summary = styled.div`
  font-size: 1em;
  opacity: 0.7;
  padding: 0.7em 0;
`;

const Tag = styled.div`
  font-size: 0.8em;
  font-weight: 500;
  background-color: #d2d2d2;
  border-radius: 5px;
  padding: 0.2em 0.5em;
  color: #1e3799;
`;

const Posts: React.FC<IDataProps> = ({ data }) => {
  return (
    <Container>
      <List>
        {data.map((d) => (
          <Link to={`/posts/${d.id}`} key={d.id}>
            <Card>
              <img src={d.thumbnail} alt="thumbnail" />
              <Info>
                <Title>{d.title}</Title>
                <Summary>{d.summary}</Summary>
                <Tags>
                  {d.tags.split(" ").map((t, index) => (
                    <Tag key={index}>{t}</Tag>
                  ))}
                </Tags>
              </Info>
            </Card>
          </Link>
        ))}
      </List>
    </Container>
  );
};

export default Posts;
