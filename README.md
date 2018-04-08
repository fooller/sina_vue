# sina_vue
vue书写新浪微博
## 配合sina_koa2作为后台可以实现的功能如下
```
      登陆
      注册
      发布
      即将会有图片、视频、文件、表情的存储。。。
```
### 功能展示
![image](https://github.com/fooller/sina_vue/blob/master/src/assets/release.gif ) 
### 写这个页面的目的是什么呢？
```
  node框架koa2的出现，吸引了我的眼球，所以想搞个全栈，练习一下，特此，写了这个难看的页面！！！
```
### vue生态圈
```
  vue-router用到了子路由，进行局部切换切面
  vuex状态管理
  webpack配置(4.0一下我这种配置还可以,4.0以上不好使了)：文件抽离、观察者自动打包等
  使用axios进行http请求，设置拦截器，请求超时，get和post请求等
```

### vue api
```
  watch     观察者
  filters   过滤器
  $refs     操作dom
  class绑定
  过渡动画
  （目前还没有用到比较牛逼的api 比如：render,自定义指令等等！希望可以用到)
  ......
```

### 查看项目
```
  cd /sina_vue
  npm i         初始化node_modles
  npm run dev   启动项目
  如果想要和sina_koa2实现全栈，请把created中的注释代码解开，就可以掉接口了
```
