// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class Body extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showLeftNavbar, showRightNavbar, showContent} = value
          return (
            <div className="body-container">
              <div className="left-container">
                {showLeftNavbar && (
                  <>
                    <h1 className="left-heading">Left Navbar Menu</h1>
                    <ul>
                      <li className="left-text">Item 1</li>
                      <li className="left-text">Item 2</li>
                      <li className="left-text">Item 3</li>
                      <li className="left-text">Item 4</li>
                    </ul>
                  </>
                )}
              </div>
              <div className="content-container">
                {showContent && (
                  <>
                    <h1 className="cn-heading">Content</h1>
                    <p className="desc">
                      Lorem ipsum is based on the layouts. In this website we
                      have mainly used the react context.
                    </p>
                  </>
                )}
              </div>
              <div className="right-container">
                {showRightNavbar && (
                  <>
                    <h1 className="right-heading">Right Navbar</h1>
                    <div className="rt-box-1">
                      <p>Ad 1</p>
                    </div>
                    <div className="rt-box-2">
                      <p>Ad 2</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default Body
