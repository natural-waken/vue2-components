<template>
    <!-- 组件的结构 template 标签是不参与结构编译的 -->
    <div class="demo">
        <h2>学校名称：{{ schoolName }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="showX">点我 x</button>
    </div>
</template>

<script>
    // 组件交互相关代码（数据，方法等等）
    // 所谓的交互 就是指这个组件包括的 data methods watch computed

    // 完整写法
    // const school = Vue.extend({
    //     data() {
    //         return {
    //             schoolName: '尚硅谷',
    //             address: '北京',
    //         }
    //     },
    //     methods: {
    //         showX() {
    //             console.log(this.x);
    //         }
    //     },
    // })
    // export default school  // 默认暴露


    // 简写  Vue.extend 可以简写
    export default {
        name: 'School',
        data() {
            return {
                schoolName: '尚硅谷',
                address: '北京',
            }
        },
        methods: {
            showX() {
                console.log(this.x);
            }
        },
    }


</script>

<style>
    /* 组件的样式 */
    .demo {
        background-color: orange;
    }
</style>