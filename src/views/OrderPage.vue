<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-3 fron-weight-black my-5">Coffee Menu</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md6>
        <v-card>
          <v-responsive>
            <v-img
              src="https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              height="500px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">Flat White</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>

          <v-container fluid class="coffee-description">
            <v-card-text>
              <h3 class="headline mb-0">Flat White</h3>
              <v-layout justify-space-around class="mt-2">
                <span class="group pa-1">
                  <p>Small: $4.50</p>

                  <p>Large: $4.90</p>
                </span>
              </v-layout>
            </v-card-text>
          </v-container>
          <v-card-actions>
            <v-btn
              outline
              block
              color="green"
              v-on:click="coffeeCart.push('Flat White - $4.50')"
            >Small</v-btn>
            <v-btn
              outline
              block
              color="green"
              v-on:click="coffeeCart.push('Flat White - $4.90')"
            >Large</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md6>
        <v-card>
          <v-responsive>
            <v-img
              src="https://images.unsplash.com/photo-1472973681244-f5bcc808ad47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
              height="500px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">Cappachino</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>
          <v-container fluid>
            <v-card-text>
              <h3 class="headline mb-0">Cappuccino</h3>
              <v-layout justify-space-around class="mt-2">
                <span class="group pa-1">
                  <p>Small: $4.50</p>

                  <p>Large: $4.90</p>
                </span>
              </v-layout>
            </v-card-text>
          </v-container>
          <v-card-actions>
            <v-btn
              outline
              block
              color="green"
              v-on:click="coffeeCart.push('Cappuccino - $4.50')"
            >Small</v-btn>
            <v-btn
              outline
              block
              color="green"
              v-on:click="coffeeCart.push('Cappuccino - $4.90')"
            >Large</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- <v-card-actions>
    <v-btn color="green" dark @click="orderCoffee(item)">Order</v-btn>
    </v-card-actions>-->

    <v-layout>
      <v-flex xs12 sm12 md6>
        <v-card>
          <v-responsive>
            <v-img
              src="https://images.unsplash.com/photo-1518888744238-abae6ab3f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              height="500px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">Long Black</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>
          <v-container fluid>
            <v-card-text>
              <h3 class="headline mb-0">Long Black</h3>
              <v-layout justify-space-around class="mt-2">
                <span class="group pa-1">
                  <p>Small: $4.50</p>

                  <p>Large: $4.90</p>
                </span>
              </v-layout>
            </v-card-text>
          </v-container>
          <v-card-actions>
            <v-btn
              outline
              block
              color="green"
              v-on:click="coffeeCart.push('Long Black - $4.50')"
            >Small</v-btn>
            <v-btn
              outline
              block
              color="green"
              v-on:click="coffeeCart.push('Long Black - $4.90')"
            >Large</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md6>
        <v-card>
          <v-responsive>
            <v-img
              src="https://www.fitmittenkitchen.com/wp-content/uploads/2017/12/Superfood-Hot-Chocolate-Paleo-Vegan-2-copy.jpg"
              height="500px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">Hot Chocolate</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>
          <v-container fluid>
            <v-card-text>
              <h3 class="headline mb-0">Hot Chocolate</h3>
              <v-layout justify-space-around class="mt-2">
                <span class="group pa-1">
                  <p>Small: $4.50</p>

                  <p>Large: $4.90</p>
                </span>
              </v-layout>
            </v-card-text>
          </v-container>
          <v-card-actions>
            <v-btn
              outline
              block
              color="green"
              v-on:click="coffeeCart.push('Hot Chocolate - $4.50')"
            >Small</v-btn>
            <v-btn
              outline
              block
              color="green"
              v-on:click="coffeeCart.push('Hot Chocolate - $4.90')"
            >Large</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs12 sm6 m5 offset-sm3>
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            src="https://img.etimg.com/thumb/msid-67055775,width-643,imgsize-709079,resizemode-4/coffeebeans.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height></v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <h2>Coffe Cart</h2>
              <ul>
                <li v-for="item in coffeeCart">{{item}}</li>
              </ul>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange" to="/ThankYou">Confirm Order</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      checkbox1: true,
      checkbox2: false,
      coffeeCart: []
    };
  },
  name: "CoffeeOrders",
  computed: {
    coffees() {
      return this.$store.state.coffee;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    orderCoffee(item) {
      if (this.isAuthenticated) {
        this.$store.dispatch("addCoffee", item);
      } else {
        this.$router.push("/Login");
      }
    }
  }
};
</script>

<style>
.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
  font-size: 140%;
}
.group p {
  margin-bottom: 0px;
}

.v-card__text {
  padding: 5px;
}

.v-card {
  border-radius: 5px;
}

.v-input--selection-controls {
  margin-top: 0px;
  padding-top: 0px;
  margin: 3px;
}
</style>

