<template>
  <div id="app">
    <canvas ref="canvas" id="canvas" touch-action="none"></canvas>
  </div>
</template>

<script>
module.exports = {
  mounted() {

  //      const canvas = this.$refs['canvas']
  //   const engine = new BABYLON.Engine(canvas, true)
  //       var scene = new BABYLON.Scene(engine);

	// /********** UNIVERSAL CAMERA EXAMPLE **************************/

  //   // This creates and positions a universal camera (non-mesh)
	// var camera = new BABYLON.UniversalCamera("camera", new BABYLON.Vector3(0, 0, -10), scene);

  //   // This targets the camera to scene origin
  //   camera.setTarget(BABYLON.Vector3.Zero());

  //   // This attaches the camera to the canvas
  //   camera.attachControl(canvas, true);

	// /**************************************************************/

  //   // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  //   var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
	
	// //Materials
	// var redMat = new BABYLON.StandardMaterial("red", scene);
	// redMat.diffuseColor = new BABYLON.Color3(1, 0, 0);
	// redMat.emissiveColor = new BABYLON.Color3(1, 0, 0);
	// redMat.specularColor = new BABYLON.Color3(1, 0, 0);
	
	// var greenMat = new BABYLON.StandardMaterial("green", scene);
	// greenMat.diffuseColor = new BABYLON.Color3(0, 1, 0);
	// greenMat.emissiveColor = new BABYLON.Color3(0, 1, 0);
	// greenMat.specularColor = new BABYLON.Color3(0, 1, 0);
	
	// var blueMat = new BABYLON.StandardMaterial("blue", scene);
	// blueMat.diffuseColor = new BABYLON.Color3(0, 0, 1);
	// blueMat.emissiveColor = new BABYLON.Color3(0, 0, 1);
	// blueMat.specularColor = new BABYLON.Color3(0, 0, 1);
	
	// // Shapes
	// var plane1 = new BABYLON.Mesh.CreatePlane("plane1", 3, scene, true, BABYLON.Mesh.DOUBLESIDE);
	// plane1.position.x = -3;
	// plane1.position.z = 0;
	// plane1.material = redMat;
	
	// var plane2 = new BABYLON.Mesh.CreatePlane("plane2", 3, scene, true, BABYLON.Mesh.DOUBLESIDE);
	// plane2.position.x = 3;
	// plane2.position.z = -1.5;
	// plane2.material = greenMat;
	
	// var plane3 = new BABYLON.Mesh.CreatePlane("plane3", 3, scene, true, BABYLON.Mesh.DOUBLESIDE);
	// plane3.position.x = 3;
	// plane3.position.z = 1.5;
	// plane3.material = blueMat;
	
  // var ground = BABYLON.Mesh.CreateGround("ground1", 10, 10, 2, scene);

  //     engine.runRenderLoop(() => {
  //     scene.render()
  //   })
  
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
  }
}
</script>

<style scoped>
#app{
  overflow-x: hidden;
}

#canvas{
  width: 80%;
  height: 80%;
  touch-action: none;
}
</style>