import React, { useState, useEffect } from 'react'
import { getProducts } from './apiCore'
import Card from './Card'
import Search from './Search'
import Footer from './Footer'
import slide1 from '../images/bg1.jpg'
import NavigationBar from './NavigationBar'

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([])
  const [productsByArrival, setProductsByArrival] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState({
    loading: false,
  })

  const showLoading = loading =>
    loading && (
      <div className='container'>
        <div className='row justify-content-center'>
          <div class='spinner-border' role='status'>
            <span class='sr-only'>Loading...</span>
          </div>
        </div>
      </div>
    )

  const loadProductsBySell = () => {
    getProducts('sold').then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setLoading(true)
        setProductsBySell(data)
        setLoading(false)
      }
    })
  }

  const loadProductsByArrival = () => {
    getProducts('createdAt').then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setLoading(true)
        setProductsByArrival(data)
        setLoading(false)
      }
    })
  }

  useEffect(() => {
    loadProductsByArrival()
    loadProductsBySell()
  }, [])

  return (
    <div>
      <NavigationBar />

      <div
        style={{
          backgroundImage: `url(${slide1})`,
          backgroundSize: 'cover',
          backgroundPosition: ' center',
          backgroundRepeat: 'no-repeat',
          height: '305px',
        }}
        className='container-fluid mb-5'
      ></div>
      <div className='container mb-4'>
        <div style={{ marginTop: '-220px' }} class='row'>
          <Search />
        </div>

        <h2 className='mb-4'>NEW ARRIVALS</h2>
        {showLoading(loading)}
        <div className='row'>
          {productsByArrival.map((product, i) => (
            <div key={i} className='col-12 col-md-6 col-xl-3 mb-3'>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className='container mb-5'>
        <h2 className='mb-4'>BEST SELLER</h2>
        {showLoading(loading)}
        <div className='row'>
          {productsBySell.map((product, i) => (
            <div key={i} className='col-12 col-md-6 col-xl-3 mb-3'>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
