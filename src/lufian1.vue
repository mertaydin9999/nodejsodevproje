<template>
<div id="productName" class="div1">

<div id="scrollableContent " class="div2">
<ul >
    <li >                 
                <a >
                    <img class="fotoType" :src="urunList.kaynak1" 
                    alt="Nodo Spor Blazer Ceket Slim Fit Lacivert" title="Nodo Spor Blazer Ceket Slim Fit Lacivert">
                </a>       
    </li>
    <li >        
            <a >
                <img class="fotoType" :src="urunList.kaynak2" 
                 alt="Nodo Spor Blazer Ceket Slim Fit Lacivert" title="Nodo Spor Blazer Ceket Slim Fit Lacivert">
            </a>
    </li>
    <li >   
            <a >
                <img class="fotoType" :src="urunList.kaynak3"  
                alt="Nodo Spor Blazer Ceket Slim Fit Lacivert" title="Nodo Spor Blazer Ceket Slim Fit Lacivert">
            </a> 
    </li>
    <li >
            <a >
                <img class=" fotoType" :src="urunList.kaynak4" 
                 alt="Nodo Spor Blazer Ceket Slim Fit Lacivert" title="Nodo Spor Blazer Ceket Slim Fit Lacivert">
            </a>   
    </li>
</ul>
</div>

<div id="myDIV" class="div3">
    <div  id="productName">
        <h1  id="productName" >{{ urunList.urunAd }}</h1><br><br><br>
        <h3 >Ürün Kodu : <a >{{urunList.urunKod}}</a> </h3>  
    </div>  
    <div id="productName">
        <div >
                <h4  >{{ urunList.urunFiyat }} TL</h4>  <br>
               
                 <h5 >{{urunList.urunTaksitliFiyat}} </h5>
                
        </div>
        <div>
                <p> <strong>Renk :</strong> {{urunList.renkler[0]}} </p>
                 <button class="renkbox"></button>

        </div>
        <div >
                <p class="p.beden"> <strong>Beden :</strong>  {{ urunList.yeniBeden }} </p>
               
                <button @click="urunList.yeniBeden=urunList.bedenNo[0]" class="bedenno">{{urunList.bedenNo[0]}}</button>    
                <button @click="urunList.yeniBeden=urunList.bedenNo[1]" class="bedenno">{{urunList.bedenNo[1]}}</button>   
                <button @click="urunList.yeniBeden=urunList.bedenNo[2]" class="bedenno">{{urunList.bedenNo[2]}}</button>      
                <button @click="urunList.yeniBeden=urunList.bedenNo[3]" class="bedenno">{{urunList.bedenNo[3]}}</button>   
                <button @click="urunList.yeniBeden=urunList.bedenNo[4]" class="bedenno">{{urunList.bedenNo[4]}}</button>     
                <button @click="urunList.yeniBeden=urunList.bedenNo[5]" class="bedenno">{{urunList.bedenNo[5]}}</button>   
        </div>
        <div>

            <nuxt-link to="/sepeteeklendi"  tag="a">     
            <button class="sepet">  SEPETE EKLE    →</button>
            </nuxt-link> 


            <nuxt-link to="/uyegiris"  tag="a">   
                    <a class="favori" >  ♡ Favorilerime <br>Ekle>   </a>
            </nuxt-link>

        </div>
        <div >
            
            <ul >
                <li v-for="item in urunList.aciklama" :key="item" class="ozellik">
                <button class="ozellik">{{item}} <hr> </button>
                </li> 
                
            </ul>
        </div>
    </div>
</div>
</div>

</template>

<script>

export default {
    
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