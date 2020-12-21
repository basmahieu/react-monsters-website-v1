import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalstyles';
import { Hero } from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature/index';
import Footer  from './components/Footer/index';

 

function App() {
  return (
    <Router>
    <GlobalStyle />
      <Hero />
      <Products heading="Choose your Monster" data={productData}/>
      <Feature />
      <Products heading="World domination" data={productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;
