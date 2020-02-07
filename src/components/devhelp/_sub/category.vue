<template>
    <div class="" style="width:400px;height:400px;background-color:white;border:1px solid black;" id="">
        <router-link :to="link">
            <label>
                {{title}}
                <image :href="image" />
            </label>
        </router-link>
    </div>
</template>
<script>
export default {
props: {
    image: String,
    link: String,
    title: String
},
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>

    @media (max-width: 980px) {
    }
    @media (max-width: 760px) {
    }
    @media (max-width: 650px) {
    }
    @media (max-width: 482px) {
    }
    @media (max-width: 410px) {
    }
</style>