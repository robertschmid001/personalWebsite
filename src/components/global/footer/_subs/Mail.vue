<template>
  <div class="footer-wrapper">
    <div class="h1-bloc">
      <img class="mail-icon" src="./../../../../assets/icons/gmail.svg" alt="email" title="robertschmid001@gmail.com">
      <h1> Fancy sending me a mail
        <a href="" class="typewrite" data-period="2000" data-type='[ "just to say hi!?", "for a job opportunity?"]'>
          <span class="wrap"></span>
        </a>
      </h1>
    </div>

    <div class="form-wrapper">
      <form action="https://getsimpleform.com/messages?form_api_token=a7918bfc0b826d5603d481c379f13e98" method="post">
        <span>Hey Robert! I'm </span><input class="name-inputs" type='text' name='prenom' v-model="firstName" placeholder="first name"/>&nbsp;&nbsp;<input class="name-inputs" type='text' name='nom' v-model="lastName" placeholder="last name"/><br>
        <span>You can contact me at </span><input class="email-input" type='email' name='email' v-model="email" placeholder="email" /><br>
        <h2>Your message:</h2>
        <div class="text-area-wrapper">
          <textarea name="message" v-model="message" class="textarea"></textarea>
          <div class="send-wrapper">
            <input class="send-button" type='submit' value='Send'/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      firstName: null,
      lastName: null,
      email: null,
      message: null
    }
  },
  mounted () {
    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate
      this.el = el
      this.loopNum = 0
      this.period = parseInt(period, 10) || 2000
      this.txt = ''
      this.tick()
      this.isDeleting = false
    }

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length
      var fullTxt = this.toRotate[i]

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
      }
      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'
      var that = this
      var delta = 200 - Math.random() * 100
      if (this.isDeleting) {
        delta /= 2
      }
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period
        this.isDeleting = true
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        this.loopNum++
        delta = 500
      }
      setTimeout(function () {
        that.tick()
      }, delta)
    }

    window.onload = function () {
      var elements = document.getElementsByClassName('typewrite')
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type')
        var period = elements[i].getAttribute('data-period')
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period)
        }
      }
      // INJECT CSS
      var css = document.createElement('style')
      css.type = 'text/css'
      css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}'
      document.body.appendChild(css)
    }
  }
}

</script>
<style lang="scss" scoped>

