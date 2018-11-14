import React, { Component, Fragment } from 'react'
import { Helmet } from "react-helmet"
import { BrowserRouter as Router } from 'react-router-dom'

// import Header from '@/layout/header/index.jsx'
// import Main from '@/layout/main/index.jsx'
// import Footer from '@/layout/footer/index.jsx'

class Root extends Component {
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

let App;
if (process.env.REACT_ENV === "server") {
  // 服务端导出Root组件
  App = Root;
} else {
  App = () => {
    return (
      <Router>
        <Root />
      </Router>
    );
  };
}
export default App;
