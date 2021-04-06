import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { getProducts } from './apiCore'
import Card from './Card'
import Search from './Search'

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([])
  const [productsByArrival, setProductsByArrival] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false)

  const loadProductsBySell = () => {
    getProducts('sold').then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setProductsBySell(data)
      }
    })
  }

  const loadProductsByArrival = () => {
    getProducts('createdAt').then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setProductsByArrival(data)
      }
    })
  }

  useEffect(() => {
    loadProductsByArrival()
    loadProductsBySell()
  }, [])

  return (
    <Layout
      title='Espresso Express'
      description='A cup of coffee is all you need!'
      className='container-fluid'
    >
      <Search />
      <div className='container mb-4'>
        <h2 className='mb-4'>NEW ARRIVALS</h2>
        <div className='row'>
          {productsByArrival.map((product, i) => (
            <div key={i} className='col-12 col-md-6 col-xl-3 mb-3'>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className='container'>
        <h2 className='mb-4'>BEST SELLER</h2>
        <div className='row'>
          {productsBySell.map((product, i) => (
            <div key={i} className='col-12 col-md-6 col-xl-3 mb-3'>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home
