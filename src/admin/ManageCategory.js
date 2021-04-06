import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout'
import { isAuthenticated } from '../auth'
import { Link } from 'react-router-dom'
import { getCategories, deleteCategory } from './apiAdmin'

const ManageCategory = () => {
  const [categories, setCategories] = useState([])

  const { user, token } = isAuthenticated()

  const loadCategories = () => {
    getCategories().then(data => {
      if (data.error) {
        console.log(data.error)
      } else {
        setCategories(data)
      }
    })
  }

  const destroy = categoryId => {
    deleteCategory(categoryId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error)
      } else {
        loadCategories()
      }
    })
  }

  useEffect(() => {
    loadCategories()
  }, [])

  return (
    <Layout
      title='Manage Categories'
      description='Perform CRUD on Categories'
      className='container-fluid'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='text-center'>
              Total {categories.length} Categories
            </h2>
            <hr />
            <ul className='list-group'>
              {categories.map((p, i) => (
                <li
                  key={i}
                  className='list-group-item d-flex justify-content-between align-items-center'
                >
                  <strong>{p.name}</strong>
                  <Link to={`/admin/category/update/${p._id}`}>
                    <span className='badge badge-warning badge-pill'>
                      Update
                    </span>
                  </Link>
                  <span
                    onClick={() => destroy(p._id)}
                    className='badge badge-danger badge-pill'
                  >
                    Delete
                  </span>
                </li>
              ))}
            </ul>
            <br />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ManageCategory
