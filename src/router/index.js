import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 手机端路由
const space = resolve => require(['../components/common/space.vue'], resolve);
// const login = resolve => require(['../components/login.vue'], resolve);
const login = resolve => require(['../components/login/login.vue'], resolve);
const newlogin = resolve => require(['../components/login/newlogin.vue'], resolve);
const hot = resolve => require(['../components/login/hot.vue'], resolve);
const wb_main = resolve => require(['../components/mainpages/wb_main.vue'], resolve);
const mainpage = resolve => require(['../components/mainpage.vue'], resolve);
const list = resolve => require(['../components/list.vue'], resolve);
const fileUpload = resolve => require(['../components/file_upload.vue'], resolve);

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return {
      x: 0,
      y: 0
    }
  }
}
export default new Router({
  linkActiveClass: 'active',
  scrollBehavior,
  routes: [{
    path: '/',
    name: 'space',
    component: space
  }, {
    path: '/login',
    component: login,
    children:[
      {path:'/',name:'hot',component:hot}
    ]
  },{
    path:'/newlogin',
    name:'newlogin',
    component:newlogin
  },{
    path:'/wb_main',
    name:'wb_main',
    component:wb_main
  },{
    path:'/mainpage',
    // name:'mainpage',
    component:mainpage,
    children:[
      {
        path:'/list',
        name:'list',
        component:list
      },{
        path:'/fileUpload',
        name:'fileUpload',
        component:fileUpload
      }
    ]
  }]
})
