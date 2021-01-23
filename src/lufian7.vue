<template>
    <div>
        <div id="kategori">
                <button id="btnKategori" > Kategoriler </button> <button @click="show = !show" class="ac">+</button>
                <div id="linkler">
                    <ul v-if="show">
                    <li   v-for="item in urunler" :key="item"><a class="kategorili"  >{{item}}</a></li>
                   
                    
                    
                   </ul> 
                </div>  

        </div>
             <hr width="20%">

             
    
    
    
    
    
    </div>


</template>


<script>
export default {
    data(){
        return{
            urunler:['Kazak','Ceket','Gomlek','Hirka','Klasik Yelek','Polo Yaka T-Shirt','Sweatshirt','Triko Yelek','T-Shirt'],
            show:true,
            showrenk:true,
            
            

        }
    }
    

    
}
</script>