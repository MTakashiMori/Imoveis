<template>
    <v-card class="elevation-7">
        <a><router-link to="/">Go to Home</router-link></a><br>
        <a><router-link to="/about">Go to About</router-link></a>
        <router-view></router-view>
    </v-card>
</template>

<script>
export default {
    name: 'Content'
}
</script>