// Write your code here
import {Component} from 'react'
import Header from '../Header/index'
import Footer from '../Footer/index'
import Body from '../Body/index'

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    )
  }
}

export default Layout
