import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { read, listRelated } from './apiCore'
import Card from './Card'

const Product = props => {
  const [product, setProduct] = useState({})
  const [relatedProduct, setRelatedProduct] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false)

  const loadSingleProduct = productId => {
    read(productId).then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setProduct(data)
        // fetch related products
        listRelated(data._id).then(data => {
          if (data.error) {
            setError(data.error)
          } else {
            setRelatedProduct(data)
          }
        })
      }
    })
  }

  useEffect(() => {
    const productId = props.match.params.productId
    loadSingleProduct(productId)
  }, [props])

  return (
    <Layout
      title={product && product.name}
      description={
        product &&
        product.description &&
        `${product.description.substring(0, 100)}...`
      }
      className='container-fluid'
    >
      <div className='row'>
        <div className='col-12 col--md-8 col--xl-8 mb-4'>
          {product && product.description && (
            <Card
              product={product}
              showDscrptn={true}
              showViewProductButton={false}
            />
          )}
        </div>

        <div className='col-12 col--md-4 col--xl-4'>
          <h4>Related products</h4>
          {relatedProduct.map((p, i) => (
            <div className='mb-3'>
              <Card key={i} product={p} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Product
