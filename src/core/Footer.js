import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container bottom_border'>
        <div className='row'>
          <div className=' col-sm-4 col-md col-sm-4  col-12 col'>
            <h5 className='headin5_amrc col_white_amrc pt2'>Find us</h5>

            <p className='mb10'>
              We are cups, constantly and quietly being filled. Trick is knowing
              how to tip ourselves over and let the beautiful stuff out.
            </p>
            <p>
              <i className='fa fa-location-arrow'></i> Yangzijin Campus, YZU
            </p>
            <p>
              <i className='fa fa-phone'></i> +8613270560659
            </p>
            <p>
              <i className='fa fa fa-envelope'></i> info@xpresso.com
            </p>
          </div>

          <div className=' col-sm-4 col-md  col-6 col'>
            <h5 className='headin5_amrc col_white_amrc pt2'>Quick links</h5>

            <ul className='footer_ul_amrc'>
              <li>
                <a href='https://sprudge.com/'>Sprudge</a>
              </li>
              <li>
                <a href='http://www.friedcoffee.com/blog/'>Fried Coffee </a>
              </li>
              <li>
                <a href='http://www.coffeegeek.com/'>CoffeeGeek</a>
              </li>
              <li>
                <a href='http://www.jimseven.com/'>Jimseven</a>
              </li>
              <li>
                <a href='https://www.thecoffeecompass.com/'>
                  The Coffee Compass
                </a>
              </li>
              <li>
                <a href='https://www.homegrounds.co/blog/'>Home Grounds</a>
              </li>
            </ul>
          </div>

          <div className=' col-sm-4 col-md  col-6 col'>
            <h5 className='headin5_amrc col_white_amrc pt2'>Quick links</h5>

            <ul className='footer_ul_amrc'>
              <li>
                <a href='https://www.perfectdailygrind.com/'>
                  Perfect Daily Grind
                </a>
              </li>
              <li>
                <a href='https://ineedcoffee.com/'>I Need Coffee</a>
              </li>
              <li>
                <a href='https://www.fivesenses.com.au/blog'>
                  Five Senses Coffee{' '}
                </a>
              </li>
              <li>
                <a href='https://www.homegrounds.co/blog/'>Home Grounds</a>
              </li>
              <li>
                <a href='http://www.coffeedetective.com/'>Coffee Detective</a>
              </li>
              <li>
                <a href='http://www.friedcoffee.com/blog/'>Fried Coffee </a>
              </li>
            </ul>
          </div>

          <div className=' col-sm-4 col-md  col-12 col'>
            <h5 className='headin5_amrc col_white_amrc pt2'>Follow us</h5>

            <ul className='footer_ul2_amrc'>
              <li>
                <a href='https://www.beanground.com/'>
                  <i class='fas fa-rocket fleft padding-right'></i>
                </a>
                <p>
                  Bean Ground is a highly active coffee blog...
                  <a href='https://www.beanground.com/'>Bean Ground</a>
                </p>
              </li>
              <li>
                <a href='https://www.thecoffeeconcierge.net/'>
                  <i class='fas fa-rocket fleft padding-right'></i>
                </a>
                <p>
                  The Coffee Concierge tracks one man's journey...
                  <a href='https://www.thecoffeeconcierge.net/'>
                    The Coffee Concierge
                  </a>
                </p>
              </li>
              <li>
                <a href='http://coffeestylish.com/'>
                  <i className='fas fa-rocket fleft padding-right'></i>{' '}
                </a>
                <p>
                  Coffee Stylish is the blog for you. The blog isn't ...
                  <a href='http://coffeestylish.com/'>Coffee Stylish</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='container'>
        <p className='text-center'>
          Copyright @2021 | Designed With ❤️ by{' '}
          <a href='https://github.com/shakilahmedatik'>Shakil Ahmed Atik</a>
        </p>

        <ul className='social_footer_ul'>
          <li>
            <a href='https://www.facebook.com/shakil.atik15'>
              <i className='fab fa-facebook-f'></i>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/ShakilAhmedAtik'>
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/shakilahmedatik'>
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/__atik_/'>
              <i className='fab fa-instagram'></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
