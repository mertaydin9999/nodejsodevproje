<template>
    <div class="div1">
        <div class="row div2">
            
                <div class="row div3">
                    <i class="uyegiris ">UYE GIRISI</i>
                    
                </div>
<hr>
                        
                <div class="row div4">
                    
                    <div class="row div5">
                        <v-text-field  v-model="urunList.email" class="row e mail textf" label="E-Mail" name="mail" ></v-text-field>
                                           
                        
                    </div> 

                    <div class="row div6">
                        <v-text-field v-model="urunList.sifre" class="row e mail textf" type="password" label="Sifre" name="sifre" ></v-text-field>
                    </div>      

                    
                        <div class="row div8">

                            <nuxt-link to="/uyeol" tag="a">
                            <button  class="uyeol"> ÜYE OL   </button>
                            </nuxt-link>
                            <nuxt-link to="/satinal" tag="a">
                            <button  @click="girisYap" class="girisyap">
                                GİRİŞ YAP 
                            </button>
                            </nuxt-link>
                            <br>
                        </div>
                        <button class="sifremiunuttum"> ŞifremiUunuttum </button>
                        <button class="sifremiunuttum">Üye Olmadan Devam Et </button>

                </div>
            

        </div>
    </div>
</template>

<script>
export default {
    
    head(){
       return {
           title: 'Lufian | Üye Girişi'
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
        uyeOl: function(){
                
                alert("Üyelik Formu Sayfasina Yönlendiriliyorsunuz!!")
        },
        girisYap: function(){
            if(this.urunList.email==="mert@hotmail.com" && this.urunList.sifre==="yunuskirca62")
                alert("Bilgiler doğru...Giriş yapılıyor...")
        }
    }
}
</script>