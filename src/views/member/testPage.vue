<template>
    <div>
        <h1>{{ userInfo.color }}</h1> 색상입니다
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(["userInfo"])
    }
}
</script>
<style lang="">
    
</style>