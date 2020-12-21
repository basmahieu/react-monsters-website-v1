import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

// index.js will be auto find when imported 

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Monsters</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar;