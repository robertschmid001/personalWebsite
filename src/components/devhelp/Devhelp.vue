<template>
    <div class="" style="margin: auto;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;max-width: 1250px;" id="">
        <h1 style="color:white;">This is devhelp</h1>
        <div style="display:flex;flex-wrap:wrap;">
            <Category :image="'hello'" :link="'/developper'" :title="'Vidéos'"/>
            <Category :image="'hello'" :link="'#'" :title="'Vidéos'"/>
            <Category :image="'hello'" :link="'#'" :title="'Vidéos'"/>
            <Category :image="'hello'" :link="'#'" :title="'Vidéos'"/>
            <Category :image="'hello'" :link="'#'" :title="'Vidéos'"/>
            <Category :image="'hello'" :link="'#'" :title="'Vidéos'"/>
        </div>
    </div>
</template>
<script>
import Category from './_sub/category.vue'

export default {

    data () {
        return {
        }
    },
    components: {
        Category
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
