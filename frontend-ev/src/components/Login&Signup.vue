<script setup>



</script>


<template>

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






</template>