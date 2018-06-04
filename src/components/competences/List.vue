<template>
<div class="component-wrapper-list" id="wrapper-list">
  <h2>PING MY SKILLS!</h2>
  <div class="competences-wrapper">
      <div class="items-wrapper">
        <div v-for="item in skills" class="item-wrapper">
          <img :src="item.imageUrl" :style="grayscale(item)" v-on:click="itemOnOff(item)" class="icon" :alt="item.title">
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {

  data () {
    return {
      skills: [{
        title: 'Javascript',
        imageUrl: require('./../../assets/icons/javascript.svg'),
        content: 'description1',
        clicked: false,
        sound: require('./../../assets/sounds/1.wav')
      }, {
        title: 'Html5',
        imageUrl: require('./../../assets/icons/html5.svg'),
        content: 'description2',
        clicked: false,
        sound: require('./../../assets/sounds/2.wav')
      }, {
        title: 'Css3',
        imageUrl: require('./../../assets/icons/css3.svg'),
        content: 'description3',
        clicked: false,
        sound: require('./../../assets/sounds/3.wav')
      }, {
        title: 'VueJS',
        imageUrl: require('./../../assets/icons/vuejs.svg'),
        content: 'description4',
        clicked: false,
        sound: require('./../../assets/sounds/4.wav')
      }, {
        title: 'Angular',
        imageUrl: require('./../../assets/icons/angular.svg'),
        content: 'description6',
        clicked: false,
        sound: require('./../../assets/sounds/6.wav')
      }, {
        title: 'Bootstrap',
        imageUrl: require('./../../assets/icons/bootstrap.svg'),
        content: 'description6',
        clicked: false,
        sound: require('./../../assets/sounds/9.wav')
      }, {
        title: 'AdobeLightroom',
        imageUrl: require('./../../assets/icons/adobelightroom.svg'),
        content: 'description6',
        clicked: false,
        sound: require('./../../assets/sounds/10.wav')
      }, {
        title: 'AdobePhotoshop',
        imageUrl: require('./../../assets/icons/adobephotoshop.svg'),
        content: 'description6',
        clicked: false,
        sound: require('./../../assets/sounds/G.wav')
      }, {
        title: 'AdobeIllustrator',
        imageUrl: require('./../../assets/icons/adobeillustrator.svg'),
        content: 'description6',
        clicked: false,
        sound: require('./../../assets/sounds/chat.wav')
      }]
    }
  },
  methods: {
    grayscale (item) {
      if (item.clicked === false) {
        const grayscale = `${'filter'}:${'grayscale(100%)'}`
        return grayscale
      } else {
        const grayscale = `${'filter'}:${'none'}`
        return grayscale
      }
    },
    itemOnOff (item) {
      item.clicked = !item.clicked
      this.playSound(item.sound)
    },
    playSound (sound) {
      if (sound) {
        var audio = new Audio(sound)
        audio.play()
      }
    }
  }
}
</script>
<style lang="scss" scoped>

.component-wrapper-list {
  flex-direction: column;
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 150px;
  h2 {
    font-size: 40px;
    text-align: center;
    color: white;
    font-style: oblique;
  }
  .competences-wrapper {
    margin: auto;
    justify-content: center;
    max-width: 1250px;
    .items-wrapper {
      display: flex;
      flex-wrap: wrap;
      padding: 5%;
      justify-content: center;
      .item-wrapper {
        width: 250px;
        margin: 20px;
        cursor: pointer;
        .icon {
          width: 250px;
          display:flex;
        }
      }
    }
  }
}
@media (max-width: 980px) {
  .component-wrapper-list {
    flex-direction: column;
    padding-top: 150px;
    padding-bottom: 150px;
    display: flex;
    width: 100%;
    justify-content: center;
    .competences-wrapper {
      margin: auto;
      justify-content: center;
      max-width: 1250px;
      .items-wrapper {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        justify-content: center;
        .item-wrapper {
          max-width:200px;
          .icon {
            max-width: 200px;
            display:flex;
          }
        }
      }
    }
  }
}
@media (max-width: 760px) {
  .component-wrapper-list {
    flex-direction: column;
    display: flex;
    width: 100%;
    padding-top: 150px;
    padding-bottom: 150px;
    justify-content: center;
    .competences-wrapper {
      margin: auto;
      justify-content: center;
      max-width: 100%;
      .items-wrapper {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        justify-content: center;
        .item-wrapper {
          max-width:170px;
          .icon {
            max-width: 170px;
            display:flex;
          }
        }
      }
    }
  }
}
@media (max-width: 650px) {
  .component-wrapper-list {
    flex-direction: column;
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 150px;
    padding-bottom: 150px;
    .competences-wrapper {
      margin: auto;
      justify-content: center;
      max-width: 100%;
      .items-wrapper {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        justify-content: center;
        .item-wrapper {
          max-width:117px;
          .icon {
            max-width: 117px;
            display:flex;
          }
        }
      }
    }
  }
}
@media (max-width: 482px) {
  .component-wrapper-list {
    flex-direction: column;
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 150px;
    padding-bottom: 150px;
      h2 {
        font-size: 20px;
      }
    .competences-wrapper {
      margin: auto;
      justify-content: center;
      max-width: 100%;
      .items-wrapper {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        justify-content: center;
        .item-wrapper {
          max-width:90px;
          margin: 15px;
          .icon {
            max-width: 90px;
            display:flex;
          }
        }
      }
    }
  }
}
@media (max-width: 410px) {
  .component-wrapper-list {
    flex-direction: column;
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 150px;
    padding-bottom: 150px;
    .competences-wrapper {
      margin: auto;
      justify-content: center;
      max-width: 100%;
      .items-wrapper {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        justify-content: center;
        .item-wrapper {
          max-width:80px;
          margin: 10px;
          .icon {
            max-width: 80px;
            display:flex;
          }
        }
      }
    }
  }
}
</style>

    //  intervalRandom () {
    //   let interval = setInterval(this.randomizeSound, 2500)
    //   this.randomSound = !this.randomSound
    //   console.log(this.randomSound)
    //   if (this.randomSound === false) {
    //     console.log('in false')
    //     return clearInterval(this.interval)
    //   }
    //   if (this.randomSound === true) {
    //     console.log('in false')
    //     return interval
    //   }
    // },
    // randomizeSound () {
    //   console.log('in randomizeSound')
    //   const sounds = [require('./../../assets/sounds/1.wav'),
    //                   require('./../../assets/sounds/2.wav'), require('./../../assets/sounds/3.wav'),
    //                   require('./../../assets/sounds/4.wav'), require('./../../assets/sounds/5.wav'),
    //                   require('./../../assets/sounds/6.wav'), require('./../../assets/sounds/7.wav'),
    //                   require('./../../assets/sounds/8.wav'), require('./../../assets/sounds/9.wav'),
    //                   require('./../../assets/sounds/10.wav')
    //   ]
    //   if (this.randomSound === false) {
    //   return clearInterval(this.interval)
    //   } else {
    //     this.playSound(sounds[Math.floor(Math.random() * Math.floor(9))])
    //   }
    // }
