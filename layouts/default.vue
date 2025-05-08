<template>
  <UApp>
    <Navbar />
    <UPage>
      <slot />
    </UPage>
  </UApp>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
</script>
