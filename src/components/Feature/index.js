import React from 'react';
import {FeatureContainer, FeatureButton} from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
          <h1>Monster of the day!</h1>  
          <p>Monster C, the biggest baddest monster of them all!</p>
          <FeatureButton>Hire Now!</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
