/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Layout from '../shared/Layout'
import Card from './Card'
import { getCategories, getFilteredProducts } from './apiCore'
import Checkbox from './Checkbox'
import RadioBox from './RadioBox'
import { prices } from './fixedPrices'

const Shop = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  })
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(false)
  const [limit, setLimit] = useState(6)
  const [skip, setSkip] = useState(0)
  const [size, setSize] = useState(0)
  const [filteredResults, setFilteredResults] = useState([])
  const [loading, setLoading] = useState({
    loading: false,
  })

  const init = () => {
    getCategories().then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setLoading(true)
        setCategories(data)
        setLoading(false)
      }
    })
  }

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

  const loadFilteredResults = newFilters => {
    // console.log(newFilters);
    getFilteredProducts(skip, limit, newFilters).then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setLoading(true)
        setFilteredResults(data.data)
        setSize(data.size)
        setSkip(0)
        setLoading(false)
      }
    })
  }

  const loadMore = () => {
    let toSkip = skip + limit
    // console.log(newFilters);
    getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setFilteredResults([...filteredResults, ...data.data])
        setSize(data.size)
        setSkip(toSkip)
      }
    })
  }

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className='btn btn-warning mb-5'>
          Load more
        </button>
      )
    )
  }

  useEffect(() => {
    init()
    loadFilteredResults(skip, limit, myFilters.filters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleFilters = (filters, filterBy) => {
    // console.log("SHOP", filters, filterBy);
    const newFilters = { ...myFilters }
    newFilters.filters[filterBy] = filters

    if (filterBy === 'price') {
      let priceValues = handlePrice(filters)
      newFilters.filters[filterBy] = priceValues
    }
    loadFilteredResults(myFilters.filters)
    setMyFilters(newFilters)
  }

  const handlePrice = value => {
    const data = prices
    let array = []

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array
      }
    }
    return array
  }

  return (
    <Layout
      title='SHOP'
      description='Search and find food & drinks of your choice'
      className='container-fluid'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-3 col-xl-4 '>
            <div>
              <h4>
                <i class='fas fa-filter'></i> FILTER
              </h4>
              <hr />
            </div>
            <div>
              <h5>By Categories:</h5>
              {showLoading(loading)}
              <ul>
                <Checkbox
                  categories={categories}
                  handleFilters={filters => handleFilters(filters, 'category')}
                />
              </ul>

              <h5>By price:</h5>
              <div>
                <RadioBox
                  prices={prices}
                  handleFilters={filters => handleFilters(filters, 'price')}
                />
              </div>
            </div>
          </div>

          <div className='col-12 col-md-9 col-xl-8'>
            <h2 className='mb-4'>Products</h2>
            {showLoading(loading)}
            <div className='row'>
              {filteredResults.map((product, i) => (
                <div key={i} className='col-12 col-md-6 col-xl-4 mb-3'>
                  <Card product={product} />
                </div>
              ))}
            </div>
            <hr />
            {loadMoreButton()}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Shop
