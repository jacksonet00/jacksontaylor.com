import React from 'react';
import './App.css'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: papayawhip;
  padding: 3em;
`

const Title = styled.h1`
  color: palevioletred;
`

function App() {
  return (
    <Container>
      <Title>Hello World!</Title>
    </Container>
  );
}

export default App;
