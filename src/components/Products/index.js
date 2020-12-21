import React from 'react';
import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductCard,
    ProductInfo,
    ProductImg,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton,
} from './ProductElements';



const Products = ({heading, data}) => {
    return (
        <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((monster, index) => {
                    
                    return (
                    <ProductCard key={index}>
                    <ProductImg src={monster.img} alt={monster.alt} />
                        <ProductInfo>
                                <ProductTitle>{monster.name}</ProductTitle>
                                <ProductDesc>{monster.desc}</ProductDesc>
                                <ProductPrice>{monster.price}</ProductPrice>
                                <ProductButton>{monster.button}</ProductButton>
                            </ProductInfo>
                    </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products
