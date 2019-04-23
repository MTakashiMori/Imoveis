<template>
    <v-card class="elevation-7" id="content">
        <div class="container">
            <h1>{{ title }}</h1>
            <a><router-link to="/">Go to Home</router-link></a><br>
            <a><router-link to="/about">Go to About</router-link></a>
            <router-view></router-view>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'Content',
    data() {
        return {
            title: 'Conteúdo'
        }
    }
}
</script>