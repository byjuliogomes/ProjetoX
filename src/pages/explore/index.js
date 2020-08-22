import React from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom';
import { Carousel } from '../../components/Carrossel';

export default function Explore() {
    return (
        <>
            <Header></Header>
            <Carousel></Carousel>
            <Link to="/categorias">Entre em categorias</Link>
            <Link to="/categorias">Entre em categorias</Link>
        </>
    )
}
