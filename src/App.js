import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';
import { Header } from './components';
import HotelsPage from './containers/HotelsPage';

const GlobalStyle = createGlobalStyle`
  html, body, #App {
    width: 100%;
    height: 100%;
    background: #f2f4f7;
  }
`;

const Main = styled.main`
  max-width: 1072px;
  margin: auto;
  padding: 0 20px;
`;

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <>
        <GlobalStyle />
        <div id="App">
          <Header />
          <Main>
            <HotelsPage />
          </Main>
        </div>
      </>
    );
  }
}

export default App;
