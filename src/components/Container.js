import React from 'react';
import styled from 'styled-components';
import Dashboard from './Dashboard';

const Container = () => {
    return (
        <BackgroundContainer>
            <Dashboard></Dashboard>
        </BackgroundContainer>
    )
};

export default Container;


const BackgroundContainer = styled.div`
    background: radial-gradient(farthest-corner at 100% 25%, #6d2766 , #34065E 40%);
    height: 100vh;
    background-position: right;
    display: flex;
    align-items: center;
    justify-content: center;
`;