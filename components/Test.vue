<template>
  <v-container class=" d-flex align-center justify-center text-center">
    <v-row>
      <v-col cols="12">
        <div class="d-flex justify-center mb-5 mt-12">
               <v-avatar
                  rounded="0"
                  size="300"
                  class="ma-2"
              >
                <v-img src="/Nuxt1.png" cover></v-img>
              </v-avatar>
        </div>
        <v-chip color="green-darken-2" class="mb-5" rounded="lg" variant="outlined">Early Access</v-chip>
        
        <h1 class="text-h2 font-weight-bold mb-4">Develop Modern<br />Applications With Nuxt!</h1>
        
        <p class="text-subtitle-1 mb-6">
          A <span class="text-green-darken-2 font-weight-bold">real nigga </span>teach you<br /> the course on
           how to build applications using Nuxt.
        </p>
        
        <div class="d-flex justify-center gap-4 mb-15">
          <v-btn color="green" variant="outlined" class="text-capitalize" :ripple="false">Login</v-btn>
          <v-btn color="green-darken-2" variant="flat" class="text-capitalize" :ripple="false">Contact</v-btn>
        </div>

        <!-- PROFILE PAGE -->
         <div class="d-flex justify-center align-center">
           <v-avatar
            color="grey"
            size="100"
            class="mr-5"
          >
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" cover></v-img>
          </v-avatar>
          
            <p class="text-subtitle-1 mb-6 text-justify">
              <span class="font-weight-bold">by Real Nigga</span>
              <br />
             <!-- Computer Engineer | Web Developer | Red Teamer  -->
            </p>
           
         </div>

         <!-- TECH STACKS -->
        <p class="text-h4 mb-6 text-center font-weight-bold">Tech Stacks</p>
        <div class="d-flex justify-center align-center">
          
          <v-avatar v-for="x in img"
            class="ma-2"
            size="50"
            rounded="0"
          >
            <v-img
             
              :src="x"
              cover
            />
          </v-avatar>
          
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>

.text {
  display: block;
}

</style>

<script setup lang="ts">


const img = ref<string[]>([
  '/nuxt1.png',
  '/vuetify.png',
  '/typescript.png',
  '/supabase.png'
])


</script>


