import Home from '@/views/home/index.jsx'
import Detail from '@/views/detail/index.jsx'

const route = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/category/:label',
    component: Home
  },
  {
    path: '/article/:id',
    component: Detail
  }
]

export default route