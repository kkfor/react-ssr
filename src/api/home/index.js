import ajax from '../ajax'

const url = {
  getArts: '/aricle',
  getCategories: '/category'
}


export default {
  getArts() {
    return ajax.get(url.getArts)
  },
  getCategories() {
    return ajax.get(url.getCategories)
  }
}