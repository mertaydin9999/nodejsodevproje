<template>
  <div class="div1">
      
      <v-main > 
        <nuxt-link to="/" tag="a">
        <img class="mt50 foto" max-height="36"  max-width="130"  src="https://www.lufian.com/Data/EditorFiles/lufian/logo.svg"> 
        </nuxt-link>     
          
  <v-tabs class="ml200 words" height="60"> 
    
    <v-tab @mouseover="show =true"  @mouseleave="show=false" class="mt20" v-for="tab in bigTab" :key="tab" > 
        {{ tab }}
      </v-tab>
      
        <img class="mt50 ml1000 bayrak"    src="https://www.lufian.com/Data/EditorFiles/lufian/lang/tr.png">
      
      <a  class="mt50 ml1000 yazilar"  max-height="14" max-width="14">MAGAZALAR</a> <p class="mt50 ml1000 yazilar">|</p>
      <a  class="mt50 ml1000 yazilar"  max-height="14" max-width="14">ARA</a> <p class="mt50 ml1000 yazilar">|</p>
      <nuxt-link to="/uyegiris" tag="a"> <a  class="mt50 ml1000 yazilar"  max-height="14" max-width="14">HESAP</a> <p class="mt50 ml1000 yazilar"> |</p> </nuxt-link>
      <nuxt-link to="/sepeteeklendi" tag="a"><a  class="mt50 ml1000 yazilar"  max-height="14" max-width="14">SEPET</a></nuxt-link>
  </v-tabs>
      
  </v-main>
  <div v-if="show"  class="div2"  style="height:300px;" width="1000px"> <br><br>
    <div   class="baslik"><b> KATEGORILER</b>  <b class="popi">POPULER KATEGORILER</b><br>
      
        <button  class="kat">{{kategoriler[0]}}</button>
        <button class="kat ayri">{{kategoriler[1]}}</button><button class="kat pop">MONT</button><br>
        <button class="kat">{{kategoriler[2]}}</button>
        <button class="kat ayri">{{kategoriler[3]}}</button><button class="kat pop1">KABAN</button><br>
        <button class="kat">{{kategoriler[4]}}</button>
        </div> 
        
      

  </div>
  
  </div>
</template>

<script>
export default {
  data(){
    return{
      bigTab:['Dış Giyim','Üst Giyim','Alt Giyim','Ayakkabı','Aksesuar','Kadın'],
      kategoriler :['Mont','Kaban','Palto','Deri Dış Giyim','Tekno Yelek'],
      show:false,
      hover:false

    }
  }
  
}
</script>