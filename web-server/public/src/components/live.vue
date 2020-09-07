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
require('../assets/video-js.min.css')
const { videojs, videoPlayer } = require('vue-video-player')
require('videojs-youtube')

module.exports ={
    name: 'live',
    components:{
        videoPlayer
    },
    data() {
      return {
        playerOptions: {
            fluid: true,
            techOrder: ['youtube'],
            sources: [{
                type: "video/youtube",
                src: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            }],
            // poster: "/static/img/backgrounds/feature-video.jpg"
        }
      }
    }
}
</script>
