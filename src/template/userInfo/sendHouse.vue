<template>
  <div id="sendHouse">
    <ul>
      <li>
          姓名:
          <Input v-model="value" placeholder="" style="width: 300px"></Input>
      </li>
      <li>
          电话号码:
          <Input v-model="value" placeholder="" style="width: 300px"></Input>
      </li>
      <li>
         <Button type="success">发布</Button>
      </li>
    </ul>  
  </div>
</template>

<script>

  export default {
    name: 'sendHouse',
    data(){
      return{
        value:''
      }
    },
    created(){

    },
    methods:{

    }
  }
</script>

<style>

</style>