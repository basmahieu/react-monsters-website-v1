import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
// import { GiMonsteraLeaf } from 'react-icons/fa';
import * as GiIcons from "react-icons/gi";


export const Nav = styled.nav`
background: transparent;
height:80px;
display:flex;
justify-content:center;
font-weight:700;
`;

export const NavLink = styled(Link)`
    color:#28E5B9;
    font-size:2rem;
    transition:0.2s ease-out;
    display:flex;
    align-items:center;
    text-decoration:none;
    cursor:pointer;

    &:hover{
            font-size:2.4rem;
            transition:0.2s ease-out;
            cursor:pointer;
        }

    @media screen and (max-width:400px){
        position:absolute;
        top:10px;
        left:25px;
    }
    `;

    export const NavIcon = styled.div`
        display:block;
        position:absolute;
        top:0;
        right: 0;
        cursor:pointer;
        color:#fff;
        transition:0.2s ease-out;


        &:hover{
            cursor:pointer;
            color:#EF4552;
            transition:0.2s ease-out;

        }

    p{
        transform: translate(-175%, 100%);
        font-weight:bold; 
    }
    `;

    export const Bars = styled(GiIcons.GiMonsteraLeaf)`
    font-size:2rem;
    transform: translate(-50%, -15%);
    `;
