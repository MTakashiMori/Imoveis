<template>
    <div>
        <Card title="Ofertas">
            <button @click="mudar">aqui</button>
            <br>
            <div>
                <v-container grid-list-md>

                    <v-layout row wrap>
                        <v-flex v-for="i in 20" :key="`6${i}`" 
                            v-bind:class="[display ? 'xs12' : 'xs4']">
                            <CardContent></CardContent>
                        </v-flex>
                    </v-layout>

                </v-container>

            </div>
            
        </Card>
    </div>
</template>

<script>

import Card from '@/layouts/Card.vue'
import CardContent from '@/layouts/CardContent.vue'

export default {
    name: 'Home',
    data: function() {
        return {
            display: true
        }
    },
    components: {
        Card,
        CardContent
    },
    methods: {
        mudar() {
            this.display = !this.display;
        }
    }
}
</script>

<style>

</style>

