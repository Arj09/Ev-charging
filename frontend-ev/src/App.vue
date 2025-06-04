<script setup>
import { ref, computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'




const routes = {
  '/': Home,
  '/about': HelloWorld
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})


</script>

<template>
  <div class=" bg-red-600 mx-auto w-5/5 border-none flex mb-5 flex-row justify-end  py-4 px-2 gap-2  ">
    <a href="#/" class=" px-4 py-2 bg-yellow-500 rounded text-white cursor-pointer ">Home</a> 
    <a href="#/about" class=" px-4 py-2 bg-yellow-500 rounded text-white cursor-pointer ">Add</a> 
    <a href="#/about" class=" px-4 py-2 bg-yellow-500 rounded text-white cursor-pointer ">Login</a> 
    
    
        
  </div>
  <component :is="currentView" />
  
</template>

