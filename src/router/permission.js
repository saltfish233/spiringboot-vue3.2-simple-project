import store from '@/store'
import router from './index'

const whiltList = ['/login']

router.beforeEach((to, from, next) => {
  console.log(store.getters.token)
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiltList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
