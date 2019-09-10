# cms-admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 文件夹结构
静态文件夹
```
src-------common（存放资源文件 fonts image js sass）
      |
      |
      ----components（存放各个功能组件）----HelloWorld-------HelloWorld.vue 
      |                                                  |---XXX.png 等该组件的资源文件
      |
      ----base（公共组件 如MFooter）----MFooter-------MFooter.vue 
      |                                                  |---XXX.png 等该组件的资源文件
      |
      -----api (存放js工具)
      |
      -----router (路由文件夹)-index.js
      |
      -----store (vue-x文件夹)    
``` 

# 路由
### 1 文章列表  
http://localhost:3000/#/index/articlelists
参数type 值 news serviceitem  certitem sample
参数 page 值 当前页 1  2  3  
?type=news&page=1

### 2 内容详情页
http://localhost:3000/#/index/articledetail
参数type 值 news serviceitem  certitem sample
参数 number 值 当前第几条 1  2  3  
?type=news&number=1