import React, { useState, useEffect } from "react";
import axios from "axios";
import Markdown from "../Components/Markdown";
import { RouteComponentProps } from "react-router-dom";
import { IData, IMatch } from "../Interfaces";

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
      {data === null ? (
        <div>Loading ... </div>
      ) : (
        <div>
          <div key={data.id}>
            <div>Title: {data.title}</div>
            <Markdown source={data.content} />
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
