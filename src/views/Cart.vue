<template>
<v-parallax src="https://img.grouponcdn.com/iam/6EsgSw3Sd239CH7UEq3j/Pj-2048x1242/v1/c700x420.jpg">
<div class="home">
    
    <v-layout align-center justify-center>
    <v-flex sm12 md5>
        <v-card>
    <v-list >
        <v-toolbar color="cyan" dark>
                <v-toolbar-title class="center"><h1>Coffee Cart</h1></v-toolbar-title>
              </v-toolbar>     
        <v-list-tile v-for="(item,i) in items" :key="i" avatar>
            
            <v-list-tile-content>
                
                {{item}}
                
            </v-list-tile-content>
            
            <v-list-tile-action>
                <v-icon @click="remove(i)">delete</v-icon>
                
            </v-list-tile-action>
            
            
        </v-list-tile>
        <v-btn color="cyan" dark to="/Thankyou">Confirm</v-btn>
    </v-list>
        </v-card>
    </v-flex>
    </v-layout>
   
</div>  
 </v-parallax>  
</template>

<script>
export default {
    name:"home",
    data: () => ({
        items: ["Flat White", "Cappuccino", "Hot Chocolate"]
    }),
    methods: {
        remove(index) {
            const list = this.items;
            const newList = [
                ...list.slice(0, index),
                ...list.slice(index + 1, list.lenth)
            ];
            this.items = newList;
        }
    }
};
</script>
>



