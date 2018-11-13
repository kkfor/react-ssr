import React, { Component } from 'react'
import styles from './index.scss'
import router from '@/router'
import { Route, Switch } from 'react-router-dom'
import Aside from '@/layout/aside/index.jsx'

class Main extends Component {
  render() {
    return (
      <main className={`container ${styles.main}`}>
        <div className={styles.article}>
          <Switch>
            {
              router.map((item, index) => (
                <Route key={index} path={item.path} component={item.component} exact={item.exact ? item.exact : false}></Route>
              ))
            }
          </Switch>
        </div>
        <Aside />
      </main>
    )
  }
}

export default Main