.footer-wrapper {
  height: 100%;
  .h1-bloc {
    background-color: rgb(108, 188, 253);
    flex-direction: row;
    display: flex;
    .mail-icon {
      width: 10%;
      padding: 0 10px 0 10px;
    }
    h1 {
      margin: 0;
      padding: 40px;
      padding-left: 50px;
      color: white;
      font-size: 30px;
      width: 90%;
      .typewrite {
        color: white;
        text-decoration:none;
        .wrap {
          border-right: .05em solid;
          animation: caret 1s steps(1) infinite;
        }
      }
    }
  }
  .form-wrapper {
    padding: 20px;
    line-height: 50px;
    overflow: none;
    background-color: white;
    h2 {
      font-size: 30px;
      margin: 0;
    }
    span {
      font-size: 30px;
      font-style: italic;
      font-weight: 600;
    }
    .name-inputs {
      width: 200px;
      font-size: 30px;
      height: 40px;
    }
    .email-input {
      width: 40%;
      font-size: 30px;
      height: 40px;
    }
    .text-area-wrapper {
      flex-direction: row;
      display: flex;
      textarea {
        font-size: 20px;
        font-style: italic;
        color: rgb(108, 188, 253);
        overflow-y: hidden;
        margin: 0;
        padding: 0;
        width: 90%;
        height: 200px;
      }
      .send-wrapper {
        width: 10%;
        .send-button {
          border-style: none;
          color: white;
          background-color: rgb(108, 188, 253);
          padding: 10px;
          font-size: 30px;
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}
input {
  font-style: italic;
  color: rgb(108, 188, 253);
  border-style: none;
  border-bottom: 1px solid black;
}
@keyframes caret {
  50% {
    border-color: transparent;
  }
}
@media (max-width: 1030px) {
  .footer-wrapper {
    height: 100%;
    .h1-bloc {
      background-color: rgb(108, 188, 253);
      flex-direction: row;
      display: flex;
      .mail-icon {
        width: 10%;
        padding: 0 10px 0 10px;
      }
      h1 {
        margin: 0;
        padding: 40px;
        padding-left: 50px;
        color: white;
        font-size: 30px;
        width: 90%;
        .typewrite {
          color: white;
          text-decoration:none;
          .wrap {
            border-right: .05em solid;
            animation: caret 1s steps(1) infinite;
          }
        }
      }
    }
    .form-wrapper {
      padding: 20px;
      line-height: 50px;
      overflow: none;
      background-color: white;
      h2 {
        font-size: 25px;
        margin: 0;
      }
      span {
        font-size: 25px;
        font-style: italic;
        font-weight: 600;
      }
      .name-inputs {
        width: 200px;
        font-size: 25px;
        height: 40px;
      }
      .email-input {
        width: 40%;
        font-size: 25px;
        height: 40px;
      }
      .text-area-wrapper {
        flex-direction: column;
        display: flex;
        textarea {
          font-size: 20px;
          font-style: italic;
          color: rgb(108, 188, 253);
          overflow-y: hidden;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 200px;
        }
        .send-wrapper {
          width: 100%;
          .send-button {
            border-style: none;
            color: white;
            background-color: rgb(108, 188, 253);
            padding: 10px;
            font-size: 30px;
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
  input {
    font-style: italic;
    color: rgb(108, 188, 253);
    border-style: none;
    border-bottom: 1px solid black;
  }
}
@media (max-width: 714px) {
  .footer-wrapper {
    height: 100%;
    .h1-bloc {
      background-color: rgb(108, 188, 253);
      flex-direction: row;
      display: flex;
      .mail-icon {
        width: 10%;
        padding: 0 10px 0 10px;
      }
      h1 {
        margin: 0;
        padding: 40px;
        padding-left: 50px;
        color: white;
        font-size: 30px;
        width: 90%;
        .typewrite {
          color: white;
          text-decoration:none;
          .wrap {
            border-right: .05em solid;
            animation: caret 1s steps(1) infinite;
          }
        }
      }
    }
    .form-wrapper {
      padding: 20px;
      line-height: 30px;
      overflow: none;
      background-color: white;
      h2 {
        font-size: 20px;
        margin: 0;
      }
      span {
        font-size: 20px;
        font-style: italic;
        font-weight: 600;
      }
      .name-inputs {
        width: 100%;
        font-size: 20px;
        height: 30px;
      }
      .email-input {
        width: 100%;
        font-size: 20px;
        height: 30px;
      }
      .text-area-wrapper {
        flex-direction: column;
        display: flex;
        textarea {
          font-size: 20px;
          font-style: italic;
          color: rgb(108, 188, 253);
          overflow-y: hidden;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 200px;
        }
        .send-wrapper {
          width: 100%;
          .send-button {
            border-style: none;
            color: white;
            background-color: rgb(108, 188, 253);
            padding: 10px;
            font-size: 30px;
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
  input {
    font-style: italic;
    color: rgb(108, 188, 253);
    border-style: none;
    border-bottom: 1px solid black;
  }
}
@media (max-width: 714px) {
  .footer-wrapper {
    height: 100%;
    .h1-bloc {
      background-color: rgb(108, 188, 253);
      flex-direction: row;
      display: flex;
      .mail-icon {
        width: 10%;
        padding: 0 10px 0 10px;
      }
      h1 {
        margin: 0;
        padding: 20px;
        padding-left: 20px;
        color: white;
        font-size: 20px;
        width: 90%;
        .typewrite {
          color: white;
          text-decoration:none;
          .wrap {
            border-right: .05em solid;
            animation: caret 1s steps(1) infinite;
          }
        }
      }
    }
    .form-wrapper {
      padding: 20px;
      line-height: 30px;
      overflow: none;
      background-color: white;
      h2 {
        font-size: 20px;
        margin: 0;
      }
      span {
        font-size: 20px;
        font-style: italic;
        font-weight: 600;
      }
      .name-inputs {
        width: 100%;
        font-size: 20px;
        height: 30px;
      }
      .email-input {
        width: 100%;
        font-size: 20px;
        height: 30px;
      }
      .text-area-wrapper {
        flex-direction: column;
        display: flex;
        textarea {
          font-size: 20px;
          font-style: italic;
          color: rgb(108, 188, 253);
          overflow-y: hidden;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 200px;
        }
        .send-wrapper {
          width: 100%;
          .send-button {
            border-style: none;
            color: white;
            background-color: rgb(108, 188, 253);
            padding: 10px;
            font-size: 30px;
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
  input {
    font-style: italic;
    color: rgb(108, 188, 253);
    border-style: none;
    border-bottom: 1px solid black;
  }
}
</style>
