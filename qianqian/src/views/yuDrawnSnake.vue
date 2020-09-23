<template>
  <div>
      <canvas ref="yuCanvas" :width="canvasWidth" :height="canvanHeight"></canvas>
  </div>
</template>

<script>

  export default {
      name: "yuDrawnSnake",
      data() {
          return {
            canvas: null,
            ctx: null,
            canvasWidth: 80,
            canvasHeight: 80
          }
      },
      methods: {
          // 画蛇
          drawnShake({}) {

          }
      },
      mounted() {
          this.canvas = this.$refs.yuCanvas
          this.ctx = this.canvas.getContext('2d')
      }
  }
</script>

<style scoped>

</style>
