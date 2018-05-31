<template>
<div class="main">
  <div class="wrapper1">
    <div class="first">
      <div class="title-presentation-wrapper">
        <img class="title-image" src="./../../assets/images/viking3.png" alt="">
        <h1><span class="space">WHO</span><br>AM I?</h1>
      </div>
    </div>

    <div class="second" id="second-content" v-scroll="handleScroll">
      <div class="content-wrapper1">
        <h2 class="h3-title-background1 padding-h3-title">HOW IT ALL <br> <span class="space2">STARTED!</span></h2>
        <div class="text-wrapper">
          <p>&nbsp;&nbsp;I first encountered Web Development when I was working in the Titanium Industry, I had to create a small e-shop to efficiently sell small quantities of Titanium.. et voilà!! Since then I never gave it up!!</p>
        </div>
      </div>

      <div class="content-wrapper2"><h2 class="h3-title-background2 padding-h3-title">AND THEN...?</h2>
        <div class="text-wrapper"><p>&nbsp;&nbsp;I went to the WildCode School where I've learnt how to handle Angular 4, Javascript, MySQL and other amazing tools.</p>
        </div>
      </div>

      <div class="content-wrapper3"><h2 class="h3-title-background3 padding-h3-title">AND NOW...?</h2>
        <div class="text-wrapper">
          <p>&nbsp;&nbsp;I've currently finished my internship and I'm looking for job opportunities to grow as a Developer and learn loads of new stuff!</p>
        </div>
      </div>
    </div>

    <div class="third" id="third-content">
      <div class="content3-wrapper1 h3-title-background4">
        <h2 class="h3-content3">WHAT ABOUT <br><span class="space3">MY HOBBIES?</span></h2>
      </div>
    </div>

  </div>
