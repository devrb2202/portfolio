<template>
  <v-container class=" d-flex align-center justify-center text-center">
    <v-row>
      <v-col cols="12">
        <div class="d-flex justify-center mb-5 mt-12">
               <v-avatar
                  rounded="0"
                  size="100"
                  class="ma-2"
              >
                <v-img :src="Nuxt1" cover></v-img>
              </v-avatar>
        </div>
        <v-chip color="green-darken-2" class="mb-5" rounded="lg" variant="outlined">Early Access</v-chip>
        
        <h1 class="text-h5 text-sm-h3 font-weight-bold mb-4">Delivering Robust<br />Web Applications with <br />Nuxt and Vue!</h1>
        
        <p class="text-caption text-sm-subtitle-1 mb-6">
          I’m constantly exploring new technologies <br />and am committed to delivering secure and <span class="text-green-darken-2 font-weight-bold">effective solutions</span>
        </p>
        
        <div class="d-flex justify-center gap-4 mb-15">
          <v-btn v-for="(x, index) in buttons"
            :key="index"
            :variant="x.style"
            :ripple="false"
            :prepend-icon="x.icon" 
            :color="x.color"
            :text="x.title"
            :href="x.to"
            target="_blank"
            class="text-caption text-sm-subtitle-1"
         />
        </div>

        <!-- PROFILE PAGE -->
         <div class="d-flex justify-center align-center">
           <v-avatar
            color="grey"
            size="100"
            class="mr-5"
          >
            <v-img :src="gpt" cover></v-img>
          </v-avatar>
          
            <p class="text-caption text-sm-subtitle-2 mb-6 text-justify">
              <span class="font-weight-bold">by {{ name }}</span>
              <br />
              {{ profession }}
            </p>
           
         </div> 

         <!-- TECH STACKS -->
       
        <p class="text-h4 mb-5 text-center font-weight-bold mt-5">Tech Stacks</p>
        <div class="d-flex justify-center align-center">
          <v-avatar v-for="x in img"
            class="ma-2"
            size="40"
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

<script setup lang="ts">
import Nuxt1 from '@/assets/images/Nuxt1.png'
import gpt from '@/assets/images/gpt.png'
import vuetify from '@/assets/images/vuetify.png'
import typescript from '@/assets/images/typescript.png'
import supabase from '@/assets/images/supabase.png'


interface Button {  
  to: string,
  color: string,
  style: "flat" | "outlined" | "text" | "elevated" | "tonal" | "plain" 
  icon: string,
  title: string
}

const img = ref<string[]>([ Nuxt1, vuetify, typescript, supabase ])

const buttons = ref<Button[]>([
  {to: 'https://github.com/devrb2202', color: 'green', style: 'outlined', icon: 'mdi-github', title: 'Github'},
  {to: 'https://github.com/devrb2202', color: 'blue', style: 'flat', icon: 'mdi-facebook', title: 'Facebook'},
])
const name = ref<string>("Ramil H. Bercasio")
const profession = ref<string>("Computer Engineer | Web Developer | Red Teamer")


</script>

