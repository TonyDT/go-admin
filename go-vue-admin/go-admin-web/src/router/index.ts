//1.导入vue-router 模块
import {createRouter,createWebHashHistory} from 'vue-router'
//2.定义一些路由地址,每个都需要映射一个组件
const routes =[{
    path:'/',
    name:'Login',
    meta:{title:'后台管理系统-登录'},
    component: () => import('../views/Login.vue'),
}]
//3.创建路由实例并传递'routes'配置
const router = createRouter({
    history:createWebHashHistory(),
    routes:routes
})
export default router