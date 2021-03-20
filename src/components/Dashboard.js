import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Dashboard = () => {
    return (
        <DashboardContainer>
            <Header />
        </DashboardContainer>
    )
};

export default Dashboard;

const DashboardContainer = styled.div`
    width: 85%;
    height: 85%;
    background-color: rgba(255, 255, 255, .2);
    //opacity: 20%;
    border: 2px solid ;
    border-color: #dd6e80 #dd6e80 #866993 #866993;
    border-radius: 15px;
`;