
// cú pháp rcc
import React, { Component } from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import ProductLaptop from './ProductLaptop'
import ProductList from './ProductList'
import ProductSp from './ProductSp'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Carousel/>
                <ProductList/>
                <ProductLaptop/>
                <Footer/>
            </div>
        )
    }
}
