<template>
  <div class>
    <v-parallax
      src="https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      height="500"
    >
      <header class="header">
        <v-layout column align-center justify-center pa-5>
          <v-flex xs12 md7 offset-md4>
            <div class="textbox">
              <h1
                class="display-4 font-weight-heavy mb-3 heading-primary hidden-md-and-down"
              >Coffee Zombies</h1>
              <h2 class="display-2 heading-primary--sub">Redefining coffee</h2>
              <div class="text-xs-center">
                <br>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </header>
    </v-parallax>
    <v-container class="background">
      <v-layout justify-center class="explanation-section">
        <div>
          <h1 class="display-2 font-weight-bold mb-3 heading-linear">How Coffee Zombie Works</h1>
        </div>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs4 v-for="reasons in reasons" :key="reasons.text">
          <div flat class="text-xs-center">
            <img :src="reasons.icon" height="70" center-align class="reasons-img">
            <v-card-text class="px-0 how">{{reasons.text}}</v-card-text>
          </div>
        </v-flex>
      </v-layout>
      <v-flex>
        <v-card class="mx-auto about-card" color dark>
          <v-layout align-center column justify-center>
            <div id="about"></div>
            <h3 class="display-3 font-weight-bold mb-3 heading-linear">About Coffee Zombies</h3>
            <v-card-text
              class="headline font-weight-bold"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. In suscipit pariatur assumenda amet soluta, molestias voluptatibus voluptate illo porro? A, culpa voluptas! Saepe eaque a modi non nostrum, praesentium dolorum?</v-card-text>
          </v-layout>
        </v-card>
      </v-flex>

      <v-layout align-center column justify-center>
        <h3 class="display-3 font-weight-bold mb-3 heading-linear">Special offers</h3>
      </v-layout>

      <v-layout>
        <v-flex lg6>
          <v-card color class="ma-3 card">
            <v-img
              src="https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              height="300px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">Flat White</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-text>
              <h3 class="headline mb-0">Flat White</h3>
              <v-layout justify-space-around class="mt-2">
                <span class="group pa-1">
                  <h3>Small: $4.50</h3>
                  <h3>Large: $4.90</h3>
                </span>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-btn color to="/Login">Get Deal!</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex lg6>
          <v-card color class="ma-3 card">
            <v-img
              src="https://images.unsplash.com/photo-1472973681244-f5bcc808ad47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
              height="300px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">Cappuccino</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-text>
              <h3 class="headline mb-0">Cappuccino</h3>
              <v-layout justify-space-around class="mt-2">
                <span class="group pa-1">
                  <h3>Small: $4.50</h3>
                  <h3>Large: $4.90</h3>
                </span>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-btn color to="/Login">Get Deal!</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex lg6>
          <v-card color class="ma-3 card">
            <v-img
              src="https://images.unsplash.com/photo-1518888744238-abae6ab3f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              height="300"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">Long Black</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-text>
              <h3 class="headline mb-0">Long Black</h3>
              <v-layout justify-space-around class="mt-2">
                <span class="group pa-1">
                  <h3>Small: $4.50</h3>
                  <h3>Large: $4.90</h3>
                </span>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-btn color to="/Login">Get Deal!</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex lg6>
          <v-card color class="ma-3 card">
            <v-img
              src="https://images.unsplash.com/photo-1497048297103-b34f2fc1df34?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              height="300px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">Mochaccino</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-text>
              <h3 class="headline mb-0">Mochaccino</h3>
              <v-layout justify-space-around class="mt-2">
                <span class="group pa-1">
                  <h3>Small: $4.50</h3>
                  <h3>Large: $4.90</h3>
                </span>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-btn color to="/Login">Get Deal!</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex lg6>
          <v-card color class="ma-3 card">
            <v-img
              src="https://images.unsplash.com/photo-1546843806-76391bfbb4f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
              height="300px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">Latte</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-text>
              <h3 class="headline mb-0">Latte</h3>
              <v-layout justify-space-around class="mt-2">
                <span class="group pa-1">
                  <h3>Small: $4.50</h3>
                  <h3>Large: $4.90</h3>
                </span>
              </v-layout>
            </v-card-text>

            <v-card-actions>
              <v-btn color to="/Login">Get Deal!</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex lg6>
          <v-card color class="ma-3 card">
            <v-img
              src="https://images.unsplash.com/photo-1517578239113-b03992dcdd25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
              height="300"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">Hot Chocolate</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-text>
              <h3 class="headline mb-0">Hot Chocolate</h3>
              <v-layout justify-space-around class="mt-2">
                <span class="group pa-1">
                  <h3>Small: $4.50</h3>
                  <h3>Large: $4.90</h3>
                </span>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-btn color to="/Login">Get Deal!</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout align-center column justify-center>
        <div></div>
        <h1 class="display-2 font-weight-bold mb-3 mt-5 heading-linear">Testimonials</h1>
      </v-layout>

      <v-layout row wrap class="story">
        <v-flex>
          <v-card class="cardback text-xs-center mb-3 round clip">
            <v-responsive class="pt-4">
              <v-avatar size="150">
                <img class="filter" src="Cool_Rick.png">
              </v-avatar>
            </v-responsive>
            <br>
            <v-card-text>
              <div
                class="main-blurb"
              >Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.</div>
              <br>
              <div class="main-blurb"></div>
            </v-card-text>
          </v-card>

          <!--<v-flex>
        <v-btn  color="">See my work</v-btn>
        <v-btn  color="">Skills</v-btn>
          </v-flex>-->
        </v-flex>

        <v-flex>
          <v-card class="cardback text-xs-center mt-3 round clip">
            <v-responsive class="pt-4">
              <v-avatar size="150">
                <img class="filter" src="avatar-2.png">
              </v-avatar>
            </v-responsive>
            <br>
            <v-card-text>
              <div
                class="main-blurb"
              >Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.</div>
              <br>
              <div class="main-blurb"></div>
            </v-card-text>

            <v-flex>
              <v-card-actions></v-card-actions>
            </v-flex>
            <v-flex></v-flex>
          </v-card>

          <!--<v-flex>
        <v-btn  color="orange">See my work</v-btn>
        <v-btn  color="orange">Skills</v-btn>
          </v-flex>-->
        </v-flex>
      </v-layout>

      <!--MODAL-->
    </v-container>
  </div>
