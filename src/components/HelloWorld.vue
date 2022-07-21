<script setup>
import CharacterCards from "@/components/CharacterCards.vue";
defineProps({
  msg: String,
});
</script>

<template>
  <div>
    <h1 class="p-8 text-4xl text-center">
      {{ msg }}
    </h1>
    <CharacterCards />
  </div>
</template>
