<template>
    <div class="search">
        <div class="search-inner">
            <input type="text" style="text-align:center;padding-bottom:5px;" placeholder="Rechercher par Mots-clés" v-model="text" @keyup.enter="hello">
        </div>
    </div>
</template>
<script>

export default {
    name: 'Search',
    props: {
        string: String,
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
        hello () {
            this.$emit("hello",this.text.toLowerCase())
            return this.text = ''
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search {
    width:80%;
    max-width:1540px;
    margin:0 auto;
    font-size:20px;
    .search-inner {
        // border-bottom: #4a4a5e 2px solid;
        input {
            border-bottom: #4a4a5e 2px solid;
            border-left:none;
            border-top:none;
            border-right:none;
            width: 100%;
            transition-duration: 0.5s;
        }
        input[type="text"], textarea {
            background-color : rgba(0,0,0,0);
            color:white;
        }
        input[type="text"]:focus {
            // background-color : rgba(0,0,0,1);
            color:white;
            border-bottom: white 2px solid;
            outline: none !important;
        }
    }
    .search-inner:focus {
        // border-bottom:white 2px solid;
    }
}
</style>
