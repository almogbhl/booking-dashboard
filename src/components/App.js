import React, { Component } from "react";
import styled from 'styled-components';
import GlobalStyle from '../styles/global.styles';
import Dashboard from './Dashboard/Dashboard';

export default class App extends Component {
    render() {
        return (
            <Wrapper>
                <GlobalStyle />

                <Dashboard />
            </Wrapper>
        );
    }
}

const Wrapper = styled.div `
    padding: 10rem 12rem 0 12rem;
    width: 100vw;
    height: 100vh;
`
