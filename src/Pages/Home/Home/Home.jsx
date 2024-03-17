import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import PopularProducts from '../PopularProducts/PopularProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;