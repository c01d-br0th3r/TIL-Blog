import React, { useState, useEffect } from "react";
import axios from "axios";
import Markdown from "../Components/Markdown";
import { RouteComponentProps } from "react-router-dom";
import { IData, IMatch } from "../Interfaces";
import Header from "../Components/Header";
import styled from "styled-components";

const Container = styled.div`
  padding: 3em;
  @media (max-width: 768px) {
    padding: 2em;
  }
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
`;

const Title = styled.div`
  margin-bottom: 0.3em;
  font-size: 2.5em;
  font-weight: 600;
`;

const Time = styled.div`
  font-size: 1em;
  opacity: 0.5;
  font-weight: 600;
  margin-bottom: 2em;
`;

const Detail: React.FC<RouteComponentProps<IMatch>> = ({ match }) => {
  const id = match.params.id;
  const [data, setData] = useState<null | IData>(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:8000/api/${id}/`);
      setData(data);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <Header />
      {data === null ? (
        <div>Loading ... </div>
      ) : (
        <Container>
          <Wrapper key={data.id}>
            <Title>{data.title}</Title>
            <Time>
              {data.created_at.slice(0, 10)} {data.created_at.slice(11, 19)}
            </Time>
            <Markdown source={data.content} />
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Detail;
