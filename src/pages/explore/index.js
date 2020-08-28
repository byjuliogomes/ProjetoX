import React from 'react'
import Header from '../../components/Header'
import { Carousel } from '../../components/Carrossel';
import Categories from '../../components/Categories';
import HotDecks from '../../components/HotDecks';
import Footer from '../../components/Footer';

export default function Explore() {
    return (
        <>
            <Header></Header>
            <Carousel></Carousel>
            <Categories></Categories>
            <HotDecks></HotDecks>
            <Footer></Footer>
        </>
    )
}
