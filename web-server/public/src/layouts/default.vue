<template>
    <div>
        <navbar></navbar>
        <hr/>
            <slot/>
        <hr/>
    </div>
</template>

<script>
const navbar = require('../components/navbar.vue')

module.exports = {
    name:'default',
    components:{
        navbar
    }
}
</script>