// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            onToggleShowContent,
            onToggleShowRightNavbar,
            onToggleShowLeftNavbar,
          } = value
          return (
            <div className="bg-container">
              <h1 className="config-heading">Layout</h1>
              <div className="config-container">
                <div>
                  <input
                    type="checkbox"
                    id="content"
                    onChange={onToggleShowContent}
                  />
                  <label htmlFor="content" className="label">
                    Content
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="leftnavbar"
                    onChange={onToggleShowLeftNavbar}
                  />
                  <label htmlFor="leftnavbar" className="label">
                    Left Navbar
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="rightnavbar"
                    onChange={onToggleShowRightNavbar}
                  />
                  <label htmlFor="rightnavbar" className="label">
                    Right Navbar
                  </label>
                </div>
              </div>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
