<template>
  <section id="contact" class="py-16 bg-gray-50">
    <UContainer>
      <h2 class="text-3xl font-bold text-center mb-8">
        Get Your Free Cash Offer
      </h2>

      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Fill out the form below and we'll get back to you with a no-obligation cash offer within 24 hours.
      </p>

      <UForm :state="form" @submit="handleSubmit" class="max-w-2xl mx-auto space-y-6">
        <UFormGroup label="Your Name" name="name">
          <UInput v-model="form.name" placeholder="Jane Doe" />
        </UFormGroup>

        <UFormGroup label="Email Address" name="email">
          <UInput type="email" v-model="form.email" placeholder="you@example.com" />
        </UFormGroup>

        <UFormGroup label="Phone Number" name="phone">
          <UInput type="tel" v-model="form.phone" placeholder="(123) 456-7890" />
        </UFormGroup>

        <UFormGroup label="Property Address" name="address">
          <UInput v-model="form.address" placeholder="123 Main St, Anaheim, CA" />
        </UFormGroup>

        <UFormGroup label="Brief Description" name="message">
          <UTextarea v-model="form.message" placeholder="Tell us about your home or situation..." />
        </UFormGroup>

        <UButton type="submit" color="primary" size="lg" block :loading="submitting">
          Get My Cash Offer
        </UButton>
      </UForm>
    </UContainer>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  message: ''
})

const submitting = ref(false)

function handleSubmit() {
  submitting.value = true

  // TODO: Replace with real API call or form handling logic
  setTimeout(() => {
    alert('Form submitted! We’ll be in touch shortly.')
    submitting.value = false
    form.value = {
      name: '',
      email: '',
      phone: '',
      address: '',
      message: ''
    }
  }, 1000)
}
</script>
