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

    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 2;

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
	
	  scene.enablePhysics();
	
	  sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0.9 }, scene);
	  ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

    
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