import Footer from '@/blocks/Footer/Footer'
import Header from '@/blocks/Header/Header'
import ProductGridItem from '@/blocks/ProductGridItem/ProductGridItem'
import ProductPage from '@/blocks/ProductViewDetail/ProductDetails'
import React from 'react'

export default function index() {
  return (
    <div>
        <Header/>
        <ProductPage/>
        <ProductGridItem/>
        <Footer/> 
    </div>
  )
}
