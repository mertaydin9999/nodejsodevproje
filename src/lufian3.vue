<template>
<div id="ilkdiv">       
    
       <table width="100%" >  
            <thead>
                <tr>
                    <td>Ürün</td> 
                    <td>Ürün Adı</td>
                    <td>Miktar</td>
                    <td>Birim Fiyat</td>
                    <td>Toplam Tutar</td>
                    <td>Sil</td>
                 </tr>
                 
            </thead>
            

             <tbody>   
            <tr>
                <td > <img v-if="show" width="190" :src="urunList.urunFoto"> </td>
                <td ><button v-if="show" :src="urunList.urunFoto">{{urunList.urunAd}} {{ urunList.yeniBeden}}</button> </td>
                <td v-if="show" >Adet <button   v-if="urunList.urunMiktari > 1" v-on:click="urunList.urunMiktari--"> - </button>
				<a  class="pMiktar">{{urunList.urunMiktari }}</a>
                
				<button  v-on:click="urunList.urunMiktari++"> + </button></td>
                <td ><p v-if="show">{{urunList.urunFiyat}} TL</p> </td>
                <td ><p v-if="show"> {{ topTutar() }} TL</p> </td>
                <td ><button @click="show= !show" >x</button></td>
            </tr>
             </tbody>
         </table>

         <ul>
            <li class="ekstra"><button class="btn-border">Sepeti Temizle</button></li>
            <li class="ekstra"><button class="btn-border">Alışverişe Devam</button></li>
            <li class="ekstra"><button class="btn-border">Resim Ekle</button></li>
            <li class="ekstra"><button class="btn-border">Alışveriş Listeme Ekle</button></li>
            <li class="ekstra"> <button  class="btn-border">Sepeti Güncelle</button></li>
         </ul>



              <div class="footerdiv">

         <div id="divindirim">
            <p>İndirim Kuponu</p>
            <input type="text" id="inputtext">
             <button id="btnuygula">UYGULA</button>

         
         </div>
      
            <div id="divsatinal">  
            <lu class="inlineli">
                <li>Sepet Toplamı : {{topTutar()}} </li>
                <li>Genel Toplam : {{ topTutar() }}</li>
             </lu>
             
         
            </div>

             <div id="aciklama">
            <p>Sepetinizde değişiklik yaptıysanız güncellemeyi unutmayın. Ödeme ve onay sayfasına kadar satın alma işleminizi iptal edebilirsiniz.</p>
            <nuxt-link to="/uyegiris" tag="a">
                <button id="btnsatinal">Satın Al</button>
            </nuxt-link>
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
    },
    data:function () {
        return{
            
            show:true
        }
    },
     methods:{
        topTutar:function () {
            return this.urunList.urunMiktari * this.urunList.urunFiyat
        }
        }
}



</script>