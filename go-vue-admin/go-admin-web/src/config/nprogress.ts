import nprogress from 'nprogress';
import 'nprogress/nprogress.css'

nprogress.configure({
    easing: 'ease',//动画方式
    speed:500,//递增进度条的速度
    showSpinner: true,//是否加载Icon
    trickleSpeed: 200,//自动递增间隔
    minimum:0.3 //初始化时最小的百分比
})

export default nprogress