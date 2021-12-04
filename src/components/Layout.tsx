import React from "react";
import styled from "styled-components";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header>
        <h4>Github Live Search</h4>
      </Header>

      <Body>{children}</Body>
    </div>
  );
}

const Body = styled.div``;
const Header = styled.div`
  background-color: #48bfe3;
  display: flex;
  padding: 20px;
  color: white;
`;
