<template>
<div id="div1">
		
	<h4 class="margin">Ürün Sepetinize Eklendi.</h4>
	<br>
	<table class="padding" border="1px solid gray" width="100%">
		<thead>
		<tr>
			<th>ÜRÜN</th>
			<th>ÜRÜN ADI</th>
			<th>MİKTAR</th>
			<th>BİRİM FİYAT</th>
			<th>TOPLAM TUTAR</th>
			<th>SİL</th>
		</tr>
		</thead>

		<tbody>
		<tr>
			<td >
				<img v-if="show"  :src="urunList.urunFoto"></td>
			<td > <p v-if="show"> {{ urunList.urunAd }}  {{ urunList.yeniBeden }}</p></td>
			<td>
				<button  v-if="urunList.urunMiktari > 1" v-on:click="urunList.urunMiktari--"> - </button>
				<a v-if="show" class="pMiktar">{{ urunList.urunMiktari }}</a>
                
				<button  v-on:click="urunList.urunMiktari++"> + </button>
			</td>
			<td v-if="show" > {{ urunList.urunFiyat }} TL</td>
			<td><p v-if="show"> {{ topTutar() }} TL</p> </td>
			<td>
				<button  @click="show= !show" >x</button>
			</td>
		</tr>
		</tbody>


	</table> 

		<p class="float-right font">Sepet Toplam: {{topTutar()}}  TL</p>
		<br><br>
        <p>
		<button class="btnleft font girisyap" >ALIŞVERİŞE DEVAM</button>

		<nuxt-link to="/satinal"  tag="a">
		<button class="btnright font girisyap">SEPETE GİT</button>
		</nuxt-link>

		</p>

</div>
</template>



<script>
export default {
	head(){
       return {
           title: 'Lufian | Sepete Ekle'
       }
   },
    data(){
        return{ 
            show:true
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
    },
    methods:{
        topTutar:function () {
            return this.urunList.urunMiktari * this.urunList.urunFiyat
        },
        }
}
</script>
