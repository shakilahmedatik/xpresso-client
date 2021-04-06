import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { signout, isAuthenticated } from '../auth'
import { itemTotal } from './cartHelpers'
import logo from '../images/logo-round.png'

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: '#ff9900' }
  } else {
    return { color: '#ffffff' }
  }
}
const NavigationBar = ({ history }) => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <div className='container'>
        <Navbar.Brand>
          <Link className='nav-link text-light' to='/'>
            <img
              alt=''
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            Espresso Express
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' style={isActive(history, '/')} to='/'>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                className='nav-link'
                style={isActive(history, '/shop')}
                to='/shop'
              >
                Shop
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                className='nav-link'
                style={isActive(history, '/cart')}
                to='/cart'
              >
                <i class='fas fa-shopping-cart'></i>
                <sup>
                  <small className='cart-badge'>{itemTotal()}</small>
                </sup>
              </Link>
            </li>
            <NavDropdown
              bg='dark'
              variant='dark'
              title={<i class='fas fa-user'></i>}
              id='collasible-nav-dropdown'
            >
              <div className='bg-dark'>
                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                  <li className='nav-item'>
                    <Link
                      className='nav-link'
                      style={isActive(history, '/user/dashboard')}
                      to='/user/dashboard'
                    >
                      Dashboard
                    </Link>
                  </li>
                )}

                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                  <li className='nav-item'>
                    <Link
                      className='nav-link'
                      style={isActive(history, '/admin/dashboard')}
                      to='/admin/dashboard'
                    >
                      Dashboard
                    </Link>
                  </li>
                )}

                {!isAuthenticated() && (
                  <>
                    <li className='nav-item'>
                      <Link
                        className='nav-link'
                        style={isActive(history, '/signin')}
                        to='/signin'
                      >
                        Signin
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        className='nav-link'
                        style={isActive(history, '/signup')}
                        to='/signup'
                      >
                        Signup
                      </Link>
                    </li>
                  </>
                )}

                {isAuthenticated() && (
                  <li className='nav-item'>
                    <span
                      className='nav-link'
                      style={{ cursor: 'pointer', color: '#ffffff' }}
                      onClick={() =>
                        signout(() => {
                          history.push('/')
                        })
                      }
                    >
                      <i class='fas fa-sign-out-alt'></i> Logout
                    </span>
                  </li>
                )}
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default withRouter(NavigationBar)