</div>
</template>
<script>
export default {
isVisible: false,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      animateContent: false,
    }
  },
  methods: {
    showVisible () {
      this.isVisible = !this.isVisible
      var item = document.getElementById('second-content')
      if(this.isVisible === true) {
        return item.style.visibility = 'hidden'
      }
      return item.style.visibility = 'visible'
    },
    handleScroll: function (evt) {
      var div = document.getElementById('second-content')
      var div2 = document.getElementById('third-content')
      if (window.scrollY > 600 && this.animateContent == false && window.innerWidth > 499)  {
        this.animateContent = true
        div.style.visibility = 'visible'
        div.animate([{transform: 'translateY(-100%)', opacity: 0}, {transform: 'translateY(0)', opacity: 1}],
        { duration: 600, iterations: 1})
      }
      if (window.scrollY > 900 && this.animateContent==true && window.innerWidth > 499) {
        div2.style.visibility = 'visible'
        div2.animate([{ transform: 'translateX(-100%)', opacity: 0 },
        {transform: 'translateX(0)', opacity: 1}], {duration: 800, iterations: 1})
        document.removeEventListener('scroll', this.handleScroll)
      }
      if (window.innerWidth < 500) {
        div.style.visibility = 'visible'
        div2.style.visibility = 'visible'
      }
    }
  },
  created () {
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main  {
  height: 1085px;
  justify-content: center;
  display: flex;
  .wrapper1 {
    width: 1250px;
    height: 1085px;
    flex-direction: row;
    display: flex;
    .first {
      margin-top: 130px;
      width: 30%;
      height: 563.42px;
      .title-presentation-wrapper {
        height: 100%;
        position: relative;
        text-align: center;
        color: white;
      }
      .title-presentation-wrapper h1 {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-60%, -50%);
        font-size: 60px;
        font-style: oblique;
        line-height: 40px;
      }
      .title-image{
        width: 100%;
        height: 100%;
      }
      .space {
        padding-left: 82px;
      }
    }
    .second {
      margin-top: 40px;
      width: 35%;
      background-color: white;
      height: 90%;
      visibility: hidden;
      & .content-wrapper1 {
        height: 40%;
        & .h3-title-background1 {
            background-color: #b115fa;
          }
      }
      & .content-wrapper2 {
        height: 30%;
        & .h3-title-background2 {
          background-color: #7c17ff;
        }
      }
      & .content-wrapper3 {
        height: 30%;
        & .h3-title-background3 {
          background-color: #6f15ff;
        }
      }
    }
    .third {
      width: 40%;
      background-color: rgb(212, 240, 252);
      z-index: 1;
      height: 276px;
      margin-top: 789px;
      visibility: hidden;
      & .content3-wrapper1 {
        height: 216px;
        & .h3-content3 {
          position: relative;
          font-size: 40px;
          font-style: oblique;
          line-height: 40px;
          top: 20%;
          padding-left: 20px;
        }
      }
      & .h3-title-background4 {
      background-color: #13c3f8;
      padding: 40px;
      color: white;
    }
    }
  }
}
.space2 {
  padding-left: 80px;
}
.text-wrapper {
  padding: 30px;
  font-size: 20px;
}
p {
  margin: 0;
}
h2 {
  font-style: oblique;
  font-size: 30px;
  color: white;
  line-height: 25px;
  margin: 0;
}
.padding-h3-title {
  padding: 20px;
}
.space3 {
  padding-left: 83px;
}
@media (max-width: 1100px) {
  .main  {
    height: 1085px;
    justify-content: center;
    flex-direction: column;
    display: flex;
    .wrapper1 {
      width: 100%;
      flex-direction: column;
      display: flex;
      .first {
        margin: 0;
        width: 100%;
        height: 15%;
        & .title-presentation-wrapper {
          height: 100%;
          text-align: center;
          color: white;
        }
        & .title-presentation-wrapper h1 {
          font-size: 60px;
          font-style: oblique;
          line-height: 40px;
        }
        & .title-image{
          display: none;
        }
        & .space {
          padding-left: 82px;
        }
      }
      .second {
        margin: 0;
        height: 70%;
        width: 100%;
        background-color: white;
        visibility: hidden;
        flex-direction: column;
        & .content-wrapper1 {
          & .h3-title-background1 {
              background-color: #b115fa;
            }
        }
        & .content-wrapper2 {
          & .h3-title-background2 {
            background-color: #7c17ff;
          }
        }
        & .content-wrapper3 {
          & .h3-title-background3 {
            background-color: #6f15ff;
          }
        }
      }
      .third {
        background-color: rgb(212, 240, 252);
        visibility: hidden;
        height: 15%;
        margin: 0;
        width: 100%;
        z-index: 4;
        & .content3-wrapper1 {
          padding: 0;
          height: 100%;
          & .h3-content3 {
            font-size: 40px;
            font-style: oblique;
            line-height: 40px;
            margin: 0;
          }
        }
        & .h3-title-background4 {
        background-color: #13c3f8;
        color: white;
        }
      }
    }
  }
}
@media (max-width: 500px) {
.space3 {
  padding-left: 50px;
}
.space2 {
  padding-left: 80px;
}
.text-wrapper {
  padding: 30px;
  font-size: 20px;
}
p {
  margin: 0;
}
h2 {
  font-style: oblique;
  font-size: 30px;
  color: white;
  line-height: 25px;
  margin: 0;
}
.padding-h3-title {
  padding: 20px;
}
  .main  {
    height: 1071px;
    justify-content: center;
    flex-direction: column;
    display: flex;
    .wrapper1 {
      height: 100%;
      width: 100%;
      flex-direction: column;
      display: flex;
      .first {
        height: 150px;
        margin: 0;
        width: 100%;
        & .title-presentation-wrapper {
          height: 100%;
          text-align: center;
          color: white;
        }
        & .title-presentation-wrapper h1 {
          font-size: 60px;
          top: 44%;
          font-style: oblique;
          line-height: 40px;
          margin: 0;
        }
        & .title-image{
          width: 100%;
          height: 100%;
        }
        & .space {
          padding-left: 82px;
        }
      }
      .second {
        margin: 0;
        height: 760px;
        width: 100%;
        background-color: white;
        visibility: hidden;
        flex-direction: column;
        & .content-wrapper1 {
          & .h3-title-background1 {
              background-color: #b115fa;
            }
        }
        & .content-wrapper2 {
          & .h3-title-background2 {
            background-color: #7c17ff;
          }
        }
        & .content-wrapper3 {
          & .h3-title-background3 {
            background-color: #6f15ff;
          }
        }
      }
      .third {
        background-color: rgb(212, 240, 252);
        visibility: hidden;
        height: 15%;
        margin: 0;
        width: 100%;
        z-index: 4;
        & .content3-wrapper1 {
          height: 100%;
          & .h3-content3 {
            padding-left: 20px;
            font-size: 30px;
            font-style: oblique;
            line-height: 40px;
            margin: 0;
          }
        }
        & .h3-title-background4 {
        background-color: #13c3f8;
        color: white;
        }
      }
    }
  }
}
</style>


