<template>
<div class="component-wrapper-carousel" id="carousel-id" v-scroll='handleScroll'>
  <div class="ia-container">
		<figure>
			<img src="./../../assets/images/photography.png" alt="image01" />
			<input type="radio" name="radio-set" checked="checked" />
			<figcaption><span>Photography</span></figcaption>
			<figure>
				<img src="./../../assets/images/viking.png" alt="image02" />
				<input type="radio" name="radio-set" />
				<figcaption><span>Medieval weapons</span></figcaption>
				<figure>
					<img src="./../../assets/images/retro2.png" alt="image02" />
					<input type="radio" name="radio-set" />
					<figcaption><span>Retro-Gaming</span></figcaption>
					<figure>
						<img src="./../../assets/images/voyage.png" alt="image02" />
						<input type="radio" name="radio-set" />
						<figcaption><span>Adventure!</span></figcaption>
					</figure>
				</figure>
			</figure>
		</figure>
	</div>
</div>
</template>
<script>
export default {
  data () {
    return {
			isVisible: false,
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    handleScroll: function (evt) {
      var div = document.getElementById('carousel-id')
      console.log(window.scrollY)
      if (window.scrollY > 1550 && this.isVisible === false && window.innerWidth > 499) {
				this.isVisible = true
        div.style.visibility = 'visible'
        div.animate([{transform: 'translateX(-100%)', opacity: 0}, {transform: 'translateX(0)', opacity: 1}],
				{ duration:1000, iterations: 1})
				document.removeEventListener('scroll', this.handleScroll)
      }
			if (window.innerWidth < 500) {
        div.style.visibility = 'visible'
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
<style lang="scss" scoped>
.component-wrapper-carousel {
	width: 100%;
	justify-content: center;
	display: flex;
	visibility: hidden;
	.ia-container {
		width: 1250px;
		overflow: hidden;
		box-shadow: 1px 1px 4px rgba(0,0,0,0.08);
	}
}


.ia-container figure {
  position: absolute;
	top: 0;
	left: 250px; /* width of visible piece */
	width: 500px; /* width of the actual image */
    box-shadow: 0 0 0 1px rgba(255,255,255,0.6);
	-webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    margin: 0;
}

.ia-container > figure {
  position: relative;
	left: 0 !important;
}

.ia-container img {
	display: block;
  height: 100%;
	width: 100%;
}

.ia-container input {
	position: absolute;
	top: 0;
	left: 0;
	width: 30%; /* just cover visible part */
	height: 100%;
	cursor: pointer;
	border: 0;
	padding: 0;
	-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	filter: alpha(opacity=0);
	opacity: 0;
	z-index: 100;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
.ia-container input:checked{
	width: 5px;
	left: auto;
	right: 0px;
}
.ia-container input:checked ~ figure {
	-webkit-transition: all 0.7s ease-in-out;
    -moz-transition: all 0.7s ease-in-out;
    -o-transition: all 0.7s ease-in-out;
    -ms-transition: all 0.7s ease-in-out;
    transition: all 0.7s ease-in-out;
	left: 100%;
}

.ia-container figcaption {
	width: 100%;
	height: 100%;
	background: rgba(87, 73, 81, 0.1);
	position: absolute;
	top: 0px;
	-webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    transition: all 0.2s linear;
}

.ia-container figcaption span {
	position: absolute;
	top: 40%;
	margin-top: -30px;
	right: 20px;
	left: 20px;
	overflow: hidden;
	text-align: center;
	background: rgba(87, 73, 81, 0.3);
	line-height: 20px;
	font-size: 18px;
	-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    opacity: 0;
	text-transform: uppercase;
	letter-spacing: 4px;
	font-weight: 700;
	padding: 20px;
	color: #fff;
	text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
}

.ia-container input:checked + figcaption,
.ia-container input:checked:hover + figcaption{
	background: rgba(87, 73, 81, 0);
}

.ia-container input:checked + figcaption span {
	-webkit-transition: all 0.4s ease-in-out 0.5s;
    -moz-transition: all 0.4s ease-in-out 0.5s;
    -o-transition: all 0.4s ease-in-out 0.5s;
    -ms-transition: all 0.4s ease-in-out 0.5s;
    transition: all 0.4s ease-in-out 0.5s;
	-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=99)";
    filter: alpha(opacity=99);
	opacity: 1;
	top: 50%;
}

.ia-container #ia-selector-last:checked + figcaption span {
	-webkit-transition-delay: 0.3s;
	-moz-transition-delay: 0.3s;
	-o-transition-delay: 0.3s;
	-ms-transition-delay: 0.3s;
	transition-delay: 0.3s;
}

.ia-container input:hover + figcaption {
	background: rgba(87, 73, 81, 0.03);
}

.ia-container input:checked ~ figure input{
    z-index: 1;
}

@media screen and (max-width: 1185px) {
  .ia-container {
		background-color:rgb(108, 188, 253);
		width: 100%;
		height: 400px;
	}
	.ia-container figure {
		left: 60%;
		width: 400px;
	}
	.ia-container input {
		width: 30%;
	}
	.ia-container input:checked ~ figure {
		left: 100%;
	}
	.ia-container figcaption span {
		font-size: 16px;
	}
}
@media screen and (max-width: 1105px) {
    .ia-container {
		width: 100%;
		height: 400px;
	}
	.ia-container figure {
		left: 50%;
		width: 400px;
	}
	.ia-container input {
		width: 30%;
	}
	.ia-container input:checked ~ figure {
		left: 100%;
	}
	.ia-container figcaption span {
		font-size: 16px;
	}
}
	@media screen and (max-width: 970px) {
    .ia-container {
		width: 100%;
		height: 400px;
		}
		.ia-container figure {
			left: 38%;
			width: 400px;
		}
		.ia-container input {
			width: 30%;
		}
		.ia-container input:checked ~ figure {
			left: 100%;
		}
		.ia-container figcaption span {
			font-size: 16px;
		}
	}
		@media screen and (max-width: 820px) {
    .ia-container {
		width: 100%;
		height: 400px;
		}
		.ia-container figure {
			left: 30%;
			width: 400px;
		}
		.ia-container input {
			width: 30%;
		}
		.ia-container figcaption span {
			font-size: 16px;
		}
	}
			@media screen and (max-width: 740px) {
    .ia-container {
		width: 100%;
		height: 400px;
		}
		.ia-container figure {
			left: 27%;
			width: 400px;
		}
		.ia-container input {
			width: 30%;
		}
		.ia-container figcaption span {
			font-size: 16px;
		}
	}
	@media screen and (max-width: 670px) {
    .ia-container {
		width: 100%;
		height: 400px;
		}
		.ia-container figure {
			left: 15%;
			width: 400px;
		}
		.ia-container input {
			width: 30%;
		}
		.ia-container figcaption span {
			font-size: 16px;
		}
	}
	@media screen and (max-width: 546px) {
    .ia-container {
		width: 100%;
		height: 450px;

		}
		.ia-container figure {
			left: 30%;
			width: 250px;
			height: 450px;
		}
		.ia-container input {
			width: 30%;
		}
		.ia-container figcaption span {
			font-size: 16px;
		}
	}
	@media screen and (max-width: 465px) {
    .ia-container {
		width: 100%;
		height: 450px;
		}
		.ia-container input {
			width: 5%;
		}
		.ia-container figure {
			left: 10%;
			width: 250px;
			height: 450px;
		}
		.ia-container figcaption span {
			font-size: 16px;
		}
	}

</style>