<template>
<div class="main">
  <Portrait/>
  <navbar/>
  <presentation/>
  <Hobbies/>
  <Projects/>
  <List/>
  <!-- <Devhelp/> -->
  <!-- <Devhelp/> -->
  <Footer/>
</div>
</template>
<script>
import Portrait from './portrait/Portrait.vue'
import Navbar from './global/nav/Navbar.vue'
import Footer from './global/footer/Footer.vue'
import List from './competences/List.vue'
import Projects from './projects/Projects.vue'
import Hobbies from './hobbies/Hobbies.vue'
import Presentation from './presentation/Presentation.vue'
import Devhelp from './devhelp/DevHelp.vue'

export default {
  name: 'Main',
  components: {
    Devhelp,
    Portrait,
    Navbar,
    Footer,
    List,
    Projects,
    Hobbies,
    Presentation
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  background: linear-gradient(#e66465, #6f15ff);
}
</style>
