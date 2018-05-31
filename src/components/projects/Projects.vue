<template>
  <div class="projects-component" id="projects-component-id">
    <div class="projects-wrapper">
			<div class="content1">
      	<div class="image-wrapper">
					<h1>AND MY PROJECTS?</h1>
				</div>
				<div class="batnav-wrapper" id="batnav" v-scroll="handleScroll">
					<img src="./../../assets/images/batNav.png" alt="">
					<div class="text-wrapper">
						<h2>Game: War-Ships</h2>
						<span class="project-text">
							<h3>Objective: Create an Online multiplayer gave using Firebase</h3><br>
							&nbsp; This was our second project, this one really put our knowledge of Javascript to the test! It was an algorithm bonanza!
							This one taught us how to use Angular, how to pass through Data from one component to the next using various Services.
							After finishing the project, we had a couple of days spare where we had a little fun and added sound effects.
							<a href="https://github.com/robertschmid001/Wild-Battleship">Check it out on Github!</a>
						</span>
					</div>
				</div>
				<div class="coworking-wrapper" id="coworking" v-scroll="handleScroll">
					<img src="./../../assets/images/coworking1.png" alt="">
					<div class="text-wrapper">
						<h2>First Project/Website: Co-Working </h2>
						<span class="project-text">
							<h3>Objective: Create a simple one page website without using a frame-work.</h3><br>
							&nbsp; This was our very first school project, for a real client. We had to create a small one-page for a Co-working open space.
							As you can see, we went for a very simple, clear, flat design. For this we only used CSS/HTML and the google/API for the map.
							<a href="https://github.com/robertschmid001/CoworkingLaLoupe">Check it out on Github!</a>
						</span>
					</div>
					<div class="carousel-wrapper">
					<carousel  :perPage="1" :autoplay="true" :loop="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :paginationEnabled="false">
						<slide><img src="./../../assets/images/coworking2.png" alt=""></slide>
						<slide><img src="./../../assets/images/coworking3.png" alt=""></slide>
						<slide><img src="./../../assets/images/coworking4.png" alt=""></slide>
						<slide><img src="./../../assets/images/coworking5.png" alt=""></slide>
					</carousel>
					</div>
				</div>
			</div>

			<div class="content2">
				<div class="cat-wrapper">
					<div class="cat">
						<div class="ear ear--left"></div>
						<div class="ear ear--right"></div>
						<div class="face">
							<div class="eye eye--left">
								<div class="eye-pupil"></div>
							</div>
							<div class="eye eye--right">
								<div class="eye-pupil"></div>
							</div>
							<div class="muzzle"></div>
						</div>
					</div>
				</div>
				<div class="bloc-color2"></div>
			</div>
			<div class="content3">
				<div class="color-bloc"></div>
				<div class="pokedex-wrapper" id="pokedex" v-scroll="handleScroll">
					<img src="./../../assets/images/pokedex.png" alt="">
					<div class="text-wrapper">
						<h2>First Hackathon</h2>
						<span class="project-text">
							<h3>Objective: Use a Pokémon API using Angular2, then do whatever you want with the data.</h3><br>
							&nbsp; In our group, we were all Dad's and we wondered what our children would want.. So what could have better than a Pokédex? <br>
							I wanted to design an interface that would evolve as we implement new functionalities. Our goal was to be able to input a Pokémon's name and have his picture and characteristics pop-up on the screen have the Dr read it out.
							<a href="https://github.com/robertschmid001/Pokedex">Check it out on Github!</a><br>
						</span>
					</div>
				</div>
			<div class="aquatique-wrapper" id="aquatique"  v-scroll="handleScroll">
				<img src="./../../assets/images/parcAquatique.png" alt="">
 				<div class="text-wrapper">
					<h2>Website: Parc Aquatique</h2>
					<span class="project-text">
					<h3>Objective: Create a website with CMS using Angular 4</h3><br>
					&nbsp; In this project we used the Method SCRUM, which gave us alot of agility and great client feedback during the production of the various functionalities.
					As we were creating a website for the local swimming pool, we had to create a system for the admin to dynamically change the opening and closing times at will.
					We also had to use a weather API and incorporate it into the front page in such a fashion that it's easily accessible without it being intrusive.
					They can also generate articles (saved by using mongoDB) that appear as short articles on the front page that leads into their own /news page.
						<a href="https://parcaquatiqueduperche.fr">Check the website out!</a>
					</span>
      	</div>
				<div class="carousel-wrapper">
					<carousel :perPage="1" :autoplay="true" :loop="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :paginationEnabled="false">
						<slide><img src="./../../assets/images/weather.png" alt=""></slide>
						<slide><img src="./../../assets/images/modalSchedule.png" alt=""></slide>
						<slide><img src="./../../assets/images/tarifs.png" alt=""></slide>
						<slide><img src="./../../assets/images/news.png" alt=""></slide>
					</carousel>
				</div>
			</div>
    </div>
		</div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      selectedComponent: null,
			animationNumber: 1
    }
  },
  components: {
  },
  methods: {
		handleScroll: function (evt) {
      var div = document.getElementById('batnav')
      var div2 = document.getElementById('pokedex')
			var div3= document.getElementById('aquatique')
			var div4= document.getElementById('coworking')
      console.log(window.scrollY)
      if (window.scrollY > 2025 && this.animationNumber === 1 && window.innerWidth > 499) {
				this.animationNumber += 1
        div2.style.visibility = 'visible'
        div2.animate([{transform: 'translateX(200%)', opacity: 0}, {transform: 'translateY(0)', opacity: 1}],
        { duration: 800, iterations: 1})
      }
      if (window.scrollY > 2200 && this.animationNumber === 2 && window.innerWidth > 499) {
				this.animationNumber += 1
        div.style.visibility = 'visible'
        div.animate([{ transform: 'translateX(-100%)', opacity: 0 },
        {transform: 'translateX(0)', opacity: 1}], {duration: 600, iterations: 1})
      }
			if (window.scrollY > 2850 && this.animationNumber === 3 && window.innerWidth > 499) {
				this.animationNumber += 1
        div3.style.visibility = 'visible'
        div3.animate([{transform: 'translateY(200%)', opacity: 0}, {transform: 'translateY(0)', opacity: 1}],
				{duration:1000, iterations: 1})
      }
			if (window.scrollY > 3000 && this.animationNumber === 4 && window.innerWidth > 499) {
				this.animationNumber += 1
        div4.style.visibility = 'visible'
        div4.animate([{ transform: 'translateX(-100%)', opacity: 0 },
        {transform: 'translateX(0)', opacity: 1}], {duration: 600, iterations: 1})
        document.removeEventListener('scroll', this.handleScroll)
      }
			if (window.innerWidth < 500 ) {
				div.style.visibility = 'visible'
				div2.style.visibility = 'visible'
				div3.style.visibility = 'visible'
        div4.style.visibility = 'visible'
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
$color-black: rgb(108, 188, 253);
$color-white: #fff;
$color-none: linear-gradient(#b721fc, #6f15ff);
$size: 170px; // (Fully responsive)

.projects-component {
  width: 100%;
  justify-content: center;
  display: flex;
	flex-wrap: wrap;
	 & .projects-wrapper {
		display: flex;
		text-align: center;
		flex-wrap: wrap;
		flex-direction: row;
		position: relative;
		width: 1250px;
		& .content1 {
			width: 40%;
			z-index: 4;
			& .image-wrapper {
				display: flex;
				height: 222px;
				background: $color-black;
				justify-content: center;
				h1 {
					color: white;
					margin: 0;
					margin-top: 17%;
					font-size: 40px;
					font-style: oblique;
				}
			}
			& .batnav-wrapper {
				position: relative;
				background-color: white;
				padding-bottom: 20px;
				visibility: hidden;
				& img {
					width: 100%;
				}
			}
			.coworking-wrapper {
				margin-top: 20px;
				background-color: white;
				visibility: hidden;
				& img {
					width: 100%;
				}
			}
		}
		& .content2 {
			width: 20%;
			z-index: 2;
			& .cat-wrapper {
				height: 92%;
				display: flex;
				align-items: center;
				justify-content: center;
				background: $color-black;
				overflow: hidden;
				& .cat {
					position: relative;
					height: 170px;
					width: 170px * 1.13;
						.ear--left {
							left: -7%;
							border-radius: 70% 30% 0% 0% / 100% 100% 0% 0%;
							transform: rotate(-15deg);
							&::before,
							&::after {
								right: 10%;
							}
							&::after {
								transform: rotate(-45deg);
							}
						}
						.ear--right {
							right: -7%;
							border-radius: 30% 70% 0% 0% / 100% 100% 0% 0%;
							transform: rotate(15deg);
							&::before,
							&::after {
								left: 10%;
							}
							&::after {
								transform: rotate(45deg);
							}
						}
						.face {
							position: absolute;
							height: 100%;
							width: 100%;
							background: $color-black;
							border-radius: 50%;
							.eye--left {
								left: 0;
								&::before {
									right: -5%
								}
							}
							.eye--right {
								right: 0;
								&::before {
									left: -5%;
								}
							}
							.muzzle {
								position: absolute;
								top: 60%;
								left: 50%;
								height: 6%;
								width: 10%;
								background: $color-white;
								transform: translateX(-50%);
								border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
							}
						}
				}
			}
			.bloc-color2 {
				position: relative;
				left: 31px;
				top: -109px;
				width: 78%;
				height: 11%;
				background: $color-black;
				overflow: hidden;
				transform: rotate(45deg);
			}
		}
		.content3 {
			width: 40%;
			z-index: 4;
			overflow: hidden;
			.color-bloc {
				height: 125px;
				background-color: none;
			}
			.pokedex-wrapper {
				background-color: white;
				visibility: hidden;
				& img {
					width: 100%;
				}
			}
			.aquatique-wrapper {
				margin-top: 20px;
				background-color: white;
				visibility: hidden;
				& img {
					width: 100%;
				}
			}
		}
	}
}
.text-wrapper {
	padding: 20px;
	font-size: 18px;
}
.title {
  font-size: 22px;
  }
.projects {
  padding: 0;
  margin: 0;
}
img {
  align-items: center;
  display: flex;
}
.data-v-c06c963c {
  border: none;
}
.description-wrapper {
  text-align: left;
}
a {
color: #13c3f8;
 text-decoration: none;
}
a:hover {
	 font-weight: 900;
 }
@keyframes easyUp {
  0%   { bottom: 0; }
  50% { bottom: 12px; }
  100% { bottom: 0px; }
}

//cat
.ear {
	position: absolute;
	top: -30%;
	height: 60%;
	width: 25%;
	background: white;

	&::before,
	&::after {
		content: '';
		position: absolute;
		bottom: 24%;
		height: 10%;
		width: 5%;
		border-radius: 50%;
		background: $size;
	}

	&::after {
		transform-origin: 50% 100%;
	}
}

// Eyes
.eye {
	position: absolute;
	top: 35%;
	height: 30%;
	width: 31%;
	background: $color-white;
	border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

	// Eyelids
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 0;
		width: 100%;
		border-radius: 0 0 50% 50% / 0 0 40% 40%;
		background: $color-black;
		animation: blink 4s infinite ease-in;
	}

	@keyframes blink {
		0% { height: 0; }
		90% { height: 0; }
		92.5% { height: 100%; }
		95% { height: 0; }
		97.5% { height: 100%; }
		100% { height: 0; }
	}
	// Tips of the eyes
	&::before {
		content: '';
		position: absolute;
		top: 60%;
		height: 10%;
		width: 15%;
		background: $color-white;
		border-radius: 50%;
	}
}
// Pupils
.eye-pupil {
	position: absolute;
	top: 25%;
	height: 50%;
	width: 20%;
	background: $color-black;
	border-radius: 50%;
	animation: look-around 4s infinite;

	@keyframes look-around {
		0% { transform: translate(0) }
		5% { transform: translate(50%, -25%) }
		10% { transform: translate(50%, -25%) }
		15% { transform: translate(-100%, -25%) }
		20% { transform: translate(-100%, -25%) }
		25% { transform: translate(0, 0) }
		100% { transform: translate(0, 0) }
	}
	.eye--left & {
		right: 30%;
	}
	.eye--right & {
		left: 30%;
	}
	// Glare on the pupil
	&::after {
		content: '';
		position: absolute;
		top: 30%;
		right: -5%;
		height: 20%;
		width: 35%;
		border-radius: 50%;
		background: $color-white;
	}
}
@media (max-width: 980px) {
	.projects-component {
		width: 100%;
		justify-content: center;
		display: flex;
		flex-wrap: wrap;
		& .projects-wrapper {
			display: flex;
			text-align: center;
			flex-wrap: wrap;
			flex-direction: column;
			position: relative;
			width: 1250px;
			& .content1 {
				width: 100%;
				z-index: 4;
				& .image-wrapper {
					display: flex;
					height: 150px;
					background: $color-black;
					text-align: left;
					h1 {
						width: 100%;
						color: white;
						padding-left: 20px;
						font-size: 40px;
						font-style: oblique;
						margin-top: 5%;
					}
				}
				& .batnav-wrapper {
					position: relative;
					background-color: white;
					padding-bottom: 20px;
					visibility: hidden;
					& img {
						width: 100%;
					}
				}
				.coworking-wrapper {
					margin-top: 20px;
					background-color: white;
					visibility: hidden;
					& img {
						width: 100%;
					}
				}
			}
			& .content2 {
				width: 100%;
				z-index: 2;
				& .cat-wrapper {
					height: 300px;
					display: flex;
					align-items: center;
					justify-content: center;
					background: $color-black;
					overflow: hidden;
					& .cat {
						position: relative;
						height: 170px;
						width: 170px * 1.13;
					}
				}
				.bloc-color2 {
					position: relative;
					width: 100%;
					background: $color-black;
					overflow: hidden;
					transform: rotate(45deg);
				}
			}
			.content3 {
				width: 100%;
				z-index: 4;
				overflow: hidden;
				.color-bloc {
					height: 0;
					background-color: none;
				}
				.pokedex-wrapper {
					background-color: white;
					visibility: hidden;
					& img {
						width: 100%;
					}
				}
				.aquatique-wrapper {
					margin-top: 20px;
					background-color: white;
					visibility: hidden;
					& img {
						width: 100%;
					}
				}
			}
		}
	}
	.text-wrapper {
		padding: 20px;
	}
	.title {
		font-size: 22px;
		}
	.projects {
		padding: 0;
		margin: 0;
	}
	img {
		align-items: center;
		display: flex;
	}
	.data-v-c06c963c {
		border: none;
	}
	.description-wrapper {
		text-align: left;
	}
}
@media (max-width: 500px) {
	.projects-component {
		& .projects-wrapper {
			& .content1 {
				& .image-wrapper {
					text-align: left;
					h1 {
						width: 100%;
						padding-left: 20px;
						font-size: 40px;
						margin-top: 12%;
					}
				}
			}
		}
	}
}
</style>
