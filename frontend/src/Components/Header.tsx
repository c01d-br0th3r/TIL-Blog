import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #121212;
  color: #fff;
  padding: 0 3em;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 0 2em;
  }
  font-family: "Noto Sans KR", sans-serif !important;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
`;

const Nick = styled.div`
  font-size: 3.4vw;
  font-weight: 600;
  @media (min-width: 1024px) {
    font-size: 48px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Blue = styled.span`
  color: #0abde3;
`;

const Header: React.FC<{}> = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Nick>
            <Blue>c01d</Blue>-br0th3r.kr
          </Nick>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Header;
