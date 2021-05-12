import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../shared/Layout'
import { getCart } from './cartHelpers'
import Card from './Card'
import Checkout from './Checkout'

const Cart = () => {
  const [items, setItems] = useState([])
  const [run, setRun] = useState(false)

  useEffect(() => {
    setItems(getCart())
  }, [run])

  const showItems = items => {
    return (
      <div>
        <h2>Your cart has {`${items.length}`} items</h2>
        <hr />
        {items.map((product, i) => (
          <Card
            key={i}
            product={product}
            showAddToCartButton={false}
            cartUpdate={true}
            showDscrptn={false}
            showRemoveProductButton={true}
            setRun={setRun}
            run={run}
          />
        ))}
      </div>
    )
  }

  const noItemsMessage = () => (
    <h2>
      <i class='fas fa-shopping-cart'></i> is empty!
      <br />
      <Link to='/shop'>
        Continue shopping..<i className='fas fa-rocket'></i>
      </Link>
    </h2>
  )

  return (
    <Layout
      title='Shopping Cart'
      description='Manage your cart items. Add remove checkout or continue shopping.'
      className='container-fluid'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 col-xl-6 mb-4'>
            {items.length > 0 ? showItems(items) : noItemsMessage()}
          </div>

          <div className='col-12 col-md-6 col-xl-6 mb-5'>
            <h2 className='mb-4'>
              <i class='fas fa-shopping-cart'></i> Summary
            </h2>
            <hr />
            <Checkout products={items} setRun={setRun} run={run} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cart
