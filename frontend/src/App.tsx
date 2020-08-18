import React, { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

interface IData {
  id: number;
  title: string;
  content: string;
  summary: string;
}

const App: React.FC<{}> = () => {
  // XSS Shield
  const sanitizer = DOMPurify.sanitize;
  const [data, setData] = useState<null | IData[]>(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:8000/api/");
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
          {data.map((d) => (
            <div key={d.id}>
              <div>Title: {d.title}</div>
              <div
                dangerouslySetInnerHTML={{ __html: sanitizer(d.summary) }}
              ></div>
              <div
                dangerouslySetInnerHTML={{ __html: sanitizer(d.content) }}
              ></div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default App;
