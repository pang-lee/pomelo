<template>
  <Scene>
    <Camera type="arcRotate" :beta="Math.PI / 4" :radius="10"></Camera>
    <HemisphericLight diffuse="#F00"></HemisphericLight>
    <Entity>
      <Animation v-model="myModel" property="position.z" :duration="5">
        <Key frame="0%" :value="1"></Key>
        <Key frame="50%" :value="10"></Key>
        <Key frame="100%" :value="15"></Key>
      </Animation>
      <Box></Box>
    </Entity>
  </Scene>
</template>

<script>
module.exports = {

}
</script>