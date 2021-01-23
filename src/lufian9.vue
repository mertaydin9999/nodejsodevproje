<template>
<v-app>
  <v-main>

  <v-carousel>

  <nuxt-link to="/urun" tag="a">
    <v-carousel-item 
         v-for="(item,i) in urunList.items" 
      :key="i"
      :src="item.src"
      >
      </v-carousel-item>
        </nuxt-link>
      </v-carousel>
  </v-main>
 </v-app>
</template>

<script>
  export default {
    data(){
      return{
       items: [
                            {
                              src: 'https://www.lufian.com/Data/EditorFiles/banner/banner4.jpeg'
                            },
                            {
                              src: 'https://www.lufian.com/Data/EditorFiles/banner/Banner1.jpeg'
                            },
                            {
                              src: 'https://www.lufian.com/Data/EditorFiles/banner/banner2.jpeg'
                            },
                            {
                              src: 'https://www.lufian.com/Data/EditorFiles/banner/banner3.jpeg'
                            },
                          ]

      }
    },
   computed : {
        urunList(){
           return this.$store.getters.getPosts
       }
    },
    props : {
        posts: {
            required : true,
            type : Object
        }
    }
      


  }
</script>