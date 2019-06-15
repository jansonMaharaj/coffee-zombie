<template>
  <v-container>
    <div>
      <v-flex xs12 sm6 offset-sm3 
      >
        <v-card
          class="mx-auto about-card"
          pt="-5px"
          align="center"
          height="500px"
          width="500px"
          color="orange"
          dark
        >
          <h1 class="display-3 font-weight-bold mb-2 heading-linear">Special!</h1>  
          
          <v-card-text class= "headline font-weight-normal">  
            <p class="text-xs-center">Free ginger bread with your cappuccino :)</p>
          </v-card-text>
                
          <img width="250px" src="https://i.dlpng.com/static/png/1211498_thumb.png" alt="Ginger Bread">
        </v-card>
      </v-flex>
    </div>  

    <v-layout>
    <v-flex lg6>
      <v-card  color="" class="ma-3 card ">
        <v-img src="https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" height="300px">
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
        <!--<v-card-actions>
          <v-btn  color="" to="/SignUp">Get Deal!</v-btn> 
        </v-card-actions>-->
      </v-card>
    </v-flex>

    <v-flex lg6>
      <v-card  color="" class="ma-3 card ">
        <v-img src="https://images.unsplash.com/photo-1472973681244-f5bcc808ad47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80" height="300px">
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
       
        <!--<v-card-actions>
          <v-btn  color="" to="/SignUp">Get Deal!</v-btn> 
          </v-card-actions>-->
      </v-card>
    </v-flex>

    <v-flex lg6>
      <v-card color="" class="ma-3 card ">
        <v-img src="https://images.unsplash.com/photo-1518888744238-abae6ab3f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" height="300">
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
        <!--<v-card-actions>
          <v-btn  color="" to="/SignUp">Get Deal!</v-btn> 
        </v-card-actions>-->
      </v-card>
    </v-flex>
  </v-layout>

  <v-layout>
    <v-flex lg6>
      <v-card  color="" class="ma-3 card ">
        <v-img src="https://images.unsplash.com/photo-1497048297103-b34f2fc1df34?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" height="300px">
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
        <!--<v-card-actions>
          <v-btn  color="" to="/SignUp">Get Deal!</v-btn> 
          </v-card-actions>-->
      </v-card>
    </v-flex>

    <v-flex lg6>
      <v-card  color="" class="ma-3 card ">
        <v-img src="https://images.unsplash.com/photo-1546843806-76391bfbb4f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" height="300px">
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
        <!--<v-card-actions>
          <v-btn  color="" to="/SignUp">Get Deal!</v-btn> 
        </v-card-actions>-->
      </v-card>
    </v-flex>

    <v-flex lg6>
      <v-card color="" class="ma-3 card ">
        <v-img src="https://images.unsplash.com/photo-1517578239113-b03992dcdd25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" height="300">
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
        <!--<v-card-actions>
          <v-btn  color="" to="/SignUp">Get Deal!</v-btn> 
        </v-card-actions>-->
      </v-card>
    </v-flex>
  </v-layout>


    <div>
      <v-container>
        <p align="center" class="orange lighten-2 black--text display-2 mt-2">
          My Rewards
        </p>
        <v-layout
          align-center
                column
                justify-center
        >
          <v-card flat class="text-xs-center ma-3">
            <v-avatar size="120" class="grey lighten-3">
            <img
             
              src="https://i.stack.imgur.com/l60Hf.png"
              alt="John"
            >
            </v-avatar> 
                    <v-layout justify-center>
              <p>Coffee Guy</p>
            </v-layout>
          </v-card> 
        </v-layout>
           
        <div class="text-xs-center">
          <v-progress-circular
            :rotate="180"
            :size="200"
            :width="20"
            :value="70"
            thumb-label="20px"
            color="teal"
          >
            {{ value="7/10" }}
          </v-progress-circular>
        </div>
      </v-container>
    </div>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

  
    <div>
      <v-container>
        <p align="center" class="orange lighten-2 black--text display-2 mt-2">
          My Order History
        </p>
      </v-container>
     
      <v-data-table
        :headers="headers"
        :items="records"
        class="elevation-1"
      >
        <template slot="headerCell" slot-scope="props">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <span v-on="on">
                {{ props.header.text }}
              </span>
            </template>
            <span>
              {{ props.header.text }}
            </span>
          </v-tooltip>
        </template>
        <template v-slot:items="props">
          <td class="text-xs-left" font-weight-medium>{{ props.item.date }}</td>
          <td class="text-xs-left" font-weight-medium>{{ props.item.coffee }}</td>
          <td class="text-xs-left" font-weight-medium>{{ props.item.size }}</td>
          <td class="text-xs-left" font-weight-medium>{{ props.item.price }}</td>
          <td class="text-xs-left" font-weight-medium>{{ props.item.quantity }}</td>
          <td class="text-xs-left" font-weight-medium>{{ props.item.total }}</td>
        </template>
      </v-data-table>
     <v-container> 
      <div class="text-xs-center">
        <v-btn to="/Topup" round color="light gray" dark large="" maxdWidth= "100%">Top Up</v-btn>
        <v-btn to="/Orderpage" round color="light gray" dark large="">Order Coffee</v-btn>
      </div>
      </v-container>
    </div>
    
  </v-container>
