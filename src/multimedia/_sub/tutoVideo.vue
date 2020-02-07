<template>
  <div class="container-fluid" style="margin:0;padding:0;">
    <Search :array="eachSlide" @hello="myText" />
    <Tags :array="keyWordsComp" @tag="setTag" />
    <div class="row" style="max-width:1600px;margin:50px auto;display:flex;justify-content:center;">
      <div class="card-v" v-for="(item, index) in dataSlides" :key="index">
        <div style="height: 300px;max-width: 600px;">
          <iframe
            width="100%"
            height="100%"
            :src="item.image"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="content-wrapper">
          <h2>{{item.title}}</h2>
          <div style="font-size:20px;">
            <span>{{item.text}}</span>
            <span class="plusinfos" v-on:click="moreDetails(item)">+ plus d'infos</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!dataSlides.length && this.text" class="no-cnt">Oops! Il n' y a pas de vidéos avec ces motsclés :(</div>
    <div v-if="!dataSlides.length && !this.text" class="no-cnt">Oops! Il n' y a pas encore de vidéos dans cette catégorie!</div>
    <MoreInfo v-if="this.showModal" class :aItem="this.activeItem" @close="closeModal()" />
  </div>
</template>
<script>
import Search from "@/components/global/recherche/Recherche.vue";
import MixinSearch from "@/Mixins/MixinSearch";
import MoreInfo from "@/components/global/modal/ModalVideo.vue";
import Tags from "@/components/global/tags/Tags.vue";
import _ from "lodash";

export default {
  name: "tutoVideo",
  props: ["eachSlide", "slideL"],
  mixins: [MixinSearch],
  components: {
    Search,
    MoreInfo,
    Tags
  },
  data() {
    return {
      activeItem: null,
      showModal: false,
      text: null,
      keywords: new Array()
    };
  },
  methods: {
    setTag(v) {
      return (this.text = this.text + " " + v);
    },
    myText(v) {
      return (this.text = v);
    },
    moreDetails(x) {
      this.activeItem = x;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  },
  computed: {
     keyWordsComp() {
      return this.keywords;
    },
    dataSlides() {
      var t = this.text;
      if (!t) {
        return this.eachSlide;
      } else {
        let words = t.split(" ");
        this.keywords = [];
        let input = this.eachSlide.filter(el => {
          let value = words.every(toto => el.motsclefs.includes(toto));
            if (value) {el.motsclefs.every(e => this.keywords.push(e));}
            return value
        });
        this.keywords = _.uniq(this.keywords);
        return input;
      }
    }
  },
  mounted() {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.card-v {
  height: 600px;
  width: 500px;
  color: white;
  margin: 30px 10px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 2px solid #4a4a5e;
  transition-duration: 0.3s;
}
.card-v .content-wrapper {
  width: 100%;
  padding: 30px;
}
.no-cnt {
    font-size: 30px;
    text-align: center;
    color: #4a4a5e;
}
.card-v .content-wrapper .plusinfos {
  border-radius: 25px;
  font-size: 15px;
  margin-left: 10px;
  padding: 5px 10px;
  cursor: pointer;
  border: 2px white solid;
  transition-duration: 0.3s;
}
.card-v .content-wrapper .plusinfos:hover {
  color: #181f26;
  cursor: pointer;
  border: 2px #181f26 solid;
  background-color: white;
}
.card-v:hover {
  border: 2px solid white;
}
</style>
