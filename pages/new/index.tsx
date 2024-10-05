import Header from '@/blocks/Header/Header'
import PagesNavigation from '@/blocks/PagesNavigation/PagesNavigation'
import CollectionNav from '@/blocks/CollectionNav/CollectionNav'
import React from 'react'
import Footer from '@/blocks/Footer/Footer'
import ProductItems from '@/blocks/ProductItems/ProductItems'
import Pagination from '@/blocks/Pagination/Pagination'

export default function New() {
  return (
    <div>
      <Header/>
      <PagesNavigation/>
      <CollectionNav/>
      <ProductItems/>
      <Pagination/>
      <Footer/>
    </div>
  )
}
