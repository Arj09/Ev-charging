<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const login = ref(false)
const Signup = ref(false)
const Edit = ref(false)
const data = ref({})
 
/*

        <div class=" 4/5 grid grid-cols-5 gap-2 grid-rows-3 border-2 border-red-500 rounded p-3 md:grid-cols-8 md:grid-rows-1 " >
            <text class=" bg-red-500 py-1 px-2 text-white rounded col-span-4">Adani Charging station</text>
             <text class=" bg-red-500 py-1 px-2 text-white rounded ">20KW</text>
            <text class=" bg-red-500 py-1 px-2 text-white rounded col-span-2 ">Noida</text>
           
            <text class=" bg-red-500 py-1 px-2 text-white rounded col-span-2 ">Coonnector type</text>
            <text class=" bg-red-500 py-1 px-2 text-white rounded ">Active</text>
            <div class=" flex flex-row text-white  gap-2 col-span-5   border-2 ">
                <button  @click="Edit = !Edit" class=" w-5/5 bg-blue-500 py-2 px-2 rounded font-medium ">Edit</button>
                <button class=" w-5/5 bg-blue-500 rounded py-2 font-medium px-2">Delete</button>
                
            </div>

        </div>


*/


onMounted(()=>{
    station()
})

const station = ()=>{
    axios.get("http://localhost:5000/api/station").then(response=>{
        data = response.data.map((data)=>({
            name:data.Name
        }))
        console.log(response.data)
    }).catch(error=>{
        console.log(error)
    })
}


</script>

<template >
    <div class=" relative">

    <div class=" hidden bg-red-600 mx-auto w-5/5 border-none flex mb-5 flex-row justify-end  py-4 px-2 gap-2  ">
        <button  @click="login = !login"  class=" px-4 py-2 bg-yellow-500 rounded text-white cursor-pointer "> Login</button>
        <button  @click="Signup = !Signup"  class=" px-4 py-2 bg-yellow-500 rounded text-white cursor-pointer ">Signup</button>
    </div>


    
    




    

        <div class="  w-4/5 hidden  mx-auto md:grid grid-cols-8 gap-2 border-2 rounded p-1 bg-blue-500 text-white font-bold " >
            <text class="  py-1 px-2 text-white rounded col-span-2 ">Charging Station Name </text>
            <text class="  py-1 px-2 text-white rounded ">Power Output(kW)</text>
            <text class="  py-1 px-2 text-white rounded col-span-2">Location</text>
            
            <text class="  py-1 px-2 text-white rounded ">Status</text>
            <text class="  py-1 px-2 text-white rounded ">Connector Type</text>
            <text class="  py-1 px-2 text-white rounded ">Delete/Edit</text>

        </div>
    
    <div class=" w-4/5 border-2   mx-auto my-2 p-2 flex flex-col md:flex-row gap-2 rounded ">
        <text class=" bg-blue-500 px-3 py-1 text-white rounded">Filter</text>
        <select class=" border-2 rounded">
            <option>Status</option>
            <option>Active</option>
            <option>Inactive</option>
           
            
        </select>

        <select class=" border-2 rounded">
            <option>Power Output</option>
            <option>Status</option>
            <option>Power</option>
            <option>Connector Type</option>
            
        </select>

        <select class=" border-2 rounded">
            <option>Connector Type</option>
            <option>Status</option>
            <option>Power</option>
            <option>Connector Type</option>
            
        </select>

    </div>
    <div class=" w-11/12 md:w-4/5   mx-auto my-2 p-0.5 flex flex-col gap-2 rounded ">
        
        <div class="  grid-cols-5 grid grid-row-3  md:grid-cols-8 md:grid-row-1 gap-2 border-2 border-red-500 rounded p-2  " >
            <text class=" bg-red-500 py-1 px-2 text-white rounded col-span-4 md:col-span-2 font-bold ">Adani Charging station</text>
            <text class=" bg-red-500 py-1 px-2 text-white rounded font-bold ">20KW</text>
            <text class=" bg-red-500 py-1 px-2 text-white rounded col-span-2 font-bold">Noida</text>
            
            
            <text class=" bg-red-500 py-1 px-2 text-white rounded col-span-2 md:col-span-1  font-bold ">Connector type</text>
            <text class=" bg-red-500 py-1 px-2 text-white rounded font-bold ">Active</text>
            <div class=" flex flex-row text-white gap-2 col-span-5 md:col-span-1   ">
                <button  @click="Edit = !Edit" class=" bg-blue-500 py-1 px-2 rounded w-5/5 font-bold">Edit</button>
                <button class=" bg-blue-500 rounded px-2 w-5/5 font-bold">Delete</button>
                
            </div>

        </div>

        <div class=" w-4/5 mx-auto border-2 p-2 rounded ">
            <ul>
             <li v-for="item in data" :key="item.id">{{ item.Name }}</li>
           </ul>
            
        </div>




    </div>

    

    <div v-if="login"   class=" rounded w-2/5 border-2 flex flex-col p-2  bg-white mx-auto absolute gap-2 top-2/5 left-0 px-4 right-0">
        <text class=" text-center py-2">Login</text>
        <input placeholder=" Enter email" className=" pl-1 border-2 rounded py-1 " />
        <input placeholder="Password" className=" pl-1 border-2 rounded py-1 " />
        <button className="pl-1 border-blue-500 text-white rounded py-1 px-2 w-5/5 bg-blue-500" >Login</button>
        <text class=" text-center py-2 text-blue-500 cursor-pointer">Signup Page</text>
    </div>

    <div v-if="Signup"   class=" rounded w-2/5 border-2 flex flex-col p-2  bg-white mx-auto absolute gap-2 top-2/5 left-0 px-4 right-0">
        <text class=" text-center py-2">Signup</text>
        <input placeholder=" Enter email" className=" pl-1 border-2 rounded py-1 " />
        <input placeholder=" Enter Mobile no" className=" pl-1 border-2 rounded py-1 " />
        <input placeholder="Password" className=" pl-1 border-2 rounded py-1 " />
        <button className="pl-1 border-blue-500 text-white rounded py-1 px-2 w-5/5 bg-blue-500" >Signup Page</button>
       
    </div>


    <div v-if="Edit"   class=" rounded w-2/5 border-2 flex flex-col p-2  bg-white mx-auto absolute gap-2 top-2/5 left-0 px-4 right-0">
        <text class=" text-center py-2">Edit</text>
        <input placeholder=" Enter email" className=" pl-1 border-2 rounded py-1 " />
        <input placeholder="Password" className=" pl-1 border-2 rounded py-1 " />
        <button className="pl-1 border-blue-500 text-white rounded py-1 px-2 w-5/5 bg-blue-500"  >Login</button>
        <a href="/about">About</a> |
        
    </div>


    

	

    </div>
</template>