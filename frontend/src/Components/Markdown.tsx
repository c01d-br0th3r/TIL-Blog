import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const InlineCode = styled.span`
  background-color: #dfdfdf;
  padding: 2px 5px;
  border-radius: 0.3em;
  display: inline-block;
  margin: 2px 0;
  font-family: "Fira Code", monospace;
  font-size: 1em;
  color: #0984e3;
  font-weight: 500;
`;

const BlockQuote = styled.div`
  padding: 10px 20px;
  border-left: 0.5em solid #0984e3;
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
