<template>
<div class="nav-wrapper">
  <div class="navbar" id="nav-bar" v-scroll="handleScroll">
    <ul>
        <li>PROJETS</li>
        <li>SKILLS</li>
        <li>LOISIRS</li>
        <li>FOOTER</li>
    </ul>
  </div>
</div>

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
  height: 70px;
}
.navbar {
  margin: 0;
  width: 100%;
  opacity: 0.9;
  height: 70px;
}
ul {
  justify-content: center;
  flex-direction: row;
  display:flex;
  padding: 0;
  margin: 0;
}
li {
  margin-top: 25px;
  padding-left: 20px;
  padding-right: 20px;
  list-style-type: none;
  color: white;
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
