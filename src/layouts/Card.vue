<template>
    <v-card class="elevation-7" id="content">
        <h1>{{ title }}</h1>
        <div class="container">
            <slot></slot>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: String
    }
}
</script>
