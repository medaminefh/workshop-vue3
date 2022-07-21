<script setup>
import { ref } from "vue";

import { useGlobalEvents } from "../composables/useGlobalEvent";

defineProps({
  src: String,
});

useGlobalEvents("keypress", (e) => {
  console.log("event", e.key);
  // the space button the key is just an empty space " " 👀 for chrome
  if (e.key == " ") {
    e.preventDefault();
    video.value.paused ? video.value.play() : video.value.pause();
  }
});

const video = ref(null);
</script>

<template>
  <video ref="video" loop muted playsinline :src="src" width="600"></video>

  <div>
    <button @click="video.play()">Play</button>
    <button @click="video.pause()">Pause</button>
  </div>
</template>
