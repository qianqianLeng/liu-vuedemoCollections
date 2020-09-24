<template>
  <div class="box about">
    我是 ABOUT 組件
  </div>
</template>

<script>
export default {
  data() {
    
  },
  created() {
  },
  mounted(){

  },
  components: {
  },
  methods: {
    
  },
  watch: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
}
.about {
}
.ul-block {
  height: 90px;
  padding: 5px 0;
}
.block_li {
  display: inline-block;
  width: 80px;
  height: 80px;
  border: solid 1px #ddd;
  margin: 10px;
  position: relative;
}
.block_li i {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
