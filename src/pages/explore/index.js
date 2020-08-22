import React from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom';
import { Carousel } from '../../components/Carrossel';
import Categories from '../../components/Categories';

export default function Explore() {
    return (
        <>
            <Header></Header>
            <Carousel></Carousel>
            <Categories></Categories>
        </>
    )
}
