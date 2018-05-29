<template>
<div class="nav-wrapper">
  <div class="navbar" id="nav-bar" v-scroll="handleScroll">
    <ul>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#carousel-id" v-smooth-scroll>Anchor</a> </li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#footer">FOOTER</a></li>
    </ul>
  </div>
</div>
 <!-- carousel-id -->
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    handleScroll: function (evt) {
      var div = document.getElementById('nav-bar')
      if (window.scrollY > 1084) {
        div.style.position = 'fixed'
        div.style.top = '0'
        div.style.zIndex = '1'
      }
      if (window.scrollY <= 1084) {
        div.style.position = 'relative'
      }
    }
  },
  created () {
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style  lang="scss" scoped>
.nav-wrapper {
  position: relative;
  height: 70px;
  z-index:10;
}
.navbar {
  margin: 0;
  width: 100%;
  opacity: 0.9;
  height: 70px;
  background:rgba(0, 0, 0, 0.3);
}
ul {
  justify-content: center;
  flex-direction: row;
  display:flex;
  padding: 0;
  margin: 0;
}
li {
  margin-top: 19px;
  padding-left: 20px;
  padding-right: 20px;
  list-style-type: none;
  color: white;
  font-size: 25px;
  font-style: oblique;
  font-weight: 800;
}
li:hover {
  opacity: 0.5;
}
@media screen and (max-width: 500px) {
  li {
    margin-top: 25px;
    padding-left: 8px;
    padding-right: 8px;
    list-style-type: none;
    color: white;
    font-weight: 800;
    font-size: 15px;
  }
}
</style>
