<template>
    <div id="main-multi">
        <div style="display:flex;flex-direction:row;justify-content:space-around;padding:100px 50px; max-width:1600px;margin:auto;">
            <buttonLink :link="'videos'" :class="[this.type =='Javascript' ? 'activeClass' : '', 'buttonLink']" :content="'Javascript'" :image="require('./../assets/icons/javascript.svg')" @click.native="changeType('Javascript')" />
            <buttonLink :link="'videos'" :class="[this.type =='Angular' ? 'activeClass' : '', 'buttonLink']" :content="'Angular'" :image="require('./../assets/icons/angular.svg')" @click.native="changeType('Angular')" />
            <buttonLink :link="'videos'" :class="[this.type =='VueJs' ? 'activeClass' : '', 'buttonLink']" :content="'VueJs'" :image="require('./../assets/icons/vuejs.svg')" @click.native="changeType('VueJs')" />
            <buttonLink :link="'videos'" :class="[this.type =='Html&CSS' ? 'activeClass' : '', 'buttonLink']" :content="'Html&CSS'" :image="require('./../assets/icons/html5.svg')" @click.native="changeType('Html&CSS')" />
        </div>
        <router-view :eachSlide="this.slideDatas" :slideL="this.slidelength"/>
    </div>
</template>
<script>
import buttonLink from './components/buttonLinks.vue'

export default {
  name: 'MultiMain',
  components: {
      buttonLink
  },
  data () {
    return {
        type: 'Javascript',
        slidelength: Number,
        isActive:false
    }
  },
computed: {
    slideDatas() {
        var x = this.$store.state.a.slides;
        const filtered = x.filter(e => {
            return (e.type == this.type)? e : false
        })
        this.slidelength = filtered.length;
        return filtered
    }
},
  methods: {
    changeType (t) {
        this.type = t;
    }
  },
  mounted() {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#main-multi {
    background-color:#181f26;
    min-height:100vh;
}
.buttonLink {
    transition-duration: 0.5s;
}
.activeClass {
    transition-duration: 0.5s;
    transform: scaleY(1.1);
    transform: rotate(10deg);
}
</style>
