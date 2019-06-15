<template>

  <v-app id="inspire">
    <v-content>
     
        <v-parallax src="https://www.thredbo.com.au/wp-content/uploads/2012/06/krispykreme.jpg">
        <v-layout align-center justify-center>
          <v-flex sm12 sm8 md4>
            <v-card>
              <v-toolbar color="cyan" dark>
                <v-toolbar-title class="center">Thanks for ordering</v-toolbar-title>
              </v-toolbar>                      
              <v-card-actions>
                 <v-spacer class=pb></v-spacer>
                  <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <p1>See you at the store in 15 minutes</p1>
                <v-flex></v-flex>
                <v-btn color="cyan" dark to="/User">OK</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>

        <!-- Donuts-->
          <v-layout align-center justify-center>
      <v-flex sm12 sm8 md4>
        <v-card pb-3>

          <v-toolbar color="cyan" dark>
            
            
            <v-toolbar-title>Try our Donuts  </v-toolbar-title>
            <v-icon>donut_small</v-icon>

          </v-toolbar>

          <v-list one-line>
            <template v-for="(item, index) in items">
              <v-subheader
                v-if="item.header"
                :key="item.header"
              >
                {{ item.header }}
              </v-subheader>

              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-tile
                v-else
                :key="item.title"
                avatar
              
              >
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
           <v-btn color="cyan" dark to="/User">OK</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-parallax>
      
    </v-content>
    <!-- Donuts -->
  </v-app>
</template>

<script>
export default {
    data () {
      return {
        items: [
          
          {
            avatar: 'https://www.entenmanns.com/sites/default/files/styles/medium/public/x159562_1WPlain.png,qitok=xl2ErUaB.pagespeed.ic.OxCtAT2zYm.png',
            title: 'Plain Donut: $3.50',
            },
          { divider: true, insert: true },
          {
            avatar: 'https://media.fooducate.com/products/images/180x180/5846B109-DED6-8887-4F3C-988A4E792770-2848.jpeg',
            title: 'Strawberry Donut:3.50',
            },
          { divider: true, insert: true },
          {
            avatar: 'https://previews.123rf.com/images/koya79/koya791801/koya79180100126/94042801-chocolate-donut-or-doughnut-3d-rendering.jpg',
            title: 'Chocolate Donut: $3:50',
            }
        ]
      }
    }
  }

   
</script>

