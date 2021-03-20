import React from 'react';
import styled from 'styled-components';

import AppsIcon from '@material-ui/icons/Apps';
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined';
import DnsOutlinedIcon from '@material-ui/icons/DnsOutlined';

import { Avatar } from '@material-ui/core';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

//import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
//import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
//import SpeedOutlinedIcon from '@material-ui/icons/SpeedOutlined';
//import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <AppSvgContainer>
                    <AppsIcon />
                </AppSvgContainer>
                <GtdLogoContainer>
                    <DoneOutlineOutlinedIcon />
                    <p>GTG</p>
                </GtdLogoContainer>
            </HeaderLeft>
            <HeaderCenter>
                <ProjectBoardHeader >
                    <DashboardIcon />
                    <p>Project Board</p>
                </ProjectBoardHeader>                
                <NewProjectHeader>
                    <AddToPhotosOutlinedIcon />
                    <p>New Project</p>
                </NewProjectHeader>
                <ProjectListHeader>
                    <DnsOutlinedIcon />
                    <p>Project List</p>
                </ProjectListHeader>
            </HeaderCenter>
            <HeaderRight>
                <HeaderAvatar />
                <NameContainerHeader>
                    <h3>Justin Smith</h3>
                    <p>React Developer</p>
                </NameContainerHeader>
                <ExpandMoreOutlinedIcon />
            </HeaderRight>
        </HeaderContainer>
    )
};

export default Header;

const HeaderContainer = styled.div`
    width: 100%;
    height: 7%;
    background-color: rgba(52, 6, 94, 1);
    color: white;
    font-weight: 600;
    border-radius: 15px 15px 0 0;
    display: flex;
    //justify-content: space-between;
`;

const HeaderLeft = styled.div`
    display: flex;
    flex: 0.25;

    > p {
        display: flex;
        align-items: center;
        margin-left: 1rem;
    }
    
`;

const GtdLogoContainer = styled.div`
    display: flex;
    align-items: center;
    
    > .MuiSvgIcon-root {
        font-size: 1.3rem;
        margin: 0 0.1rem 0 0.5rem;
    }
`;

const AppSvgContainer = styled.div`
    border-radius: 15px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    background-color: rgba(76, 31, 105, 1);


    > .MuiSvgIcon-root {
        font-size: 2rem;
    }
`;
const HeaderCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: .5;
    color: rgba(155, 138, 197, 1);

    
`;

const ProjectBoardHeader = styled.div`
    display: flex;
    border-right: 1px solid rgba(155, 138, 197, 1);
    padding-right: 3rem;

    > .MuiSvgIcon-root {
        margin-right: 0.5rem;
    }

    :hover {
        opacity: 0.8;
    }
`;

const NewProjectHeader = styled.div`
    display: flex;
    border-right: 1px solid rgba(155, 138, 197, 1);
    padding-right: 3rem;

    > .MuiSvgIcon-root {
        margin-right: 0.5rem;
        margin-left: 3rem;
    }

    :hover {
        opacity: 0.8;
    }
`;

const ProjectListHeader = styled.div`
    display: flex;

    > .MuiSvgIcon-root {
        margin-right: 0.5rem;
        margin-left: 3rem;

    }

    :hover {
        opacity: 0.8;
    }

`;

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    flex: 0.25;
    justify-content: flex-end;
    margin-right: 1rem;
`;

const NameContainerHeader = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;

    > p {
        font-size: 13px;
        color: rgba(155, 138, 197, 1);
    }

    :hover {
        opacity: 0.8;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;