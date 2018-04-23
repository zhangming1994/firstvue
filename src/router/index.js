import Hello from '@/components/first-components.vue'
import About from '@/components/About.vue'
import New from '@/components/HelloWorld.vue'
import Musicians from '@/components/musicians.vue'
import Myfriend from '@/components/my-friend.vue'
import Mall from '@/components/mall.vue'

const routes = [
  // 主页路由
  {path: '/', component: Hello},
  // new路由
  {path: '/new', component: New},
  // about路由
  {path: '/about', component: About},
  // 音乐人路由
  {path: '/musicians', component: Musicians},
  // 商城路由
  {path: '/mall', component: Mall},
  // 朋友路由
  {path: '/myfriend', component: Myfriend}
]

export default routes
