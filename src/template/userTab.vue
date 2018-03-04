<template>
  <div class="userTab">
    <Menu theme="light" active-name="1">
      <MenuGroup title="个人中心">
        <MenuItem name="1" @click.native="pagego('./admininfo')">
          <Icon type="document-text"></Icon>
          个人信息
        </MenuItem>
        <MenuItem name="2" @click.native="pagego('./release')">
          <Icon type="chatbubbles"></Icon>
            发布房源
          </MenuItem>
        </MenuGroup>
    </Menu>
  </div>
</template>
<script>


export default{
  data () {
    return {
      spinShow: true,
     
    }
  },
  components:{
    
  },
  created(){
    
  },
  methods:{
    pagego(url){
        console.log(url)
        this.$Spin.show();
            setTimeout(() => {
                this.$router.push({path: url})
                this.$Spin.hide();
            }, 800);
        }
    }    
}
</script>

<style>

</style>