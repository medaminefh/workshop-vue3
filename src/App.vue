<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import VideoPlayer from "./components/VideoPlayer.vue";
</script>

<template>
  <div id="app">
    <HelloWorld msg="Rick & Morty Characters" />

    <VideoPlayer src="/Dog on the beach.mp4" />
  </div>
</template>
