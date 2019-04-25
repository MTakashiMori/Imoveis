<template>
    <div>
        <Card>
            <h1>Ofertas</h1>
            <button @click="mudar">aqui</button>
            <br>
            <div>
                    

                <v-layout 
                v-bind:class="[display ? 'column' : 'row']">
                    <v-flex grow>
                           <CardContent></CardContent>
                           <CardContent></CardContent>
                    </v-flex>
                    <!-- <v-flex xs1></v-flex>
                    <br>
                    <v-flex xs3>
                           <CardContent></CardContent>
                    </v-flex>
                    <v-flex xs1></v-flex>
                    <br>
                    <v-flex xs3>
                           <CardContent></CardContent>
                    </v-flex>
                    <br>

                    <br>
                     <v-flex xs3>
                           <CardContent></CardContent>
                    </v-flex>
                    <v-flex xs1></v-flex>
                    <br>
                    <v-flex xs3>
                           <CardContent></CardContent>
                    </v-flex>
                    <v-flex xs1></v-flex>
                    <br>
                    <v-flex xs3>
                           <CardContent></CardContent>
                    </v-flex>
                    <br> -->

                </v-layout>
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

