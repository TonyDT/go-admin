// @ts-ignore
import nprogress from '@/config/nprogress'
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

//路由拦截守卫
router.beforeEach(() => {
    nprogress.start();
    return true;
});

//路由跳转结束
router.afterEach(()=>{
    nprogress.done()
})
// 路由跳转失败
router.onError((error) => {
    nprogress.done();
    console.warn("路由错误",error.message)
})
export default router