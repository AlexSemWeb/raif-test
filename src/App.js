import React from 'react';
import  Index  from "./views/Index";
import { Body } from "vienna-ui";

const style = {
    position: 'relative',
    color: '#2b2d33',
    boxSizing: 'border-box',
    maxWidth: '964px',
    margin: 'auto'
}

export default function App() {
  return (
      <div style={style}>
          <Body>
              <Index />
          </Body>
      </div>
  );
}
