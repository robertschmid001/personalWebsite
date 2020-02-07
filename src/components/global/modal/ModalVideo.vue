<template>
    <div id="modal-video">
        <div class="modal-v-inner">
            <div @click="close" class="closebtn">&times;</div>

            <div class="inner-wrp video">
                <div style="width: 700px;height: 470px;">
                        <iframe width="100%" height="100%" :src="aItem.image" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="inner-wrp">
                <h1>{{aItem.title}}</h1>
            </div>
            <div class="inner-wrp">
                <div style="display:flex;flex-direction:row;flex-wrap:wrap;font-size:1.2rem;" ><div style="border:white 2px solid;border-radius:6px;margin:0 5px;padding:5px 10px;" v-for="(item, index) in aItem.motsclefs" :key="index" >{{item}}</div></div>
            </div>
            <div class="inner-wrp">
                <p>{{aItem.text}}</p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'modalVideo',
  props: {
      aItem: Object
  },
  components: {
  },
  methods: {
      close () {
          this.$emit('close')
      }
  },
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#modal-video {
width: 100%;
position: absolute;
height: 100%;
top:30%;
background-color: rgba(24, 31, 38,0.9);
    .modal-v-inner {
        position: relative;
        display:flex;
        flex-direction:column;
        margin: 0 auto;
        max-width: 1500px;
        padding: 60px;
        color:white;
        border-radius: 6px;
        border: white 2px solid;
        width:90%;
        background-color:#181f26;
                        .video {
                    background-color:black;
                }
        .closebtn {
            position:absolute;
            right: 20px;
            top: 5px;
            font-size:40px;
            color:white;
            cursor:pointer;
        }
        .inner-wrp {
            display:flex;
            justify-content:center;
                font-size: 1.5rem;

        }
    }

}
</style>
