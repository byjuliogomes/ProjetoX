import React from 'react'
import Header from '../../components/Header'
import { Carousel } from '../../components/Carrossel';
import Categories from '../../components/Categories';
import HotDecks from '../../components/HotDecks';
import Footer from '../../components/Footer';
 
const Explore = () => {
    return (
        <>
            <Header login={true}></Header>
            <Carousel></Carousel>
            <Categories></Categories>
            <HotDecks></HotDecks>
            <Footer></Footer>
        </>
    )
}

export default Explore