// school student 在 app 里面引入  因此只有 app 要在 main.js 引入
import App from './App.vue'


// 这些组件最后都归 vm 实例管理 注册

new Vue({
    el: '#root',
    // 在这里写了就不用在 root 容器写了
    template: `<App></App>`,
    components: {
        App,
    }
})

