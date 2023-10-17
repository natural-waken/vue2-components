<template>
    <div>
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生年龄：{{ age }}</h2>
        <button @click="showX">点我 x</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                age: 2,
            }
        },
    }


</script>

<!-- 如果组件没有样式 就不用写 style -->