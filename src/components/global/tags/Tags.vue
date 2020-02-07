<template>
    <div id="tags">
        <div class="tag-wrapper">
            <div class="tag" v-for="(tag, index) in array" :key="index" @click="sendTag(tag)">{{tag}}</div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'Tags',
  props: {
      array: Array
  },
  components: {
  },
  data () {
    return {
      text: null
    }
  },
  computed: {
  },
  methods: {
      sendTag (v) {
          this.$emit("tag",v)
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#tags {
    display:flex;
    justify-content:center;
    .tag-wrapper {
        flex-direction:row;
        display:flex;
        flex-wrap:wrap;
        width: 80%;
        max-width: 1540px;
        margin: 0 auto;
        justify-content:center;
        .tag {
            border:2px solid white;
            border-radius:25px;
            margin:20px 5px;
            padding:5px 10px;
            color:white;
            min-width:30px;
            transition-duration: 0.3s;
            cursor:pointer;
        }
        .tag:hover {
            border:2px solid #181f26;
            background-color:white;
            color:#181f26;
        }
    }
}
</style>