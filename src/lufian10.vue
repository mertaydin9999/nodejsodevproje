<template>
<div>
    <form class="div1 row mr-ml50" @submit.prevent="onSubmit">
        <div class="row div2" >
            <i class=" row uyegiris">ÜYE KAYIT/DUZENLEME  </i><br><hr>
  
        </div>
        
        <div class="div2 row">
            
            <div>
                
                <div class="">
                 <p class=" uyeBilgileri">Üyelik Bilgileri  </p>
                <div>
                    
                <v-text-field  v-model="urunList.ad" class="textbox e mail uyeBilgileri" label="Ad" name="labelAd"></v-text-field>
                </div>
            <div>
                <v-text-field  v-model="urunList.soyad" class="textbox e mail uyeBilgileri" label="Soyad" name="labelSoyad"></v-text-field>
            </div>  
        
                </div>
                
            </div>

        <div class="" >
            <p class=" uyeBilgileri "><br> Şifre Bilgileri  </p>
            <div>
                <v-text-field  v-model="urunList.sifre" class="textbox e mail uyeBilgileri" type="password" label="Sifre" name="labelSifre"></v-text-field>
            </div>
            <div>
                <v-text-field  v-model="urunList.sifreYeniden" class="textbox e mail uyeBilgileri" type="password" label="Sifre yeniden" name=""></v-text-field>
            </div>
        </div>

        <div><br>
            
            <div><p class=" uyeBilgileri ">letisim Bilgileri  </p>
                <v-text-field  v-model="urunList.cepTel" class="textbox e mail uyeBilgileri" placeholder="orn: (536)xxx xx xx" label="Cep Telefonu" name="labelCep"></v-text-field>
            </div>
            <div>
                <v-text-field  v-model="urunList.email" class="textbox e mail uyeBilgileri" placeholder="mertaydin9999@hotmail.com" label="E-Mail" name="labelMail"></v-text-field>  
            </div>
        </div>
        
        <div  class="chckboxdiv checkbox"><br>
           <input type="checkbox" name="checkbox1"  id="">
                    <span class="chkbox">  Tarafınızdan gönderilecek bilgilendirme e-postalarını almak istiyorum. <br></span>
            <input type="checkbox" name="checkbox2"  id="">
                    <span class="chkbox"> Tarafınızdan gönderilecek bilgilendirme sms'lerini almak istiyorum. <br></span>
            <input type="checkbox" name="checkbox3"  id="">
                    <span class="chkbox">Üyelik sözleşmesini Okudum, Kabul Ediyorum.<br></span>
            <input type="checkbox" name="checkbox4"  id="">
                    <span class="chkbox">KVKK sözleşmesini Okudum, Kabul Ediyorum.<br><br><br></span>

          <button  type="submit" class="kayit" name="btnSubmit">KAYIT</button>

        </div>

       
      </div>
   
    </form>
    <table border="1" >
      <tr>
        
        Firmamız hiçbir şekilde e-mailinizi ve kişisel bilgilerinizi ticari amaç uğruna kullanmaz.                           
         
      </tr>
      
      </table>
      
    </div>
</template>

<script>
export default {
    head(){
       return {
           title: 'Lufian | Üye Ol'
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
        },
        urunList:{
            type: Object,
            required : false
        }
    },
    methods:{
        onSubmit(){
            this.$emit("submit",this.urunList)
        }
    }
     
                
    
}
</script>