</template>




<script>
export default {
  data() {
    return {
      reasons: [
        { icon: "/mug-hot-solid.svg", text: "Choose" },
        { icon: "/clock-solid.svg", text: "Pick Up" },
        { icon: "/grin-wink-solid.svg", text: "Drink and Enjoy!" }
      ],
      dialog: false
    };
  }
};
</script>


<style scoped>
.header {
  min-width: 100%;
  min-height: 50vh;
}

.card {
  border-radius: 0.75rem;
  padding: 0.5rem;
}

.card:hover {
  background-color: orange;
}

.about-card {
  padding: 10px;
  margin: 4.5rem;
}

.explanation-section {
  margin-top: 5.5rem;
}

.reasons-img {
  margin-top: 2em;
}

.story {
  width: 70%;
  margin: 0 auto;
  padding: 2rem;
  font-size: 1rem;
}
.main-blurb {
  padding-bottom: 0.75rem;
  margin-left: 5rem;
  margin-right: 5rem;
  font-size: 130%;
  color: black;
}
.cardback {
  border-radius: 0.75rem;
}

.textbox {
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-60%, -60%);
  text-align: center;
  width: 100%;
}

.heading-primary {
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: 6rem;
  display: block;
  font-family: "Lato", sans-serif;
  animation-name: moveInLeft;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}

/*
        animation-delay: 3s;
        animation-iteration-count: 3;
        */
.heading-primary--sub {
  display: block;
  animation: moveInRight 1s ease-out;
  padding-bottom: 2rem;
}

.how {
  padding: 5px;
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 150%;
  color: orange;
  font-weight: 600;
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-15rem);
  }
  80% {
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(15rem);
  }
  80% {
    transform: translateX(-1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(13rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
