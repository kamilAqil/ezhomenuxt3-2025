<template>
  <section id="meet-the-team" class="py-16 bg-gray-50">
    <UContainer>
      <h2 class="text-3xl font-bold text-center mb-12">Meet Our Team</h2>

      <div class="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
        <div v-for="member in team" :key="member.name">
          <UCard class="p-4">
            <img
              :src="member.photo"
              :alt="member.name"
              class="rounded-full w-24 h-24 object-cover mx-auto mb-4"
            />
            <h3 class="text-lg font-semibold">{{ member.name }}</h3>
            <p class="text-sm text-gray-600">{{ member.role }}</p>
          </UCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const team = [
  {
    name: 'Kamil Aqil',
    role: 'Founder & CEO',
    photo: '/team/sarah.jpg'
  },
  {
    name: 'Naila Aqil',
    role: 'Acquisition Manager',
    photo: '/team/mark.jpg'
  },
  {
    name: 'Magnolia Aldana',
    role: 'Operations Lead',
    photo: '/team/lisa.jpg'
  },
]
</script>

<style lang="scss" scoped>

</style>