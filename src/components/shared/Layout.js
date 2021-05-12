import React from 'react'
import '../../styles.css'
import Footer from './footer/Footer'
import NavigationBar from './NavigationBar'

const Layout = ({
  title = 'Title',
  description = 'Description',
  className,
  children,
}) => (
  <div>
    <NavigationBar />
    <div className='jumbotron text-center'>
      <h2>{title}</h2>
      <p className='lead'>{description}</p>
    </div>
    <div className={className}>{children}</div>
    <Footer />
  </div>
)

export default Layout
