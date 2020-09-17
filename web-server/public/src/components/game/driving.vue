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


   // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

  console.log(process.env.test)

    BABYLON.SceneLoader.ImportMesh("", "./Dude/", "Dude.babylon", scene, function (meshes) {          
        scene.createDefaultCameraOrLight(true, true, true);
        scene.createDefaultEnvironment();
        
    });

  //  var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2,  Math.PI / 4, 5, BABYLON.Vector3.Zero(), scene);
  //   camera.attachControl(canvas, true);
	
	// //Light direction is up and left
	// var light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(-1, 1, 0), scene);
	// light.diffuse = new BABYLON.Color3(1, 0, 0);
	// light.specular = new BABYLON.Color3(0, 1, 0);
	// light.groundColor = new BABYLON.Color3(0, 1, 0);
	
	// var grass0 = new BABYLON.StandardMaterial("grass0", scene);
	// grass0.diffuseTexture = new BABYLON.Texture(require("./drive/grass.jpg"), scene);
	
	// var grass1 = new BABYLON.StandardMaterial("grass1", scene);
	// grass1.emissiveTexture = new BABYLON.Texture(require("./drive/grass_grass_0131_01.jpg"), scene);
	
	// var grass2 = new BABYLON.StandardMaterial("grass2", scene);
	// grass2.ambientTexture = new BABYLON.Texture(require("./drive/sky.jpg"), scene);
	// grass2.diffuseColor = new BABYLON.Color3(1, 0, 0);
	
	// //diffuse texture
	// var sphere0 = BABYLON.MeshBuilder.CreateSphere("sphere0", {}, scene);
	// sphere0.position.x = -1.5;
	// sphere0.material = grass0;	
	
	// //emissive texture 
	// var sphere1 = BABYLON.MeshBuilder.CreateSphere("sphere1", {}, scene);
	// sphere1.material = grass1;
	
	// //ambient texture and diffuse color
	// var sphere2 = BABYLON.MeshBuilder.CreateSphere("sphere2", {}, scene);
	// sphere2.material = grass2;
	// sphere2.position.x = 1.5;

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
    window.scrollTo(0,0)
    next()
  },
  beforeRouteLeave (to, from, next) {
    document.documentElement.style.overflow = 'auto'
    document.body.style.overflow = 'auto'
    window.scrollTo(0,0)
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