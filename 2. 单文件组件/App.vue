<template>
    <div>
        <School></School>
        <Student></Student>

        <!-- 这种写法在脚手架里不会出错 非脚手架里会出错 -->
        <School/>  
    </div>
</template>

<script>
    // 引入组件
    import School from './School.vue'
    import Student from './Student.vue'

    export default {
        name: 'App',
        components: {
            School: School,
            Student: Student,
        }
    }
</script>

<style>

</style>