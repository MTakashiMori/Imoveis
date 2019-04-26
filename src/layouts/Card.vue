<template>
    <v-card class="elevation-7" id="content">
        <div class="container">
            <div id="cardHeader">
                <h1>{{ title }}</h1>
                <v-btn style="float: right;" icon>
                    <v-icon>list</v-icon>
                </v-btn>
            </div>
            
        </div>
        <slot></slot>
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

<style>
    #cardHeader h1{
        display: inline;
    }
</style>
