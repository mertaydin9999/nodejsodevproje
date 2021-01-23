<template>
    <div class="bg-img" @mousemove="show= true" @mouseleave="show=false">
  <form  class="container ">
    
    <div  class="content " v-if="show" >
                <h1 class="hzstnl">HIZLI SATIN AL</h1>
                <br><br><p class="bedenno u">{{ urunList.yeniBeden }}</p><br>
                 <button class=" renkbox "></button>
                <br><br>
                 <button @click="urunList.yeniBeden=bedenNo[0]" class="bedenno">{{urunList.bedenNo[0]}}</button> 
                 <button @click="urunList.yeniBeden=bedenNo[1]" class="bedenno">{{urunList.bedenNo[1]}}</button>  
                 <button @click="urunList.yeniBeden=bedenNo[2]" class="bedenno">{{urunList.bedenNo[2]}}</button>    
                 <button @click="urunList.yeniBeden=bedenNo[3]" class="bedenno">{{urunList.bedenNo[3]}}</button> 
                 <button @click="urunList.yeniBeden=bedenNo[4]" class="bedenno">{{urunList.bedenNo[4]}}</button>  
                 <button @click="urunList.yeniBeden=bedenNo[5]" class="bedenno">{{urunList.bedenNo[5]}}</button> 
                
              
               <nuxt-link to="/lufian1"  tag="a">
                  <p  class="sepet">Sepete Ekle</p>
               </nuxt-link>

                <p class="urunadi">{{urunList.urunAd}} <br><br>{{urunList.urunFiyat}} TL</p><br>
                
    </div>
    
  </form>
       
</div>

</template>

<script>
export default {
  data(){
    return{
      show:false
    }
  },
   
   head(){
       return {
           title: 'Lufian | Ürün '
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