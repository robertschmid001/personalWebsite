<template>
  <div class="component-wrapper">
    <div class="footer">
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
    width: 100%;
  }
}
</style>
