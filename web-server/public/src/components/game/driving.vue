<template>
  <div>
    <canvas ref="canvas" id="Scene-canvas" touch-action="none"></canvas>
  </div>
</template>

<script>
module.exports = {
  mounted() {
    const canvas = this.$refs['canvas']
    const engine = new BABYLON.Engine(canvas, true)
    // Create the scene space
    let scene = new BABYLON.Scene(engine)

    // Add a camera to the scene and attach it to the canvas
    let camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene)
    camera.attachControl(canvas, true)

    // Add lights to the scene
    let light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene)
    let light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene)

    // Add and manipulate meshes in the scene
    let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {}, scene)

    
    engine.runRenderLoop(() => {
      scene.render()
    })

    // Watch for browser/canvas resize events
    window.addEventListener("resize", () => {
      engine.resize()
    })
  },
  beforeRouteEnter (to, from, next) {
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    next()
  },
  beforeRouteLeave (to, from, next) {
    document.documentElement.style.overflow = 'auto'
    document.body.style.overflow = 'auto'
    next()
  }
}
</script>

<style scoped>
#Scene-canvas {
  width: 100%;
  height: 100%;
  touch-action: none;
}
</style>