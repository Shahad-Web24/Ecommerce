import React from 'react'
import PageHeading from '../Components/PageHeading'
import ShortingArea from '../Components/ShortingArea'
import ShopItem from '../Components/ShopItem'

const Shop = () => {
  return (
    <div>
      <PageHeading heading='Shop' pageName='Shop'/>
      <ShortingArea/>
      <ShopItem/>
    </div>
  )
}

export default Shop
