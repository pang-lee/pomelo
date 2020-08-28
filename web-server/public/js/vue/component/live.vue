<template>
    <b-container fluid class="mt-2">
        <b-row>
            <b-col>
                <b-card border-variant="dark" class="text-center" title="Live">
                    <video-player class="vjs-custom-skin" :options="playerOptions"></video-player>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
module.exports ={
    data() {
      return {
        playerOptions: {
            fluid: true,
            techOrder: ['youtube'],
            sources: [{
                type: "video/youtube",
                src: "https://youtu.be/ag96S-QvYrg"
            }],
            // poster: "/static/img/backgrounds/feature-video.jpg"
        }
      }
    }
}
</script>

<style></style>