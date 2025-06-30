<template>
  <section id="who-we-help" class="py-16 bg-white">
    <UContainer>
      <h2 class="text-3xl font-bold text-center mb-12">Who We Help</h2>

      <div class="flex flex-wrap justify-center gap-4">
        <UBadge v-for="type in types" :key="type" size="lg" variant="soft" color="primary">
          {{ type }}
        </UBadge>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const types = [
  'Inherited Homes',
  'Foreclosure',
  'Divorce',
  'Tired Landlords',
  'Relocation',
  'Vacant Properties',
  'Behind on Payments',
  'Downsizing',
  'Fire-Damaged Homes',
  'Probate Sales'
]
</script>
