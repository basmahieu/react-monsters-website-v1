import React from 'react';
import Navbar from '../Navbar';
import { HeroContainer, HeroContent,  HeroItems, HeroH1, HeroP, HeroBtn,  } from './HeroElements';

export const Hero = () => {
    return (
        <HeroContainer>
           <Navbar />
           <HeroContent>
               <HeroItems>
                   <HeroH1>Scary Monsters!</HeroH1>
                   <HeroP>Fighting for World Domination</HeroP>
                   <HeroBtn>Dominate Now!</HeroBtn>
               </HeroItems>
           </HeroContent>
        </HeroContainer>
    );
};


