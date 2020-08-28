<template>
    <b-container fluid class="mt-2">
        <b-row>
            <b-col>
                <b-card border-variant="dark" class="text-center" title="Live">
                    <video-player class="vjs-custom-skin" :options="playerOptions">
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
                height: '360',
                sources: [{
                    type: "rtmp/mp4",
                    src: "rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov"
            }],
            techOrder: ['flash'],
            autoplay: false,
            controls: true,
            poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-9.jpg"
        }
      }
    }
}
</script>

<style></style>