</template>

<script>
export default {
  data () {
      return {
        headers: [
          {
            text: 'Date',
            align: 'left',
            sortable: true,
            value: 'date',
            size: '150%', 
            color: 'red',
          },
          { text: 'Coffee', value: 'coffee' },
          { text: 'Size', value: 'size' },
          { text: 'Price', value: 'price' },
          { text: 'Quantity', value: 'quantity' },
          { text: 'Total', value: 'total' }
        ],
        records: [
          {
            date: '4/05/2019',
            coffee: 'Cappuccino',
            size: 'Small',
            price: '$4.50',
            quantity: 1,
            total: '$4.50'
          },
          {
            date: '5/05/2019',
            coffee: 'Latte',
            size: 'Large',
            price: '$4.90',
            quantity: 1,
            total: '$4.90'
          },
          {
            date: '6/05/2019',
            coffee: 'Hot Chocolate',
            size: 'Small',
            price: '$4.50',
            quantity: 2,
            total: '$9.00'
          },
          {
            date: '7/05/2019',
            coffee: 'Flat White',
            size: 'Small',
            price: '$4.50',
            quantity: 1,
            total: '$4.50'
          },
          {
            date: '8/05/2019',
            coffee: 'Hot Chocolate',
            size: 'Large',
            price: '$4.90',
            quantity: 1,
            total: '$4.90'
          },
          {
            date: '9/05/2019',
            coffee: 'Latte',
            size: 'Small',
            price: '$4.50',
            quantity: 1,
            total: '$4.50'
          },
          {
            date: '10/05/2019',
            coffee: 'Flat White',
            size: 'Large',
            price: '$4.90',
            quantity: 2,
            total: '$9.80'
          },
          {
            date: '11/05/2019',
            coffee: 'Cappuccino',
            size: 'Large',
            price: '$4.90',
            quantity: 1,
            total: '$4.90'
          },
          {
            date: '12/05/2019',
            coffee: 'Espresso',
            size: 'Small',
            price: '$4.50',
            quantity: 3,
            total: '$13.50'
          },
          {
            date: '13/05/2019',
            coffee: 'Hot Chocolate',
            size: 'Small',
            price: '$4.50',
            quantity: 1,
            total: '$4.50'
          }
        ]
      }
    },
    name: 'CoffeeOrders',
    computed: {
        orders() {
            return this.$store.state.orders;
        },
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },




    methods: {
        orderCoffee(item) {
          if (this.isAuthenticated) {
            this.$store.dispatch('addOrder', item);

          } else {
            this.$router.push('/Login');
          }
        }

    }
};
 
</script>
