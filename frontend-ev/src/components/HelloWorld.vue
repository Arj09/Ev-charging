<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
    <div class=" w-4/5 mx-auto my-5 justify-center flex flex-row ">
      <text class=" text-center text-3xl" > Add Charging Station</text>
    </div>
    <form className=" w-2/5 mx-auto p-2 border-2 flex flex-col gap-2 rounded">
      <input placeholder="Charging Station name" className=" pl-1 border-2 rounded py-1 " />
      <input placeholder="Power Output (kW)" className=" pl-1 border-2 rounded py-1 " />
      <input placeholder="Connector Type" className="pl-1 border-2 rounded py-1 " />
      <div className="px-1 border-2 rounded py-1 flex flex-row gap-1  ">
        <input placeholder="Power Output (kW)" className=" w-5/5 pl-1 border-2 rounded py-1 " />
        <input placeholder="Connector Type" className="pl-1 w-5/5 border-2 rounded py-1 " />
        <button className="pl-1 border-blue-500 text-white rounded py-1 px-2 w-5/5 bg-blue-500">Find Loaction</button>

      </div>
      <select className=" py-1 border-2 rounded">
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <button className="pl-1 border-blue-500 text-white rounded py-1 px-2 w-5/5 bg-blue-500" > Sumbit</button>




    </form>
  
</template>
