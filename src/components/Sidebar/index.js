import React from 'react';
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarMenu,
    SidebarLink, 
    SideBtnWrap,
    SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}  >
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Dominate City</SidebarLink>
                <SidebarLink to="/">Dominate Country</SidebarLink>
                <SidebarLink to="/">Dominate World</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Dominate Now!</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar;
