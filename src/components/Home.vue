<template>
    <div>
        <Card>
            <h1>Ofertas</h1>
            <button @click="mudar">aqui</button>
            <br>
            <div>
                <v-layout align-center justify-space-around v-bind:class="[display ? 'column' : 'row']">
                    <CardContent>
                    
                    </CardContent>
                    <br>
                    <CardContent>
                        
                    </CardContent>
                    <br>
                    <CardContent>
                        
                    </CardContent>
                    <br>
                    <CardContent>
                        
                    </CardContent>
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

