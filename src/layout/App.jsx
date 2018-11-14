import React, { Component, Fragment } from 'react'
import { Helmet } from "react-helmet";
// import Header from '@/layout/header/index.jsx'
// import Main from '@/layout/main/index.jsx'
// import Footer from '@/layout/footer/index.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    if (process.env.REACT_ENV === 'server') {
      this.props.setHead(Helmet)
    }
  }
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>This is App page</title>
          <meta name="keywords" content="React SSR"></meta>
        </Helmet>
        {/* <Header />
        <Main />
        <Footer /> */}
        <div>56151</div>
      </Fragment>
    )
  }
}

export default App
