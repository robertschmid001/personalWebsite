<template>
  <div class="component-wrapper">
    <div class="footer">
      <div class="icons-wrapper">
        <a href="https://www.linkedin.com/in/robert-schmid-7a0a4414a/"><img class="footer-icons" src="./../../../assets/icons/linkedin.svg" alt="" title="Link to my linkedIn profile!"></a>
        <a href="https://github.com/robertschmid001"><img class="footer-icons" src="./../../../assets/icons/github.svg" alt="" title="Link ot my Github!"></a>
        <a href="http://www.doyoubuzz.com/robert-schmid"><img class="footer-icons" src="./../../../assets/icons/cv.png" alt="" title="Link to my online-CV!"></a>
      </div>
      <div class="form">
    <component :is="'Mail'"></component>
      </div>
    </div>
  </div>
</template>
<script>
import Mail from './_subs/Mail.vue'

export default {
  data () {
    return {
      selectedComp: 'Mail'
    }
  },
  components: {
     'Mail': Mail
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.component-wrapper {
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
}
p {
  margin: 0;
}
.footer {
  width: 1250px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .form {
    width: 90%;
  }
}
.footer-icons {
  width: 90%;
  position: relative;
padding-bottom: 5px;
  display: flex;
  justify-content: center;
}
.footer-icons:hover {
  bottom: 2px;
}
.icons-wrapper {
  flex-direction: column;
  display:flex;
  width: 10%;
}
</style>
