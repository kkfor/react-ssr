import axios from 'axios'
import config from './config'

const instance = axios.create({
  baseURL: config.baseURL,
  withCredentials: true
}) 

instance.interceptors.request.use(function(req) {
  return req
})
instance.interceptors.response.use(function(res) {
  if(res.status === 200) {
    if(res.data.code === 1) {
      // openNotification({type: 'success', content: res.data.message})
      return res.data
    }
    if(res.data.code === 0) {
      // openNotification({type: 'error', content: res.data.message})
      throw new Error(res.data.message)
    }
  }
}, function(error) {
  if (error.response && error.response.status === 401) {
    // openNotification({type: 'error', content: error.response.data.message})
  }
})

// const openNotification = ({type='open', content}) => {
//   notification[type]({
//     message: '通知',
//     description: content,
//     duration: 2
//   })
// }

// const Ajax = (methods, url, data) => {
//   return new Promise((resolve, reject) => {
//     instance[methods](url, data).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }

export default {
  post(url, data) {
    return new Promise((resolve, reject) => {
      instance.post(url, data).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  put(url, data) {
    return new Promise((resolve, reject) => {
      instance.put(url, data).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  del(url) {
    return new Promise((resolve, reject) => {
      instance.delete(url).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  get(url, params) {
    return new Promise((resolve, reject) => {
      instance.get(url, {
        params: params
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}