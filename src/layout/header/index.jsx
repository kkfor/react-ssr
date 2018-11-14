import React, { Component } from 'react'
import styles from './index.scss'
import { Link } from 'react-router-dom'
// import api from '@/api'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  async componentDidMount() {
    // const res = await api.home.getCategories()
    this.setState({
      categories: res.data
    })
  }

  categoryHandle(id) {
    console.log(id)
  }

  render() {
    const { categories } = this.state
    return (
      <header className={styles.header}>
        <div className={`container`}>
          <nav>
            {
              categories.map((item, index) => (
                <Link key={index} to={`/category/${item.label}`} onClick={this.categoryHandle.bind(this, item._id)}>{item.label}</Link>
              ))
            }
          </nav>
        </div>
      </header>
    )
  }
}

export default Header