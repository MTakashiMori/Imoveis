<template>
  <v-app>
    <Header/>
      <div class="container">
        <Content/>
      </div>
    <Footer/>
    
  </v-app>
</template>

<script>
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
import Content from '@/layouts/Content.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Content
  },
  data () {
    return {
      //
    }
  }
}
</script>
