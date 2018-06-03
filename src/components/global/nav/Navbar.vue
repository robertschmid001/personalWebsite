<template>
<div class="nav-wrapper">
  <div class="navbar" id="nav-bar">
      <div class="icons-wrapper" id="icons-wrapper-id">
        <a href="https://www.linkedin.com/in/robert-schmid-7a0a4414a/" target="_blank"><img class="footer-icons" src="./../../../assets/icons/linkedin.svg" alt="" title="Link to my linkedIn profile!"></a>
        <a href="https://github.com/robertschmid001" target="_blank"><img class="footer-icons" src="./../../../assets/icons/github.svg" alt="" title="Link ot my Github!"></a>
        <a href="http://www.doyoubuzz.com/robert-schmid" target="_blank"><img class="footer-icons" src="./../../../assets/icons/cv.png" alt="" title="Link to my online-CV!"></a>
      </div>
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
    // handleScroll: function (evt) {
    //   var div = document.getElementById('nav-bar')
    //   var iconsWrapper = document.getElementById('icons-wrapper-id')
    //   if (window.scrollY > 1084) {
    //     div.style.position = 'fixed'
    //     div.style.top = '0'
    //     div.style.zIndex = '1'
    //     iconsWrapper.style.justifyContent = 'flex-end'
    //   }
    //   if (window.scrollY <= 1084) {
    //     div.style.position = 'relative'
    //     iconsWrapper.style.justifyContent = 'center'
    //   }
    // }
  },
  // created () {
  //   document.addEventListener('scroll', this.handleScroll)
  // },
  // destroyed () {
  //   document.removeEventListener('scroll', this.handleScroll)
  // }
}
</script>

<style  lang="scss" scoped>
.nav-wrapper {
  position: relative;
  height: 300px;
  z-index:10;
}
.navbar {
  margin: 0;
  width: 100%;
  opacity: 1;
  height: 300px;
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
.footer-icons {
  position: relative;
  display: flex;
  justify-content: center;
  height: 55px;
  border-radius: 50%;
  background-color: white;
  border: 4px solid white;
  top: -63px;
}
.footer-icons:hover {
  bottom: 2px;
}
.icons-wrapper {
  width: 100%;
  display:flex;
  height: 100%;
  background-color: white;
  justify-content: flex-end;
}
</style>
