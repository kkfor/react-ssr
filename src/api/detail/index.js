import ajax from '../ajax'

const url = {
  getCategories: '/category'
}


export default {
  getMenu() {
    return ajax.get(url.getCategories)
  }
}