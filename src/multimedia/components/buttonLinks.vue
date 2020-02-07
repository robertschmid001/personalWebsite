<template>
    <div class="header-img-btn">
            <img :src="image" :alt="content" style="width:200px;">
            <h2>{{content}}</h2>
    </div>
</template>
<script>


export default {
  name: 'buttonLinks',
  props:{
      link:String,
      image:String,
      content:String
  },
  components: {
  },
  data () {
    return {

    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header-img-btn {
margin: 0 30px;
cursor:pointer;
}
h2 {
    text-align: center;
    color:rgb(74, 74, 94);
    margin-top: .5rem;
}
.header-img-btn:hover h2 {
    color:#a2aab1;
}
</style>
