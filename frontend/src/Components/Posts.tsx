import React from "react";
import styled from "styled-components";
import { IData } from "../Interfaces";

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
`;

const Card = styled.div`
  width: 100%;
  padding: 1.5em 0;
  border-bottom: 1px solid #c2c2c2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &:nth-child(1) {
    padding-top: 0;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Tags = styled.div`
  display: flex;
`;

const Posts: React.FC<IDataProps> = ({ data }) => {
  return (
    <Container>
      <List>
        {data.map((d) => (
          <Card key={d.id}>
            <img src={d.thumbnail} />
            <Info>
              <div>{d.title}</div>
              <div>{d.summary}</div>
              <Tags>
                {d.tags.split(" ").map((t, index) => (
                  <div key={index}>{t}</div>
                ))}
              </Tags>
            </Info>
          </Card>
        ))}
      </List>
    </Container>
  );
};

export default Posts;
