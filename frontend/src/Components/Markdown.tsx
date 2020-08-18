import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const InlineCode = styled.span`
  background-color: #dfdfdf;
  padding: 3px 5px;
  border-radius: 5px;
  display: inline-block;
  margin: 3px 0;
  font-family: "Fira Code", monospace;
  font-size: 14px;
  color: #0984e3;
  font-weight: 500;
`;

const BlockQuote = styled.div`
  padding: 10px 20px;
  border-left: 5px solid #0984e3;
  background-color: #f2f2f2;
`;

const InlineCodeBlock: React.FC<{ value: string }> = ({ value }) => (
  <InlineCode>{value}</InlineCode>
);

const BlockQuoteBlock: React.FC<{}> = ({ children }) => (
  <BlockQuote>{children}</BlockQuote>
);

const CodeBlock: React.FC<{ language: string; value: string }> = ({
  language,
  value,
}) => (
  <SyntaxHighlighter language={language} style={tomorrow}>
    {value}
  </SyntaxHighlighter>
);

const Markdown: React.FC<{ source: string }> = ({ source }) => (
  <ReactMarkdown
    source={source}
    renderers={{
      code: CodeBlock,
      inlineCode: InlineCodeBlock,
      blockquote: BlockQuoteBlock,
    }}
  />
);

export default Markdown;
